import React from "react";

function Upcoming() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4 fixed w-screen h-screen top-0 left-0 text-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-blue-400/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400/15 rounded-full animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-16 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
            New Website
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Coming Soon
          </span>
        </h1>

        {/* Progress Indicator */}
        <div className="w-full max-w-md">
          <div className="flex justify-between text-sm text-purple-200 mb-3">
            <span>Progress</span>
            <span>95%</span>
          </div>
          <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-white/20">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 h-3 rounded-full animate-progress-fill relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
