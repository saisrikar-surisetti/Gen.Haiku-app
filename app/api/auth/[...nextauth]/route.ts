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
              async authorize(credentials, req) {
               
                const DATABASE_URL ='postgresql://neondb_owner:4EKaxhsMjn6O@ep-noisy-dew-a40jplai.us-east-1.aws.neon.tech/neondb?sslmode=require'      
                const sql = neon(`${process.env.DATABASE_URL}`);
                const response = await sql('SELECT * FROM users2 WHERE email=($1)', [credentials?.email] );
                const user = response  
                const user2 = user[0]
                const user3 = user2.password

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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      return true
    }
  }
});

export {handler as GET, handler as POST};