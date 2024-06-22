const firebaseConfig = {
    apiKey: "AIzaSyD39mDxkEkhvOqoXam3Vp4kJp0Q5jFOSdI",
    authDomain: "login-63136.firebaseapp.com",
    projectId: "login-63136",
    storageBucket: "login-63136.appspot.com",
    messagingSenderId: "685390654532",
    appId: "1:685390654532:web:d751ced835f663824c2011",
    measurementId: "G-M3QHDD1EF1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("signin.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+ user.email
        showUserDetails(user)
    }
})

document.getElementById('logout').addEventListener('click', Logout)
function Logout() {
    console.log('Logout Btn Call')
    firebase.auth().signOut().then(() => {
        alert('Sign-out successful.');
    }).catch(e => {
        console.log(e)
    })
}

function showUserDetails(user) {

    document.getElementById('userDetails').innerHTML = `
<img src="${user.photoURL}" style="width:10%">
<p>Name: ${user.username}</p>
<p>Email: ${user.email}</p>
`
document.getElementById('email').value = `${user.email}`

const userId = user.uid;

                const storageRef = firebase.storage().ref('users/'+userId+'/profile');

                    storageRef.getDownloadURL().then(function(url) {
                        
                        const img = document.getElementById('profile-photo');
                        img.src = url;
                        
                    });

}

function checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            showUserDetails(user)
        } 
    })
}
checkAuthState()
