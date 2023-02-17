const CustomerSection = () => {
  return (
    <section className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Happy Customer Says</h2>
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-around">
        <CustomerCard />
        <CustomerCard />
      </div>
    </section>
  );
};

const CustomerCard = () => {
  return (
    <div className="flex flex-col border border-black rounded-lg shadow w-[300px] items-center p-4 sm:w-[400px]">
      <img src="/human.png" alt="img" />
      <figcaption>Lyod Gomez</figcaption>
      <div className="self-start">
        <i class="ri-double-quotes-l text-orange text-2xl opacity-50"></i>
      </div>
      <article>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure
      </article>
      <div className="self-end">
        <i class="ri-double-quotes-r text-orange text-2xl opacity-50"></i>
      </div>
    </div>
  );
};

export default CustomerSection;
