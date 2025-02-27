import { useState } from "react";
import "./NavBar.css";
import {motion} from "framer-motion";
import { ClipboardCheck, Menu, X } from "lucide-react";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.div className={`navbar ${menuOpen?"navbar-open":""}`}
                    initial={{y:-100,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className="leftPart">
                <ClipboardCheck size={40} color="green" strokeWidth={1.5} />
                <h2>TaskLytic</h2>
            </div>

            <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>

            <div className={`center ${menuOpen ? "open" : ""}`}>
                <h3>Dashboard</h3>
                <h3>Workflow</h3>
                <h3>Testimonials</h3>
            </div>

            <div className={`rightPart ${menuOpen ? "open" : ""}`}>
                <button>Login</button>
                <button>SignUp</button>
            </div>
        </motion.div>
    );
};

export default NavBar;

