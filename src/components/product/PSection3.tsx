import React from 'react';

const items = [
  {
    src: '//eatnumi.com/cdn/shop/files/The_most_potent_ingredients_for_woman_hormones_wrapper.png?v=1772713767&width=2000',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/Worlds_first_with_reindeer_organs_2x_the_power_of_beef_wrapper.png?v=1772713766&width=2000',
    caption: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/They_helped_100_000_people_with_unique_Arctic_Herbs_wrapper.png?v=1772713767&width=2000',
    caption: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/Say_bye_to_fatigue_bloating_hormonal_weight_low_libido.png?v=1772713766&width=2000',
    caption: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/No_more_brain_fog_hot_flashes_or_sleepless_nights..png?v=1772713767&width=2000',
    caption: 'Excepteur sint occaecat cupidatat non proident sunt.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/You_can_feel_like_you_again._Balanced_vibrant_alive..png?v=1772713767&width=2000',
    caption: 'Mollit anim id est laborum lorem ipsum dolor sit amet.',
  },
];

const PSection3: React.FC = () => {
  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: '#fff9f5' }}
      aria-labelledby="psection3-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <h2
            id="psection3-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            style={{ color: '#a31621' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-700 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200/70 flex flex-col"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.src}
                  alt="Feature image"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="p-5 md:p-6 flex-1"
                style={{ backgroundColor: '#ffeaea' }}
              >
                <p className="text-sm md:text-base text-neutral-800 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <a
            href="#buy-box"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#a31621' }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PSection3;
