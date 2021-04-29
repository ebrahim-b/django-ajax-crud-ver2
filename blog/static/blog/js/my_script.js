$("#btnsave").click(function(){
    //console.log("Save button clicked");
    output = "";
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
                st_data = response.student_data;
                if (response.status == 'save'){
                    console.log('Form submitted successfully');
                    //console.log(response.student_data);
                    for (i=0; i<st_data.length; i++){
                        output += "<tr><td>" + st_data[i].id + "</td><td>" +
                        st_data[i].name + "</td><td>" + st_data[i].email + "</td><td>" +
                        st_data[i].password + 
                        "</td><td> <input type='button' class='btn btn-warning btn-sm btn-edit' value='Edit' data-sid="+ st_data[i].id + " />" +
                        "<input type='button' class='btn btn-danger btn-sm btn-del' value='Delete' data-sid="+ st_data[i].id + " />";
                    }
                    $("#tbody").html(output);
                    $("form")[0].reset();
                }
            }
        })
    }
});


$("#tbody").on("click", ".btn-del", function(){
    console.log('Delete Button Clicked');
    let csr = $("input[name=csrfmiddlewaretoken").val();
    let id = $(this).attr("data-sid");
    console.log(id)
    $.ajax({
        url: '/delete/',
        type: 'POST',
        data:{sid:id, csrfmiddlewaretoken: csr},
        success: function(respomse){
            console.log('Deleted')
        }
    })
})




