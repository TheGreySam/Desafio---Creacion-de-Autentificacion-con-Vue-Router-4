<template>
  <div class="home">


<div class="card text-black">
  <!--img class="card-img" src="" alt="Card image"  style="height: 650pt; object-fit: cover;"/-->
  <div class="card-img-overlay ">
	  <section class="h-500 gradient-form" >
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card navpizza rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body  p-md-5 mx-md-4">

                <div class="text-center">
                                  
                </div>

                <form @submit.prevent="login">
                  <p>Porfavor ingresa a tu cuenta</p>

                  <div class="form-outline mb-4">
                      <label class="form-label">Usuario</label>
                    <input 
                    type="email" 
                    id="correo" 
                    class="form-control"
                    v-model="email"
                    required 
                    placeholder="Escribe aquí tu correo"/>
                    
                  </div>

                  <div class="form-outline mb-4">
                      <label class="form-label">Contraseña</label>
                    <input 
                    type="password" 
                    id="contraseña" 
                    class="form-control"
                    v-model="password"
                    required 
                    placeholder="Escribe aquí tu contraseña"/>
                    
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button 
                    class="btn btn-success btn-block fa-lg gradient-custom-2 mb-3" 
                    type="submit"
                    >Ingresa</button>
                    <a class="text-muted" href="#!"> Olvidaste tu contraseña?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">No tienes una cuenta?</p>
                    <button type="" class="btn btn-outline-success">Regístrate</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2 bg-success">
              <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                <!--h4 class="mb-4">Database</h4>
				<img alt="Vue logo" src="../assets/logo.png"-->  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
</div>
</div>  
</template>

<script>
import Firebase from "firebase"

export default {
    data: () => ({
        email: "",
        password: "",
    }),
    methods: {
        login() {
            Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(response => {
                console.log(response.user.email);
                this.$router.push("/")
                alert("Login exitoso")
            })
            .catch(error => {
                console.error(error)
            })
            //console.log(this.email, this.password);
        }
    }
};

</script>

<style scoped>


</style>