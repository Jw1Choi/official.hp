const template = document.getElementById('menu');
template.innerHTML = `

<div class="dsn-nav-bar">
    <div class="site-header">
        <div class="extend-container">
            <div class="inner-header">
                <div class="main-logo">
                    <a href="index.html">
                        <img class="dark-logo" src="assets/img/logo-dark.png" alt="" />
                        <img class="light-logo" src="assets/img/logo.png" alt="" />
                    </a>
                </div>
            </div>
            <nav class=" accent-menu main-navigation">
                <ul class="extend-container">
                    <li class="custom-drop-down">
                        <a href="#">Home</a>
                        <ul>
                            <li><a href="index.html">Main Demo</a></li>
                            <li><a href="one-page-3.html">One Page Three</a></li>
                            <li><a href="one-page-4.html">One Page Four</a></li>
                        </ul>
                    </li>
                    <li class="custom-drop-down">
                        <a href="#">Slider</a>
                        <ul>
                            <li><a href="slider.html">Slider</a></li>
                            <li><a href="slider2.html">Slider two</a></li>
                            <li><a href="slider3.html">Slider Three</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li class="custom-drop-down">
                        <a href="#">Work</a>
                        <ul>
                            <li><a href="work.html">Work</a></li>
                            <li><a href="project-9.html">Header One</a></li>
                            <li><a href="project-7.html">Header Two</a></li>
                            <li><a href="project-5.html">Header Three</a></li>
                        </ul>
                    </li>
                    <li class="custom-drop-down">
                        <a href="#">Blog</a>
                        <ul>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="post.html">Single Post</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="header-top header-top-hamburger">
        <div class="header-container">
            <div class="logo main-logo">
                <a href="index.html">
                    <img class="dark-logo" src="assets/img/logo-dark.png" alt="" />
                    <img class="light-logo" src="assets/img/logo.png" alt="" />
                </a>
            </div>

            <div class="menu-icon" data-dsn="parallax" data-dsn-move="5">
                <div class="icon-m">
                    <i class="menu-icon-close fas fa-times"></i>
                    <span class="menu-icon__line menu-icon__line-left"></span>
                    <span class="menu-icon__line"></span>
                    <span class="menu-icon__line menu-icon__line-right"></span>
                </div>

                <div class="text-menu">
                    <div class="text-button">Menu</div>
                    <div class="text-open">Open</div>
                    <div class="text-close">Close</div>
                </div>
            </div>

            <div class="nav">
                <div class="inner">
                    <div class="nav__content">

                    </div>
                </div>
            </div>
            <div class="nav-content">
                <div class="inner-content">
                    <address class="v-middle">
                        <span>FLOS</span><br>
                        <span style="color:#a56433;font-weight:450;">Email:</span>
                        <span class="links over-hidden"><a class="link-hover" href="mailto:flosmarketing@naver.com" data-hover-text="flosmarketing@naver.com">flosmarketing@naver.com</a></span><br>
                       <span style="color:#a56433;font-weight:450;">Contact</span><span class="links over-hidden mb-1"><a class="link-hover" href="tel:+82 (010)3041 2734" data-hover-text="010-3041- 2734">010-3041-2734</a></span>
                    </address>
                </div>

            </div>
        </div>
    </div>
</div>

`;

document.body.appendChild(template.content);

