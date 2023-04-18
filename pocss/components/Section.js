const colors = {
  blue: "bg-blue-100",
  red: "bg-red-100",
  green: "bg-green-100",
};
function Section({ title, backgroundColor, children }) {
  return (
    <div className={`p-16 ${colors[backgroundColor]}`}>
      <h2 className="text-3xl font-bold pb-8">{title}</h2>
      <div className="items-center space-x-8">{children} </div>
    </div>
  );
}

export default Section;
