require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000

mongoose.set('strictQuery',false)

const connectDB = async()=>{
	try {
		const conn = await mongoose.connect(process.env.DATABASE_URL)
		console.log(`Mongodb Connected`)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

app.use(express.json())
app.use(cors())
// const commentrouter = require('./routes/comment')
// app.use('/comment',commentrouter)

const userrouter = require('./routes/UserRoute')
app.use('/user',userrouter)


const providerMember = require('./routes/ProviderRoute')
app.use('/member',providerMember)

const caseRouter = require('./routes/CasesRoute')
app.use('/case',caseRouter)

app.get('/healthCheck',(req,res)=>{
	res.send({"Stat": true })
})

connectDB().then(()=>{
	app.listen(PORT,()=>{
		console.log(`Server on ${PORT}`);

	})
})

// const db = mongoose.connection
// db.on('error',(error)=>{ console.log(error) })
// db.once('open',()=>{ console.log('connected') })
//
//
//
//
