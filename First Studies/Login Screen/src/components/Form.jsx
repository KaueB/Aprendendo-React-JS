import '../style/Form.css'

const Form = () => {
    return (
        <form>
            <input type="email" placeholder='Type your e-mail' />
            <input type="password" placeholder='Type your password' />
            <button class="login">Log in</button>
            <a href="#">Forgot your Password?</a>
            <hr />
            <button class="registration">register</button>
        </form>
    )
}

export default Form; 