// import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
// import { cn } from "../lib/utils";

// export const ContactSection = () => {

//         const handleSubmit = (e) =>{
//             e.preventDefault()

//             setTimeout(()=>{

//             }, 1500)
//         }


//     return (
//         <section
//             id="contact"
//             className="py-24 px-4 relative bg-secondary/30" >
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//                     Get In <span className="text-primary"> Touch</span>
//                 </h2>

//                 <p className="text-center teext-muted-foreground mb-12 max-w-2xl mx-auto">
//                     Have a project in min or want to collaborate? Feel free to reach out.
//                     I'm always open to discussing new opportunities.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     <div className="space-y-8">
//                         <h3 className="text-2xl font-semibold mb-6">Conatct Information</h3>

//                         <div className="space-y-6 justify-center">
//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <Mail className="h-5 w-6 text-primary" /> {" "}
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium">Email</h4>
//                                     <a href="mailto:mayashankar8651@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
//                                         mayashankar8651@gmail.com
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <Phone className="h-5 w-6 text-primary" /> {" "}
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium">Phone</h4>
//                                     <a
//                                         href="tel:+917004719341"
//                                         className="text-muted-foreground hover:text-primary transition-colors">
//                                         +91 7004719341
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <MapPin className="h-5 w-6 text-primary" /> {" "}
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium">Location</h4>
//                                     <a className="text-muted-foreground hover:text-primary transition-colors">
//                                         Greater Noida, UP, India
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="pt-8">
//                             <h4 className="font-medium mb-4">Contact With Me</h4>
//                             <div className="flex space-x-4 justify-center">
//                                 <a href="https://www.linkedin.com/in/maya-shankar-844a482b1" target="_blank"  className="text-gray-500 hover:text-blue-600 transition-colors duration-300"> 
//                                     <Linkedin />
//                                 </a>
//                                 <a href="http://www.instagram.com/_maya_shankar" target="_blank"
//                                   className="text-gray-500 hover:text-pink-500 transition-colors duration-300">
//                                     <Instagram />
//                                 </a>
//                                 <a href="https://x.com/m30shankar" target="_blank"
//                                  className="text-gray-500 hover:text-sky-500 transition-colors duration-300">
//                                     <Twitter />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-card p-8 rounded-lg shadow-xs">
//                         <h3 className="text-2xl font-semibold mb-5">Send Message</h3>

//                         <form className="space-y-3">
//                             <div>
//                                 <label
//                                     htmlFor="name"
//                                     className="block text-sm font-medium mb-2"
//                                 >
//                                     {" "}
//                                     Your Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     required
//                                     className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                                     placeholder="Maya Shankar..."
//                                 />
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="email"
//                                     className="block text-sm font-medium mb-2"
//                                 >
//                                     {" "}
//                                     Your Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     required
//                                     className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                                     placeholder="mayas@gmail.com"
//                                 />
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="message"
//                                     className="block text-sm font-medium mb-2"
//                                 >
//                                     {" "}
//                                     Your Message
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     required
//                                     className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
//                                     placeholder="Hello, I like to talk about..."
//                                 />
//                             </div>

//                             <button type="submit" className={cn(
//                                 "cosmic-button w-full flex items-center justify-center gap-2"
//                             )}>
//                                 Send Message
//                                 <Send size={16} />
//                             </button>

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };






import {  Instagram, Linkedin, Mail, MapPin, Phone, Send, XIcon} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

export const ContactSection = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Format WhatsApp message
        const whatsappMessage = `Hello, I'm ${name} (${email}).%0A%0A${message}`;
        const phoneNumber = "917004719341"; // 🔹 Replace with your WhatsApp number (no + sign)

        // Open WhatsApp chat
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Simulate a small delay (optional)
        setTimeout(() => {
            setLoading(false);
            window.open(whatsappURL, "_blank"); // open WhatsApp in new tab
            e.target.reset();
        }, 800);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-5 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:mayashankar8651@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        mayashankar8651@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-5 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+917004719341"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 7004719341
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-5 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Greater Noida, UP, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/maya-shankar-844a482b1"
                                    target="_blank"
                                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="http://www.instagram.com/_maya_shankar"
                                    target="_blank"
                                    className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
                                >
                                    <Instagram />
                                </a>
                                <a
                                    href="https://x.com/m30shankar"
                                    target="_blank"
                                    className="text-gray-500 hover:text-sky-500 transition-colors duration-300"
                                >
                                    <XIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Form) */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-5">Send Message via WhatsApp</h3>

                        {/* ✅ WhatsApp send handler */}
                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder=" enter name..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="enter email..."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I’d like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-full hover:bg-primary/90 transition"
                                )}
                            >
                                {loading ? "Opening WhatsApp..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
