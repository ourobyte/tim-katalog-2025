const pages = {
  page1: `
    <section class="space-y-4">
      <h1 class="text-3xl font-bold">Home</h1>
      <p class="text-gray-600">Selamat datang. Konten Home tampil di sini.</p>
    </section>
  `,

  page2: `
    <section>
      <h1 class="text-2xl font-bold">Halaman 1</h1>
      <p class="mt-2 text-gray-600">Ini isi dari Button 1.</p>
    </section>
  `,

  page3: `
    <section>
      <h1 class="text-2xl font-bold">Halaman 2</h1>
      <p class="mt-2 text-gray-600">Ini isi dari Button 2.</p>
    </section>
  `,

  page4: `
    <section>
      <h1 class="text-2xl font-bold">Halaman 3</h1>
      <p class="mt-2 text-gray-600">Ini isi dari Button 3.</p>
    </section>
  `

    page5: `
    <section>
      <h1 class="text-2xl font-bold">Halaman 3</h1>
      <p class="mt-2 text-gray-600">Ini isi dari Button 3.</p>
    </section>
  `

    page6: `
    <section>
      <h1 class="text-2xl font-bold">Halaman 3</h1>
      <p class="mt-2 text-gray-600">Ini isi dari Button 3.</p>
    </section>
  `
};

// event SPA
document.getElementById("app-header").addEventListener("click", (e) => {
  const page = e.target.getAttribute("data-page");
  if (!page) return;
  document.getElementById("app-content").innerHTML = pages[page];
});

// default load
document.getElementById("app-content").innerHTML = pages.page1;

