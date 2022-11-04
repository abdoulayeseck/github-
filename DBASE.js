const sqlite3= require("sqlite3").verbose()

const dbFile= "db.sqlite"

//  Seconnecter a la base de données 

let db = new sqlite3.Database(dbFile,(err)=>{
	if(err){
		
		console.error(err.message)
		throw err
	}else{
		console.log("Connexion a la base sqlite3")
		
		const sql ="CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT,region text,avis text)"
		db.run(sql, (err)=>{
			if (err){
				console.log("table creée");
			}
		})	
	}
})

module.exports = db
