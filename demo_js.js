// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================
    // MOBILE NAVIGATION
    // ========================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // ========================
    // SMOOTH SCROLLING
    // ========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========================
    // HERO SECTION DEMONSTRATIONS
    // ========================
    const toggleHtmlBtn = document.getElementById('toggle-html');
    const toggleCssBtn = document.getElementById('toggle-css');
    const toggleJsBtn = document.getElementById('toggle-js');
    const demoOutput = document.getElementById('demo-output');
    
    // HTML Demonstration
    toggleHtmlBtn.addEventListener('click', function() {
        demoOutput.innerHTML = `
            <h3>🏗️ HTML in Action!</h3>
            <p>HTML creates the structure of web pages using elements like:</p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <code>&lt;h1&gt;This is a heading&lt;/h1&gt;</code><br>
                <code>&lt;p&gt;This is a paragraph&lt;/p&gt;</code><br>
                <code>&lt;button&gt;This is a button&lt;/button&gt;</code>
            </div>
            <p>Without CSS, this is how websites would look - just plain text and basic structure!</p>
        `;
        
        // Highlight HTML elements temporarily
        document.querySelectorAll('h1, h2, h3, p, button').forEach(el => {
            el.classList.add('highlight-html');
            setTimeout(() => el.classList.remove('highlight-html'), 3000);
        });
    });
    
    // CSS Demonstration
    toggleCssBtn.addEventListener('click', function() {
        demoOutput.innerHTML = `
            <h3>🎨 CSS in Action!</h3>
            <p>CSS makes websites beautiful by controlling:</p>
            <ul style="text-align: left; margin: 15px 0;">
                <li>Colors and backgrounds</li>
                <li>Fonts and text styling</li>
                <li>Layout and positioning</li>
                <li>Animations and effects</li>
            </ul>
            <div id="css-demo-live" style="background: #e9ecef; padding: 15px; border-radius: 8px; transition: all 0.5s ease;">
                Watch this box transform with CSS!
            </div>
        `;
        
        // Animate the demo box
        setTimeout(() => {
            const demoBox = document.getElementById('css-demo-live');
            if (demoBox) {
                demoBox.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
                demoBox.style.color = 'white';
                demoBox.style.transform = 'scale(1.1) rotate(2deg)';
                demoBox.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
            }
        }, 500);
    });
    
    // JavaScript Demonstration
    toggleJsBtn.addEventListener('click', function() {
        const currentTime = new Date().toLocaleTimeString();
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        demoOutput.innerHTML = `
            <h3>⚡ JavaScript in Action!</h3>
            <p>JavaScript makes websites interactive and dynamic:</p>
            <div style="background: #d4edda; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <strong>Current time:</strong> ${currentTime}<br>
                <strong>Random color:</strong> <span style="background: ${randomColor}; color: white; padding: 2px 8px; border-radius: 4px;">${randomColor}</span><br>
                <strong>You clicked this button!</strong> JavaScript detected your click and updated this content.
            </div>
            <p>JavaScript can calculate, respond to user actions, and change content in real-time!</p>
        `;
        
        // Add pulsing effect
        demoOutput.classList.add('highlight-js');
        setTimeout(() => demoOutput.classList.remove('highlight-js'), 3000);
    });
    
    // ========================
    // HTML DEMO SECTION
    // ========================
    const addHtmlBtn = document.getElementById('add-html');
    const htmlDemo = document.getElementById('html-demo');
    let htmlElementCount = 0;
    
    addHtmlBtn.addEventListener('click', function() {
        htmlElementCount++;
        const newElement = document.createElement('div');
        newElement.innerHTML = `
            <p style="background: #e3f2fd; padding: 10px; margin: 5px 0; border-radius: 5px; border-left: 4px solid #2196f3;">
                <strong>New HTML Element #${htmlElementCount}</strong><br>
                Created with: <code>&lt;p&gt;This is paragraph ${htmlElementCount}&lt;/p&gt;</code>
            </p>
        `;
        htmlDemo.appendChild(newElement);
        
        // Animate new element
        newElement.style.opacity = '0';
        newElement.style.transform = 'translateY(20px)';
        setTimeout(() => {
            newElement.style.transition = 'all 0.5s ease';
            newElement.style.opacity = '1';
            newElement.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // ========================
    // CSS DEMO SECTION
    // ========================
    const changeCssBtn = document.getElementById('change-css');
    const cssElement = document.getElementById('css-element');
    let cssStyleIndex = 0;
    
    const cssStyles = [
        {
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a6f)',
            color: 'white',
            transform: 'rotate(5deg) scale(1.1)',
            borderRadius: '20px',
            boxShadow: '0 10px 20px rgba(255,107,107,0.4)'
        },
        {
            background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            color: 'white',
            transform: 'skew(-5deg) scale(0.9)',
            borderRadius: '50%',
            boxShadow: '0 15px 30px rgba(78,205,196,0.4)'
        },
        {
            background: 'linear-gradient(45deg, #f093fb, #f5576c)',
            color: 'white',
            transform: 'rotate(-10deg) scale(1.2)',
            borderRadius: '10px',
            boxShadow: '0 20px 40px rgba(245,87,108,0.4)'
        },
        {
            background: '#f8f9fa',
            color: '#333',
            transform: 'none',
            borderRadius: '5px',
            boxShadow: 'none'
        }
    ];
    
    changeCssBtn.addEventListener('click', function() {
        const currentStyle = cssStyles[cssStyleIndex];
        
        // Apply the new style
        Object.keys(currentStyle).forEach(property => {
            cssElement.style[property] = currentStyle[property];
        });
        
        // Update button text to show what's happening
        changeCssBtn.textContent = `Applied Style ${cssStyleIndex + 1}/4 - Click for Next`;
        
        cssStyleIndex = (cssStyleIndex + 1) % cssStyles.length;
        
        if (cssStyleIndex === 0) {
            changeCssBtn.textContent = 'Change CSS Style';
        }
    });
    
    // ========================
    // JAVASCRIPT DEMO SECTION
    // ========================
    const runJsBtn = document.getElementById('run-js');
    const jsOutput = document.getElementById('js-output');
    const calculateBtn = document.getElementById('calculate');
    const calculator = document.getElementById('calculator');
    const calcResultBtn = document.getElementById('calc-result');
    const resultDiv = document.getElementById('result');
    
    // JavaScript Demo Button
    runJsBtn.addEventListener('click', function() {
        const messages = [
            "Hello! JavaScript is running right now! 👋",
            `Current time: ${new Date().toLocaleString()}`,
            `Random number: ${Math.floor(Math.random() * 1000)}`,
            `Your screen width: ${window.innerWidth}px`,
            "JavaScript can change this text dynamically! ✨",
            `You've clicked this ${Math.floor(Math.random() * 10) + 1} times today! (Just kidding 😄)`
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        jsOutput.innerHTML = randomMessage;
        
        // Add animation
        jsOutput.style.transform = 'scale(0.9)';
        setTimeout(() => {
            jsOutput.style.transition = 'transform 0.3s ease';
            jsOutput.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Calculator Toggle
    calculateBtn.addEventListener('click', function() {
        if (calculator.style.display === 'none') {
            calculator.style.display = 'block';
            calculateBtn.textContent = 'Hide Calculator';
        } else {
            calculator.style.display = 'none';
            calculateBtn.textContent = 'Simple Calculator';
        }
    });
    
    // Calculator Function
    calcResultBtn.addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operator = document.getElementById('operator').value;
        
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.innerHTML = '❌ Please enter valid numbers!';
            resultDiv.style.background = '#f8d7da';
            resultDiv.style.color = '#721c24';
            return;
        }
        
        let result;
        let operation;
        
        switch(operator) {
            case '+':
                result = num1 + num2;
                operation = `${num1} + ${num2}`;
                break;
            case '-':
                result = num1 - num2;
                operation = `${num1} - ${num2}`;
                break;
            case '*':
                result = num1 * num2;
                operation = `${num1} × ${num2}`;
                break;
            case '/':
                if (num2 === 0) {
                    resultDiv.innerHTML = '❌ Cannot divide by zero!';
                    resultDiv.style.background = '#f8d7da';
                    resultDiv.style.color = '#721c24';
                    return;
                }
                result = num1 / num2;
                operation = `${num1} ÷ ${num2}`;
                break;
        }
        
        resultDiv.innerHTML = `✅ ${operation} = <strong>${result}</strong>`;
        resultDiv.style.background = '#d4edda';
        resultDiv.style.color = '#155724';
        
        // Add celebration animation for large results
        if (Math.abs(result) > 1000) {
            resultDiv.innerHTML += ' 🎉 That\'s a big number!';
        }
    });
    
    // ========================
    // CONTACT FORM
    // ========================
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showFormResponse('Please fill in all fields!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormResponse('Please enter a valid email address!', 'error');
            return;
        }
        
        // Simulate form submission
        showFormResponse('Processing your message...', 'success');
        
        setTimeout(() => {
            showFormResponse(`Thank you, ${name}! Your message has been received. This is a demo, so no actual email was sent, but in a real website, JavaScript would send this data to a server.`, 'success');
            contactForm.reset();
        }, 2000);
    });
    
    function showFormResponse(message, type) {
        formResponse.textContent = message;
        formResponse.className = `form-response ${type}`;
        formResponse.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (type === 'error') {
                formResponse.style.display = 'none';
            }
        }, 5000);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ========================
    // SCROLL EFFECTS
    // ========================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Fade in animations for sections
        const sections = document.querySelectorAll('.tech-card, .demo-container');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (scrolled > sectionTop - windowHeight + sectionHeight / 3) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initialize scroll animations
    document.querySelectorAll('.tech-card, .demo-container').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // ========================
    // INTERACTIVE TECH CARDS
    // ========================
    const htmlCard = document.getElementById('html-card');
    const cssCard = document.getElementById('css-card');
    const jsCard = document.getElementById('js-card');
    
    // HTML Card interaction
    htmlCard.addEventListener('click', function() {
        this.style.border = '3px solid #e34c26';
        this.style.boxShadow = '0 0 20px rgba(227, 76, 38, 0.3)';
        
        // Show HTML code example
        const existingCode = this.querySelector('.code-example');
        if (!existingCode) {
            const codeExample = document.createElement('div');
            codeExample.className = 'code-example';
            codeExample.innerHTML = `
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 10px; font-family: monospace; font-size: 0.9em;">
                    &lt;html&gt;<br>
                    &nbsp;&nbsp;&lt;head&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;My Website&lt;/title&gt;<br>
                    &nbsp;&nbsp;&lt;/head&gt;<br>
                    &nbsp;&nbsp;&lt;body&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;<br>
                    &nbsp;&nbsp;&lt;/body&gt;<br>
                    &lt;/html&gt;
                </div>
            `;
            this.appendChild(codeExample);
        }
        
        // Reset other cards
        resetCardStyles(cssCard, jsCard);
    });
    
    // CSS Card interaction
    cssCard.addEventListener('click', function() {
        this.style.background = 'linear-gradient(135deg, #1572b6, #33a9dc)';
        this.style.color = 'white';
        this.style.transform = 'scale(1.05)';
        
        // Show CSS code example
        const existingCode = this.querySelector('.code-example');
        if (!existingCode) {
            const codeExample = document.createElement('div');
            codeExample.className = 'code-example';
            codeExample.innerHTML = `
                <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 5px; margin-top: 10px; font-family: monospace; font-size: 0.9em;">
                    h1 {<br>
                    &nbsp;&nbsp;color: blue;<br>
                    &nbsp;&nbsp;font-size: 24px;<br>
                    &nbsp;&nbsp;text-align: center;<br>
                    }<br><br>
                    .button {<br>
                    &nbsp;&nbsp;background: #007bff;<br>
                    &nbsp;&nbsp;color: white;<br>
                    &nbsp;&nbsp;padding: 10px 20px;<br>
                    }
                </div>
            `;
            this.appendChild(codeExample);
        }
        
        // Reset other cards
        resetCardStyles(htmlCard, jsCard);
    });
    
    // JavaScript Card interaction
    jsCard.addEventListener('click', function() {
        this.style.background = '#f7df1e';
        this.style.color = '#333';
        this.style.animation = 'pulse 1s infinite';
        
        // Show JavaScript code example
        const existingCode = this.querySelector('.code-example');
        if (!existingCode) {
            const codeExample = document.createElement('div');
            codeExample.className = 'code-example';
            codeExample.innerHTML = `
                <div style="background: rgba(0,0,0,0.1); padding: 10px; border-radius: 5px; margin-top: 10px; font-family: monospace; font-size: 0.9em;">
                    function greetUser() {<br>
                    &nbsp;&nbsp;let name = "Student";<br>
                    &nbsp;&nbsp;alert("Hello " + name + "!");<br>
                    &nbsp;&nbsp;console.log("Welcome to JavaScript!");<br>
                    }<br><br>
                    document.addEventListener('click', greetUser);
                </div>
            `;
            this.appendChild(codeExample);
        }
        
        // Reset other cards
        resetCardStyles(htmlCard, cssCard);
    });
    
    function resetCardStyles(...cards) {
        cards.forEach(card => {
            card.style.border = '';
            card.style.boxShadow = '';
            card.style.background = '';
            card.style.color = '';
            card.style.transform = '';
            card.style.animation = '';
            
            // Remove code examples from other cards
            const codeExample = card.querySelector('.code-example');
            if (codeExample) {
                codeExample.remove();
            }
        });
    }
    
    // ========================
    // KEYBOARD SHORTCUTS
    // ========================
    document.addEventListener('keydown', function(e) {
        // Press 'H' to highlight HTML
        if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.altKey) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                toggleHtmlBtn.click();
            }
        }
        
        // Press 'C' to highlight CSS
        if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.altKey) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                toggleCssBtn.click();
            }
        }
        
        // Press 'J' to highlight JavaScript
        if (e.key.toLowerCase() === 'j' && !e.ctrlKey && !e.altKey) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                toggleJsBtn.click();
            }
        }
    });
    
    console.log("🎉 Website loaded successfully!");
    console.log("💡 Try pressing 'H', 'C', or 'J' keys to see demonstrations!");
    console.log("🚀 This website demonstrates HTML, CSS, and JavaScript working together!");
});