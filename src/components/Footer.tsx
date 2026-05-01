"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-violet-100 bg-linear-to-r from-violet-50 via-white to-violet-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center">

        {/* Title */}
        <h2 className="text-lg font-semibold text-violet-700">
          <span className="text-xl font-bold">C</span>ourse<span className="text-xl font-bold">C</span>art
        </h2>

        {/* Tagline */}
        <p className="mt-1 text-sm text-slate-500">
          Build your learning journey with ease.
        </p>

        {/* Divider */}
        <div className="mx-auto my-4 h-px w-24 bg-violet-200" />

        {/* Bottom Text */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} CourseCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}