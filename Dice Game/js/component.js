const component = {}

component.registerPage = `
<div class="register-container">
        <form id='register-form'>
            <div id="register-header">Dice Game</div>
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First Name" name="firstName">
                    <div class="error" id="first-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last Name" name="lastName">
                    <div class="error" id="last-name-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="User Name" name='userName'>
                <div class="error" id="user-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Email" name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="error" id="password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Comfirm Password" name="comfirmPassword">
                <div class="error" id="comfirm-password-error"></div>
            </div>
            <div class="form-action">
                <div>Already have an account ? <span class="cursor-pointer" id="login-btn">Login</span></div>
                <button class="btn cursor-pointer" type="submit">Register</button>
            </div>
        </form>
    </div>
`
component.loginPage = `
<div class="login-container">
      <form id="login-form">
        <div id="login-header">Dice Game</div>
        <div class="input-wrapper">
          <input type="email" placeholder="Email" name="email">
          <div id="email-error" class="error" ></div>
        </div>
        <div class="input-wrapper">
          <input type="password" placeholder="Password" name="password">
          <div id="password-error" class="error" ></div>
        </div>
        <div class="form-action">
          <div>Don't have an account? <span class="cursor-pointer " id='register-btn' >Register</span></div>
          <button class="btn cursor-pointer btn-login" type="submit">Login</button> 
        </div>
      </form>
    </div>
    `;