import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  const socialLinks = [
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/votre-username',
    //   icon: FaGithub
    // },
    // {
    //   name: 'LinkedIn',
    //   url: 'https://www.linkedin.com/in/iamjomoreira/',
    //   icon: FaLinkedin
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://x.com/iamjomoreira',
    //   icon: FaTwitter
    // }
  ]

  return (
    <footer className="bg-gray-800 text-white shadow-lg mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="mb-4 sm:mb-0 text-center">
            <p className="text-gray-300">
              <span className="font-semibold text-lg">Jordan Moreira</span>
              <span className="text-sm ml-2">© {new Date().getFullYear()}</span>
            </p>
          </div>
          
          {/* <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
