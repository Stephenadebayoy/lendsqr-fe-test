/** @format */

type SectionProps = {
  title: string;
  data: Record<string, string>;
};

const Section = ({ title, data }: SectionProps) => {
  return (
    <div className="section">
      <h4>{title}</h4>
      <div className="grid">
        {Object.entries(data).map(([label, value]) => (
          <div key={label} className="field">
            <small>{label}</small>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
