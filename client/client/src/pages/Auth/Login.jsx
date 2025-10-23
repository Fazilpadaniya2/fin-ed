//first i will write an html
//Have possibly 2 or 3 useState variables namely formdata, err,
//change the form data using onChange, and then submit a get request using axios
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import api from '../../lib/api.js'
function Login(){

    const [form, setForm] = useState({email: "", password:""});
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const nav = useNavigate();
    function onChange(e){
        const  name =e.target.name;
        const value = e.target.value;

        setErr("");
        
        setForm(previousForm=>({...previousForm, [name]: value}));
    }

    async function onSubmit(e){

        e.preventDefault();
        if(!form.email||!form.password){
            setErr("please fill all the fileds!");
        return;
        }

        try{
            setLoading(true);

            //deconstructing the response from axios post which comes as {data:{neededthings}, status:{}....}
            const {data} = await api.post('/auth/login',{
                email: form.email,
                password: form.password
            })
            const token = data.token;
            const user = data.user;

            //saving token in localstorage
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            nav('/');
        }catch(err){
            setErr(err.message);
        }finally{
            setLoading(false);
        }
    }


    return(
        <>
            <div className="min-h-screen bg-neutral-50 text-neutral-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg ring-1 ring-black/10 bg-white p-6">
        <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
        <p className="text-sm text-neutral-500 mb-6">Sign in to continue.</p>

        {err && (
          <div className="mb-4 rounded-lg border border-danger-500/30 bg-danger-500/10 px-3 py-2 text-sm">
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4" aria-busy={loading}>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              autoComplete="email"
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
              placeholder="your password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-neutral-100 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500 bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white py-2.5 font-medium transition"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        
        <span>
          <Link to={"/register"} className="text-info-600 hover:underline">
          Don't have an account? Sign up
          </Link>
        </span>
      </div>
    </div>

        </>
    )
}

export default Login;
