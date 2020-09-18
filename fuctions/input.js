const alertList =document.querySelector('.alert-List');

db.collection('Alerts').get().then(snapshot => {
    setUIAlerts(snapshot.docs);
    //console.log(snapshot.docs);
});

const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        const li=`
         <li>
         <div class="alertholder">
                <h3>${alert.alertName}</h3>
                <p>${alert.alertDiscription}</p>
                <span>${alert.geolocation}</span>
         </div>
           
         </li>
        `;
        html +=li;
    });
    alertList.innerHTML=html;
};
