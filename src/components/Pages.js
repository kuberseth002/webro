import React from 'react'

function Pages() {
  return (
    <>
    <header class="page-header">
        <h1>Welcome to Our Content Page</h1>
    </header>
    <main>
        <section id="section1" class="content-section">
            <h2>Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor vel velit iaculis tincidunt.</p>
        </section>
        <section id="section2" class="content-section">
            <h2>Section 2</h2>
            <p>Integer a libero sed lorem convallis suscipit. Sed eu neque neque. Duis non sem non tortor congue euismod.</p>
        </section>
        <section id="section3" class="content-section">
            <h2>Section 3</h2>
            <p>Fusce viverra ante eget tortor vestibulum ultricies. Vivamus ac urna vel ligula pharetra rhoncus.</p>
        </section>
    </main>
    <footer class="page-footer">
        <p>&copy; 2023 Your Company</p>
    </footer>

    </>
    )
}

export default Pages