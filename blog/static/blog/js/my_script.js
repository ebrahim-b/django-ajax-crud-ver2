$("#btnsave").click(function(){
    console.log("Save button clicked");
    let nm = $("#nameid").val();
    let em = $("#emailid").val();
    let pw = $("#passwordid").val();
    let csr = $("input[name=csrfmiddlewaretoken").val();
    //console.log(nm);

    if (em != "" && nm !="" && pw !=""){
        //console.log("okkkkk");
        mydata = {name:nm, email:em, password:pw, csrfmiddlewaretoken: csr};
        $.ajax({
            url: '/save/',
            method: 'POST',
            data:mydata,
            success:function(response){
                //console.log(response);
                if (response.status == 'save'){
                    console.log('Form submitted successfully')
                }
            }
        })
    }
});




