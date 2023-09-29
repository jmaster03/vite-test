export function HeaderTop() {
    return (
        <div className="header-top">
        <div className="container">
            <div className="header-left">
            <a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a>
            
            </div>

            <div className="header-right">
               

                <div className="header-dropdown">
                    <a href="#">Theme</a>
                    <div className="header-menu">
                        <ul>
                            <li><a href="#">Dark</a></li>
                            <li><a href="#">Light</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}