// export default function Example() {
//   return (
//     <section className="bg-gray-900 pb-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-32">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
//             <figure className="mt-10 flex flex-auto flex-col ">
//               <blockquote className="text-lg leading-8 text-white">
//                 <p>
//                   “A great tool for organizing emails. All other services are
//                   either too expensive or buggy.”
//                 </p>
//               </blockquote>
//               <figcaption className="mt-10 flex items-center gap-x-6">
//                 <img
//                   className="h-14 w-14 rounded-full bg-gray-800"
//                   src="https://ui-avatars.com/api/?name=shiva&background=553DE7&color=fff"
//                   alt="Customer profile image"
//                 />
//                 <div className="text-base">
//                   <div className="font-semibold text-white">Shiva H.</div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>
//           <div className="flex flex-col border-white/10 pt-10 sm:pt-16 lg:pl-8 lg:pt-0 xl:pl-20">
//             <figure className="mt-10 flex flex-auto flex-col justify-between">
//               <blockquote className="text-lg leading-8 text-white">
//                 <p>
//                   “Great product! Helps me unsubscribe, delete and label my mail
//                   much quicker. Congrats on the launch!”
//                 </p>
//               </blockquote>
//               <figcaption className="mt-10 flex items-center gap-x-6">
//                 <img
//                   className="h-14 w-14 rounded-full bg-gray-800"
//                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//                 <div className="text-base">
//                   <div className="font-semibold text-white">Samar A.</div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const testimonials = [
  {
    body: `A great tool for organizing emails. All other services are either too expensive or buggy.`,
    author: {
      name: "Shiva H.",
    },
  },
  {
    body: `Great product! Helps me unsubscribe, delete and label my mail much quicker. Congrats on the launch`,
    author: {
      name: "Samar A.",
    },
  },
  {
    body: `Great help in managing your emails in just a few minutes!`,
    author: {
      name: "Jerome C.",
    },
  },
  {
    body: `What I really needed,this is amazing @lessmail! All the best on your launch!`,
    author: {
      name: "Mary M.",
    },
  },
  {
    body: `Love the product!`,
    author: {
      name: "Sanya S.",
    },
  },
  {
    body: `Lessmail will save me hours & 💰 in Google storage, brilliant. 💯 Exactly what I have been hunting for. 😎`,
    author: {
      name: "Sair M.",
    },
  },
];

export default function Reviews() {
  return (
    <div className="bg-gray-900 pb-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Tusted by thousands
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Happy customers, with less stressful inboxes.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.name}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-700 p-8 text-sm leading-6">
                  <blockquote className="text-white">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-700"
                      src={`https://ui-avatars.com/api/?name=${testimonial.author.name}&background=553DE7&color=fff`}
                      alt="Lessmail customer profile image"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author.name}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
