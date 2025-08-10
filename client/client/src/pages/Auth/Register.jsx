import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import api from "../../lib/api";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  
  //what this does is everytime some changes have been made in the form in fields of username email and password
  //e.target catches the change and (e)=>{}
  function onChange(e){
   const name = e.target.name;
   const value = e.target.value;
   setErr('');
   //this is require because if we just use setForm(..prev, [name]: value) then in cases such as
   //where two setForms are triggered together eg:
   //setForm({ ...form, a: 1 });
   //setForm({ ...form, b: 2 });
   //both of the uses the same old version of the "form" variable, so eventho "a" is changed from the first
   //line of code, 2nd line of code using b which is using the same old version of form rather than "a" updated one, overrides a and makes it as it was in old version
    setForm(previousForm=>({...previousForm, [name]:value}));
    console.log(e.target.value);
  }

 async function onSubmit(e){
    e.preventDefault();
    setLoading(true);

    
//checking if all the sections are filled before processing
    if(!form.username || !form.email || !form.password){
      setErr("fill all the field");
    setLoading(false);
      return;
    } 
    try{
    //showsloadingicon
    const {data} = await api.post("/auth/register", {
      username: form.username,
      email: form.email,
      password: form.password
    });

    //pushing toekn and user detail we get from the api req to the localstorage for future use so we dont have to call api for every small detail
    const token = data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log(JSON.stringify(data.user))

    //then here we will navigate the user on succesfull registration to home page
    nav("/")
}catch(err){
  setErr(err.message);
}finally{
    setLoading(false);

}
    
  }


  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg ring-1 ring-black/10 bg-white p-6">
        <h1 className="text-2xl font-bold mb-1">Create your account</h1>
        <p className="text-sm text-neutral-500 mb-6">
          Start learning money smarts the fun way.
        </p>

        {err ? (
          <div className="mb-4 rounded-lg border border-danger-500/30 bg-danger-500/10 px-3 py-2 text-sm">
            {err}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder="eg. finkid"
              className="w-full rounded-xl border border-neutral-100 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-neutral-100 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder="min 6 characters"
              className="w-full rounded-xl border border-neutral-100 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500 bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white py-2.5 font-medium transition"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="text-sm text-neutral-500 mt-6">

          Already have an account?{" "}
       
  <Link to="/login" className="text-info-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
