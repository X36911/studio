'use client';

export default function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-100 via-green-100 to-cyan-100">
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Admin Dashboard
      </h1>
      <p className="text-md text-gray-700 text-center">
        Welcome, Administrator!
      </p>
    </div>
  );
}
