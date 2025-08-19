<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TBook - Borrow and Read Books</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white font-sans">

  <!-- Navbar -->
  <nav class="flex justify-between items-center p-6 bg-[#7b4b32] text-white">
    <div class="text-2xl font-bold">tbook</div>
    <div class="hidden md:flex space-x-6 text-sm">
      <a href="#" class="hover:underline">Home</a>
      <a href="#" class="hover:underline">About</a>
      <a href="#" class="hover:underline">Contact Us</a>
      <button class="bg-white text-[#7b4b32] px-4 py-1 rounded-full hover:bg-gray-200">Register</button>
      <button class="border border-white px-4 py-1 rounded-full hover:bg-gray-700">Login</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bg-[#7b4b32] text-white text-center py-20 relative">
    <div class="text-4xl md:text-5xl font-bold mb-4">borrow and <br> read books for <br> free !!</div>
    <!-- Gambar Buku -->
    <img src="your-book-image.png" alt="Book" class="w-52 md:w-72 absolute right-8 top-10 hidden md:block">
  </section>

  <!-- Category Section -->
  <section class="px-6 md:px-16 py-10">
    <h2 class="text-2xl font-semibold mb-4">Category</h2>
    <div class="flex gap-4 flex-wrap">
      <button class="border rounded-full px-6 py-2 hover:bg-gray-100">Action</button>
      <button class="border rounded-full px-6 py-2 hover:bg-gray-100">Comedy</button>
      <button class="border rounded-full px-6 py-2 hover:bg-gray-100">Drama</button>
      <button class="border rounded-full px-6 py-2 hover:bg-gray-100">Fantasy</button>
      <button class="border rounded-full px-6 py-2 hover:bg-gray-100">Slice of life</button>
    </div>
  </section>

  <!-- Popular Books Section -->
  <section class="px-6 md:px-16 pb-20">
    <h2 class="text-2xl font-semibold mb-4">Popular Books</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <!-- Book Card -->
      <div class="flex flex-col items-center text-center">
        <div class="w-32 h-48 bg-gray-200 mb-2"> <!-- Gambar buku -->
          <img src="your-book-cover.png" alt="Book Cover" class="w-full h-full object-cover rounded-md">
        </div>
        <h3 class="text-sm font-semibold">Book Title</h3>
        <p class="text-xs text-gray-600">Author Name</p>
        <!-- Bintang Rating -->
        <div class="flex items-center justify-center mt-1">
          ⭐⭐⭐⭐⭐
        </div>
      </div>
      <!-- Duplicate the above block for more books -->
    </div>
  </section>

</body>
</html>
