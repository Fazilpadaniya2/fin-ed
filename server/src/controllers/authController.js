        import {pool} from '../config/db.js'
        import bcrypt from 'bcrypt'
        import jwt from 'jsonwebtoken';



        export const registerRoute = async (req, res)=>{
        
        try{
            
            //checking if the user already exists
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
        return res.status(400).json({ error: 'username, email, and password are required' });
        }
        const exists = await pool.query(
        'SELECT 1 FROM users WHERE email=$1 OR username=$2 LIMIT 1',
        [email, username]
        );
        if (exists.rows.length) {
            console.log(res.error)
        return res.status(409).json({ error: 'username or email already in use' });
        }

            //hashing pass
            const salt = await  bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            //sql query
            const sql = `
            INSERT INTO users (username, email, password_hash)
            VALUES ($1, $2, $3)
            RETURNING user_id, username, email, role, created_at
            `;
            //posting on db
            const {rows} = await pool.query(sql, [username, email, hashedPassword]);

        //generating a jwt token for token puposes lol
            const user = rows[0];

            const payload = { id: user.id, username: user.username, role: user.role };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

            res.status(201).json({ token, user: payload });
            }
            catch(err){
                if (err.code === '23505') {
        return res.status(409).json({ error: 'username or email already in use' });
        }
        console.error('register error:', err);
        return res.status(500).json({ error: 'server error' });
    }
            }
        

        export const loginRoute = async (req, res) => {
            try {
                const loginForm = req.body; //getting users credential from the request

                const { email, password } = loginForm;
                const { rows } = await pool.query('SELECT * FROM users WHERE email =$1', [email]);

                const user = rows[0];
                if (!user) {
                    return res.status(401).json('invalid credentials');
                }

                const ok = await bcrypt.compare(password, user.password_hash);
                if (!ok) {
                    return res.status(401).json('invalid password');
                }

                const payload = { id: user.id, username: user.username, email: user.email, role: user.role };
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

                res.status(200).json({ token, user: payload });
            } catch (err) {
                console.log("error");
                res.status(500).json(`${err.message}`);
            }
        
        
        }

        export async function me(req, res) {
    // requireAuth sets req.user if JWT is valid
    res.json({ user: req.user });
    }
