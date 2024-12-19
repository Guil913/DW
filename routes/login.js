module.exports = {
    content:`
        <div class="login-container window">
            <div class="title-bar">
                <div class="title-bar-text">Login - Windows 98</div>
            </div>

            <div class="form-content">
                <form>
                
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" placeholder="Enter your username" required>
                    </div>

                
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter your password" required>
                    </div>

                
                    <div class="checkbox-group">
                        <input type="checkbox" id="remember">
                        <label for="remember">Remember Me</label>
                    </div>

                
                    <div class="form-actions">
                        <button type="reset" class="reset">Reset</button>
                        <button type="submit" class="submit">Login</button>
                    </div>

                
                    <div class="forgot-password">
                        <a href="#">Forgot your password?</a>
                    </div>
                </form>
            </div>
        </div>
    `
}