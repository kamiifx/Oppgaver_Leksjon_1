# WebApplikasjoner

Prosjektet er veldig åpent, mongoDb cloud kjører på 0.0.0.0.0 så burde være mulig å connecte fra hvor som helst.

### Server kjører på localhost:5000
### Client kjører på localhost:3000
### MongoDb link (Kjører på atlas cloud) : "mongodb+srv://web:web123@cluster0.jkj1x.mongodb.net/Leksjon11DB?retryWrites=true&w=majority"

- Port ligger på bunn av server.js

- Oppgave 1 : Ligger i mappen Wireframes

- Oppgave 2 : Alle er på Controllers,Models,Service,Route

- Oppgave 3 : Global Error Håndtrering i middleware mappen (catchAsync.js og errors.js) samitidig noen try catches hos controller.

- Oppgave 4 : Server: Signup og login er på /routes/auth.js client: client/utils/authService.js, sidene : client/components/SignupForm.js og client/components/LoginForm.js også client/components/Home.js

- Oppgave 4 : Server : NyPoll er på /routes/poll client : client/Components/CreatePoll.js
- Oppgave 4 : Axios Call : client/utils authService.js og pollService.js
- Oppgave 4 : useEffect : på components i client : CreatePoll.js,Home.js,LoginForm.js,SignUpForm.js,Poll.js


# Installasjon og Kjøring
- yarn install på client og root folderen
- yarn run dev for å kjøre server og client

- yarn run server for å kjøre server

# Known issues
- Man må trykke i midten av knappene noen ganger eller flere ganger 

# Slack
- Problemer ? : Slack : Kamii
