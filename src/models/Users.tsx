import firebase from '../models/firebase'

class User {
    
    table: string = "user"

    auth = async (email: string, password: string) => new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(this.table)
            .orderByChild("email")
            .equalTo(email)
            .on('value', (snapshot) => {
                const res = snapshot.val();
                if(res[0].password === password) {
                    resolve(res[0]);
                } else {
                    reject({});
                }
            });
    });
    
    list = async () => {
        let result: any = {};
        await firebase.database().ref(this.table).on('value', (snapshot)=>{
            const res = snapshot.val();
            console.log("Data list", res);
            result = res
        });
        return result;
    }

    insert = async(email: string, password: string, status: string) => {
        let result: any = {
            status: false,
            message: ""
        };
        await firebase.database().ref(this.table)
        .set({
            userId: this.list.length,
            email: email,
            password: password,
            status: status
        })
        .then((res)=> {
            result = {
                status: true,
                message: "Berhasil"
            };
        })
        .catch((e) => {
            result = {
                status: false,
                message: "Failed to insert data"
            };
        });
        return result;
    }

    update = async (userId: string, email: string, password: string, status: string) => {
        let result = {
            status: false,
            message: ""
        };
        await firebase.database().ref(this.table)
            .child(userId)
            .set({
                email: email,
                password: password,
                status: status
            }).then((res) => {
                result = {
                    status: true,
                    message: "data updated success"
                };
            }).catch((e) => {
                result = {
                    status: false,
                    message: e.message
                };
            });
        return result;
    }
}

export default User;