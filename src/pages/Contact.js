import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Modal from "modalagnes73";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = async (data) => {
    console.log(data);
    // Obtenir la date actuelle
     // Obtenir la date actuelle en secondes
  const currentDateInSeconds = Math.floor(Date.now() / 1000);
    try {
      // Ajouter la propriété "date" avec la date actuelle en secondes à l'objet "data"
      data.date = currentDateInSeconds;
      data.notified = false
      // Envoyer les données sur Firebase
      const docRef = await addDoc(collection(db, "messages"), data);
      console.log("Document written with ID: ", docRef.id);
      window.scrollTo(0, 0);
      setIsOpen(true);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          modalTitle="Message envoyé !"
          modalText="Merci beaucoup !"
          button
          buttonbg="red-500"
          buttonTextColor="neutral-000"
          buttonbgHover="red-700"
        />
      )}
      <div className="bg-gradient-to-r from-zinc-500 to-zinc-800 flex flex-col items-center w-full h-auto lg:min-h-[1366px]">
        <Navbar />

        <main className="overflow-hidden sm:mt-32 mt-16">
          {/* Header */}

          {/* Contact section */}
          <section className="" aria-labelledby="contact-heading">
            <div className=" mx-auto max-w-7xl px-6 lg:px-8 shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contactez-nous
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
                {/* Contact information */}
                <div className="relative overflow-hidden bg-gradient-to-b from-gray-500 to-gray-600 py-10 px-6 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="pointer-events-none absolute inset-0 sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Contactez-nous
                  </h3>
                  <p className="mt-6 max-w-3xl text-base text-red-50">
                    Vous nous avez vu en concert ? Vous souhaitez que l'on fasse
                    une prestation pour vous ? Voici nos coordonnées !
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-red-50">
                      <PhoneIcon
                        className="h-6 w-6 flex-shrink-0 text-red-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">06 58 13 66 51</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-red-50">
                      <EnvelopeIcon
                        className="h-6 w-6 flex-shrink-0 text-red-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">267legroupe@gmail.com</span>
                    </dd>
                  </dl>
                  <ul className="mt-8 flex space-x-12">
                    <li>
                      <a
                        className="text-red-200 hover:text-red-100"
                        href="https://www.facebook.com/groupe267"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebook className="text-2xl" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="sm:text-lg font-medium text-white">
                    Ou envoyez nous un message via ce formulaire !
                  </h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-white"
                      >
                        Prénom
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("firstname", { required: true })}
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-white"
                      >
                        Nom
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("lastname", { required: false })}
                          type="text"
                          name="lastname"
                          id="lastname"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("email", { required: false })}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-white"
                        >
                          Téléphone
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          {...register("phone", { required: false })}
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-red-500 focus:ring-red-500"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-white"
                      >
                        Objet
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("subject", { required: true })}
                          type="text"
                          name="subject"
                          id="subject"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-white"
                        >
                          Message
                        </label>
                      </div>
                      <div className="mt-1">
                        <textarea
                          {...register("message", { required: true })}
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-red-500 focus:ring-red-500"
                          aria-describedby="message-max"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-red-300 shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Contact grid */}
        </main>
      </div>
    </>
  );
}
