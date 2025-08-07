// Login/Register Tab Switching
        const loginTab = document.getElementById('loginTab');
        const registerTab = document.getElementById('registerTab');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        loginTab.addEventListener('click', () => {
            loginTab.classList.add('tab-active');
            registerTab.classList.remove('tab-active');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });

        registerTab.addEventListener('click', () => {
            registerTab.classList.add('tab-active');
            loginTab.classList.remove('tab-active');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });

        // Show loading screen and then dashboard
        function showDashboard() {
            document.getElementById('loginModal').classList.add('hidden');
            document.getElementById('loadingScreen').classList.remove('hidden');
            
            setTimeout(() => {
                document.getElementById('loadingScreen').classList.add('hidden');
                document.getElementById('dashboard').classList.remove('hidden');
            }, 2000);
        }

        // Login Form Submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showDashboard();
        });

        // Register Form Submission
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Show success message
            const successDiv = document.createElement('div');
            successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
            successDiv.textContent = '註冊成功！正在為您登入...';
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                document.body.removeChild(successDiv);
                showDashboard();
            }, 2000);
        });

        // Social Login
        document.querySelectorAll('.social-login').forEach(btn => {
            btn.addEventListener('click', () => {
                const provider = btn.getAttribute('data-provider');
                const successDiv = document.createElement('div');
                successDiv.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
                successDiv.textContent = `正在透過 ${provider.toUpperCase()} 登入...`;
                document.body.appendChild(successDiv);
                
                setTimeout(() => {
                    document.body.removeChild(successDiv);
                    showDashboard();
                }, 1500);
            });
        });

        // Close Login Modal
        document.getElementById('closeLogin').addEventListener('click', () => {
            showDashboard();
        });

        // Dashboard Tab Switching
        const dashboardTabs = document.querySelectorAll('.dashboard-tab');
        const tabContents = document.querySelectorAll('.tab-content');

        dashboardTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab');
                
                // Update tab styles
                dashboardTabs.forEach(t => {
                    t.classList.remove('bg-purple-50', 'text-purple-600', 'font-medium');
                    t.classList.add('text-gray-600');
                });
                tab.classList.add('bg-purple-50', 'text-purple-600', 'font-medium');
                tab.classList.remove('text-gray-600');
                
                // Show/hide content
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });
                document.getElementById(targetTab).classList.remove('hidden');
            });
        });

        // Dropdown toggles
        document.getElementById('notificationBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('notificationDropdown');
            dropdown.classList.toggle('hidden');
            document.getElementById('userDropdown').classList.add('hidden');
        });

        document.getElementById('userMenuBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('userDropdown');
            dropdown.classList.toggle('hidden');
            document.getElementById('notificationDropdown').classList.add('hidden');
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.getElementById('notificationDropdown').classList.add('hidden');
            document.getElementById('userDropdown').classList.add('hidden');
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => {
            if (confirm('確定要登出嗎？')) {
                document.getElementById('dashboard').classList.add('hidden');
                document.getElementById('loginModal').classList.remove('hidden');
            }
        });

        // Interactive features
        document.addEventListener('click', (e) => {
            // Heart toggle for favorites
            if (e.target.classList.contains('favorite-btn') || (e.target.textContent === '❤️' && e.target.tagName === 'BUTTON')) {
                e.target.classList.toggle('text-red-500');
                e.target.classList.toggle('text-gray-400');
            }
            
            // Download buttons
            if (e.target.classList.contains('download-btn') || e.target.textContent === '重新下載') {
                const originalText = e.target.textContent;
                e.target.textContent = '下載中...';
                e.target.disabled = true;
                e.target.classList.add('opacity-50');
                
                setTimeout(() => {
                    e.target.textContent = '已下載 ✓';
                    e.target.classList.remove('bg-purple-600', 'hover:bg-purple-700');
                    e.target.classList.add('bg-green-600');
                    
                    setTimeout(() => {
                        e.target.textContent = originalText;
                        e.target.disabled = false;
                        e.target.classList.remove('opacity-50', 'bg-green-600');
                        e.target.classList.add('bg-purple-600', 'hover:bg-purple-700');
                    }, 2000);
                }, 1500);
            }
            
            // Print buttons
            if (e.target.classList.contains('print-btn') || e.target.textContent.includes('列印')) {
                const originalText = e.target.textContent;
                e.target.textContent = '列印中...';
                e.target.disabled = true;
                e.target.classList.add('opacity-50');
                
                setTimeout(() => {
                    e.target.textContent = '列印完成 ✓';
                    e.target.classList.remove('bg-purple-600', 'hover:bg-purple-700');
                    e.target.classList.add('bg-green-600');
                    
                    setTimeout(() => {
                        e.target.textContent = originalText;
                        e.target.disabled = false;
                        e.target.classList.remove('opacity-50', 'bg-green-600');
                        e.target.classList.add('bg-purple-600', 'hover:bg-purple-700');
                    }, 2000);
                }, 2000);
            }
        });

        // Form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.tagName === 'FORM' && !e.target.id.includes('login') && !e.target.id.includes('register')) {
                e.preventDefault();
                const successDiv = document.createElement('div');
                successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
                successDiv.textContent = '設定已更新！';
                document.body.appendChild(successDiv);
                
                setTimeout(() => {
                    document.body.removeChild(successDiv);
                }, 3000);
            }
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96b6f2a605f2f1bc',t:'MTc1NDU3MTUzMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
