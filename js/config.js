var api = {
		path:"http://pizzapi.esy.es/services/",
		users:'user/',
		products:'products/',
		order:'order/',
		loginUser: function(functionSuccess){
			var data = {
					user: $('#login #user').val(),
					password: $('#login #password').val()
				};

			this.callService(data, this.users, 'login', functionSuccess);

		},
		regiserUser: function(functionSuccess){
			var data = { name: $('#register #firstName').val() + ' ' +   $('#register #lastName').val(),
					  address:$('#register #address').val() ,
					  zipCode: $('#register #zipCode').val(),
					  phone: $('#register #phone').val(),
					  email: $('#register #email').val(),
					  gender: $('#register #gender').val(),
					  user: $('#register #user').val(),
					  password: $('#register #password1').val()
					};
			console.log(data);
			if( ( $('#register #password1').val() == $('#register #password1').val() ) && ($('#register #password1').val()!= "" && $('#register #password1').val() !="") ){
				if($('#terminos').is(":checked"))
					this.callService(data, this.users, 'signup', functionSuccess);
				else
					alert('falta terminos y condiciones');
			}else{
				if($('#register #password1').val()== "" && $('#register #password1').val() =="" ){
					alert('Empty fields');
				}else{
					alert('');
				}
			}
		},
		callService:function(data, controller, action, functionSuccess){
			console.log(this.path+ controller+action);
			var url = this.path+controller+action
			$.ajax({
				url:url,
				dataType: "jsonp", 
				data: data,
				success:function(json){
				 console.log(json);
				 alert(json.msg)
				 	functionSuccess(json);
				},
				error:function(){
					alert("Error");
				}
			});

		}
};