import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt";
import { neon } from '@neondatabase/serverless';

const handler = NextAuth({
  session: {
    strategy:"jwt",
  
  },
  pages:{
    signIn: '/SignIn'
  },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
              },
              async authorize(credentials) { //took out req
               
                
                const sql = neon(`${process.env.DATABASE_URL}`);
                const response = await sql('SELECT * FROM users2 WHERE email=($1)', [credentials?.email] );
                const user = response  
                console.log({user})
                const user2 = user[0]
                

                const passwordCorrect = await compare(credentials?.password || '', 
                  user2.password );
                console.log({passwordCorrect})

                if(passwordCorrect){
                  return{
                    id: user2.id,
                    email: user2.email,

                  }
                    

                  
                }

               return null;

              },

        }),
    ],
    secret: process.env.SECRET, 
});

export {handler as GET, handler as POST};