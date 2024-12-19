module.exports = {
    content: `
        <div class="register-container window">
            <div class="title-bar">
                <div class="title-bar-text">The Vault</div>
            </div>

            <div class="form-content">
                <form action="/api/register" method="POST">
                    <fieldset class="form-section">
                        <legend>Personal Information</legend>
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Create a password" required>
                        </div>
                    </fieldset>

                    <fieldset class="form-section">
                        <legend>Contact Details</legend>
                        <div class="form-group">
                            <label for="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
                        </div>
                        <div class="form-group">
                            <label for="country">Country:</label>
                            <select id="country" name="country" required>
                                <option value="" disabled selected>Select your country</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ca">Canada</option>
                                <option value="au">Australia</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset class="form-section">
                        <legend>Preferences</legend>
                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="newsletter" name="newsletter">
                            <label for="newsletter">Subscribe to newsletter</label>
                        </div>
                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="updates" name="updates" checked>
                            <label for="updates">Receive updates about new features</label>
                        </div>
                    </fieldset>

                    <div class="form-actions">
                        <button type="reset" class="reset">Reset</button>
                        <button type="submit" class="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    `
}