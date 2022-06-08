
export default function ContactMeForm() {
     async function sendEmail(e) {
        e.preventDefault();
        const form = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            form[field.name] = field.value;
        });

        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(form)
        });
        console.log(form);
    }
    return(

            <div className="w-full md:max-w-full pt-4 xl:pr-20 md:pl-20 md:pr-20">
                <div className="p-6 border border-gray-300 sm:rounded-md">
                    <form method="POST" onSubmit={sendEmail}>
                        <label className="block mb-6">
                            <span className="text-gray-700">Your name</span>
                            <input
                                type="text"
                                name="name"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="Joe Bloggs"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Email address</span>
                            <input
                                name="email"
                                type="email"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="joe.bloggs@example.com"
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Message</span>
                            <textarea
                                name="message"
                                style={{ resize: 'none' }}
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                rows={3}
                                placeholder="Tell us what you're thinking about..."
                            ></textarea>
                        </label>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="
            h-10
            px-5
            text-indigo-100
            bg-stone-800
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-900
          "
                            >
                                Contact me
                            </button>
                        </div>

                    </form>
                </div>
            </div>




    )


}