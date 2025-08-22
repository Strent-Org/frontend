
const Privacy = () => {
  return (
    <section className="w-full">
      <div className="px-6 sm:px-8 md:px-16 lg:px-32 py-10">
        {/* Breadcrumb */}
        <ul className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-inter text-[#6E6F70]">
          <li>
            <a className="text-[#1E1E1E]" href="/">Home</a>
          </li>
          <li>/</li>
          <li>
            <a className="text-[#FF6B57]" href="/privacy">Privacy Policy</a>
          </li>
        </ul>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold font-sora text-[#1E1E1E] mt-2 mb-6">
          Privacy Policy
        </h1>

        <p className="text-base font-inter mb-6 text-[#1E1E1E]">
          At Strent, we care deeply about your privacy. This Privacy Policy explains how we collect,
          use, and protect your information when you use our platform to rent homes or book shortlets in Nigeria.
        </p>

        {/* Content */}
        <div className="text-[#1E1E1E] font-inter flex flex-col gap-6">
          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              What Information We Collect
            </h2>
            <span className="block mt-2">
              When you use Strent, we may collect:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Personal Information: Full name, email, phone number, address</li>
              <li>Account Data: Login credentials, preferences, saved listings</li>
              <li>Payment Info: Card details or bank transfers (processed securely via third-party services)</li>
              <li>Usage Data: Pages visited, searches, location (if enabled)</li>
              <li>Communications: Messages with landlords, agents, or support</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              How We Use Your Information
            </h2>
            <span className="block mt-2">
              We use your information to:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Create and manage your Strent account</li>
              <li>Match you with relevant rental and shortlet listings</li>
              <li>Process your bookings and payments securely</li>
              <li>Respond to your inquiries or support requests</li>
              <li>Improve platform performance and user experience</li>
              <li>Send updates, confirmations, and rental alerts (you can opt out anytime)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              How We Protect Your Information
            </h2>
            <span className="block mt-2">
              We use industry-standard measures to keep your data safe:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Encrypted data transfer (HTTPS/SSL)</li>
              <li>Secure payment processing via trusted third-party gateways</li>
              <li>Strict access controls for user data</li>
            </ul>
            <span className="block mt-2">
              We never sell or rent your personal information to third parties.
            </span>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Who We Share Your Data With
            </h2>
            <span className="block mt-2">
              We may share limited data with:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Verified landlords/agents — only when you show interest or make a booking</li>
              <li>Payment processors — to complete your transaction</li>
              <li>Service providers — who help us operate our platform (e.g., email, hosting)</li>
              <li>Law enforcement — only when legally required</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Your Choices and Rights
            </h2>
            <span className="block mt-2">
              You can:
            </span>
            <ul className="list-disc pl-6 mt-2">
              <li>Access or update your personal info via your profile</li>
              <li>Request to delete your account and data</li>
              <li>Opt out of marketing messages anytime</li>
              <li>Contact us to exercise your privacy rights</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Location and Data Hosting
            </h2>
            <p className="mt-2">
              Strent operates in Nigeria. Your data may be stored in Nigeria or securely on trusted cloud servers located in other countries.
            </p>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Children’s Privacy
            </h2>
            <p className="mt-2">
              Strent is not intended for users under 18. We do not knowingly collect data from minors.
            </p>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Updates to this Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy as our services evolve. We’ll notify you via email or on our website when significant changes are made.
            </p>
          </div>

          <div>
            <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold">
              Contact Us
            </h2>
            <p className="mt-2">If you have questions about this Privacy Policy or how we handle your data:</p>
            <p className="mt-2">Email: privacy@strent.ng</p>
            <p className="mt-2">Phone: +234 913 456 7890</p>
            <p className="mt-2">Office Address: 3rd Floor, Civic Hub Building, Victoria Island, Lagos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;



