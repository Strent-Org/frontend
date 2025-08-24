
const Terms = () => {
  return (
    <section className="w-full relative">
      <img
          className="hidden lg:block fixed right-6 bottom-6 w-12 h-12 z-50 cursor-pointer"
          src="/chat.png"
          alt="chat icon"
        />
      <div className="px-6 sm:px-8 md:px-16 lg:px-32 py-12">
        {/* Breadcrumb */}
        <ul className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-inter text-[#6E6F70]">
          <li>
            <a className="text-[#1E1E1E]" href="/">Home</a>
          </li>
          <li>/</li>
          <li>
            <a className="text-[#FF6B57]" href="/terms">Terms & Condition</a>
          </li>
        </ul>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold font-sora text-[#1E1E1E] mt-2 mb-6">
          Terms & Conditions
        </h1>

        <div className="mb-6 ">
            <p className="text-base font-inter mb-4 text-[#1E1E1E]">
              Welcome to Strent. These Terms and Conditions (“Terms”) govern your use of the Strent website and services (“Platform”). By accessing or using our Platform, you agree to be bound by these Terms.
            </p>
            <p className="text-base font-inter text-[#1E1E1E]">If you do not agree, please do not use Strent.</p>
        </div>

        {/* Content */}
        <div className="text-[#1E1E1E] font-inter flex flex-col gap-6">
          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              About Strent
            </h2>
            <p className="block mt-2">
              Strent is a platform that connects users with verified property listings for long-term rentals and shortlet accommodations in Nigeria. We are not a real estate agency; we provide tools to help users discover, book, and manage rentals safely and efficiently.
            </p>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              User Eligibility
            </h2>
            <span className="block mt-2">
              To use Strent, you must:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Be at least 18 years old</li>
              <li>Provide accurate personal and contact information</li>
              <li>Agree to comply with all Nigerian laws and regulations</li>
            </ul>
            <span className="block mt-4">
              You are responsible for keeping your account credentials secure and for all activity under your account.
            </span>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Property Listings
            </h2>
            <p className="mt-2">All listings are posted by landlords, agents, or property managers (“Hosts”). While Strent verifies listings and host profiles, we do not own or manage the properties.</p>
            <span className="block mt-2">
              We are not liable for:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>False descriptions or misrepresentations by hosts</li>
              <li>Changes to pricing, availability, or amenities</li>
              <li>Disputes between tenants and hosts</li>
            </ul>
            <span className="block mt-4">
              We encourage users to inspect properties or request a virtual tour before confirming a booking.
            </span>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Bookings & Payments
            </h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Payments are processed through secure, third-party payment providers</li>
              <li>Some properties may require full payment upfront, while others may offer installment options</li>
              <li>Refund and cancellation policies vary by listing and will be clearly stated</li>
              <li>Law enforcement — only when legally required</li>
            </ul>
            <span className="block mt-4">Strent is not responsible for refunds outside our policies or for payments made directly to landlords outside our platform.</span>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Prohibited Use
            </h2>
            <span className="block mt-2">
              You agree not to:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Post false or misleading property listings</li>
              <li>Attempt to scam or defraud users</li>
              <li>Upload harmful software or use bots/scrapers</li>
              <li>Violate another person’s rights or privacy</li>
            </ul>
            <span className="block mt-4">Violation of these terms may result in suspension or permanent removal from the platform.</span>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Communication
            </h2>
            <span className="block mt-2">
              By using Strent, you consent to receive communication via:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Email (for confirmations, updates, and offers)</li>
              <li>In-app notifications or SMS (optional)</li>
            </ul>
            <span className="block mt-4">You can unsubscribe from promotional messages anytime.</span>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Privacy
            </h2>
            <p className="mt-2">
              Your use of Strent is also governed by our <a className="underline" href="/privacy" target="_blank">Privacy Policy</a>, which explains how we collect, use, and protect your personal data.
            </p>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Limitation of Liability
            </h2>
            <p className="mt-2">Strent is provided “as is.” We do our best to ensure reliability, but we make no guarantees that the platform will be error-free or uninterrupted.</p>
            <span className="block mt-2">
              We are not liable for:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Losses due to listing inaccuracies</li>
              <li>Property damages or tenant disputes</li>
              <li>Third-party actions or unauthorized access</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Modifications
            </h2>
            <p className="mt-2">
              We may update these Terms from time to time. You will be notified of significant changes via email or on our platform. Continued use after changes means you accept the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Governing Law
            </h2>
            <p className="mt-2">
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any legal disputes shall be resolved in the courts located in Lagos State.
            </p>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Contact Us
            </h2>
            <p className="mt-2">Have questions or concerns about these Terms?</p>
            <p className="mt-2">Email: legal@strent.ng</p>
            <p className="mt-2">Phone: +234 913 456 7890</p>
            <p className="mt-2">Office Address: 3rd Floor, Civic Hub Building, Victoria Island, Lagos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;



