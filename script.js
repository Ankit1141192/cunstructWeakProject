
        function toggleDropdown() {
            const modal = document.getElementById('businessModal');
            modal.classList.toggle('active');
        }

        window.addEventListener('click', function (e) {
            const modal = document.getElementById('businessModal');
            if (!e.target.closest('.home') && !e.target.closest('#businessModal')) {
                modal.classList.remove('show');
            }
        });



        document.getElementById("logoutButton").addEventListener("click", function () {
            console.log("testtt");
            localStorage.removeItem("user");
            window.location.href = "login.html";
        });
        function toggleDropdown() {
            const profileContainer = document.querySelector(".profile-container");
            profileContainer.classList.toggle("active");    
        }
        document.addEventListener("click", function (e) {
            const profileContainer = document.querySelector(".profile-container");
            if (!profileContainer.contains(e.target)) {
            profileContainer.classList.remove("active");
        }
        });

        //Messaging Toggle
        const messages = [
            { name: "Stitipragyan Behera", preview: "How are you?", time: "3:42 PM", image: "./photos/stitu.jpg" },
            { name: "Harsh Joshi", preview: "Hi Sameer, I'm Harsh...", time: "Dec 18", image: "./photos/pritam.jpg", sponsored: true },
            { name: "Chandrika Patel", preview: "You: 👍", time: "Dec 18", image: "./photos/chandrika.jpg" },
            { name: "Veda Prasad", preview: "Dreaming to Work &...", time: "Dec 10", image: "./photos/harsh.jpg", sponsored: true },
            { name: "Aman Kashyap", preview: "Working as Profession...", time: "Nov 13", image: "./photos/aman.jpg" },
            { name: "Suraj Kumar", preview: "Freshers...", time: "August 28", image: "./photos/shubham.jpg" },
            { name: "Ritesh Yadav", preview: "Experience Guys...", time: "May 19", image: "./photos/laksh.jpg" },
            { name: "Monu Kashyap", preview: "Join Us for Snowflake...", time: "April 3", image: "./photos/monu.jpg" },
        ];

        function renderMessages() {
            const messageList = document.getElementById("messageList");
            messageList.innerHTML = "";

            messages.forEach(msg => {
                const item = document.createElement("div");
                item.className = "message-item";
                item.innerHTML = `
                    <img src="${msg.image}" alt="Profile Picture">
                    <div class="message-details">
                        <div class="message-name">${msg.name}${msg.sponsored ? ' <span class="sponsored">Sponsored</span>' : ""}</div>
                        <div class="message-preview">${msg.preview}</div>
                    </div>
                    <div class="message-time">${msg.time}</div>
                `;
                messageList.appendChild(item);
            });
        }

        function toggleMessagingPanel() {
            const panel = document.getElementById("messagingPanel");
            panel.classList.toggle("open");
        }
        renderMessages();

        

        
        
     