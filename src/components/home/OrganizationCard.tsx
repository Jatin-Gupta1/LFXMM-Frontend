import { getFormattedSkillName } from "../../utilities/skillUtilities";

type PropType = {
  name: string;
  logoUrl: string;
  id: string;
  description: string;
  skills: string[];
};

export const OrganizationCard = ({
  id,
  name,
  logoUrl,
  skills,
  description,
}: PropType) => {
  const MAX_DESCRIPTION_LENGTH = 180;

  const filteredSkills = skills ? skills.filter((skill) => skill !== "") : [];

  return (
    <div className="box lg:w-[360px] sm:w-[360px] rounded-3xl bg-dark-blue mx-3 my-2 py-auto border-[3px] border-highlight-blue card hover:border-[5px] flex flex-col justify-center align-center overflow-hidden text-white">
      <div className="flex flex-col justify-center items-center p-4">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            className="w-24 h-24 mb-3 rounded-full border-solid border-2 border-white"
            src={logoUrl}
            alt={`Logo for the organization ${name}`}
          />
        </div>

        {/* Name of the organization */}
        <h5 className="m-1 text-xl font-semibold leading-6 text-center text-white">
          {name}
        </h5>

        {/* Description */}
        <div className="m-1 p-1">
          <p className="text-fade-grey text-sm text-center">
            {description.length > MAX_DESCRIPTION_LENGTH
              ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
              : description}
          </p>
        </div>

        {/* Skills */}
        {filteredSkills.length > 0 && (
          <div className="flex flex-col p-1 m-1">
            <h2 className="text-white text-center">Required Skills</h2>
            <div className="flex flex-wrap items-center justify-evenly max-h-20 overflow-hidden gap-[10px] pt-2">
              {filteredSkills.map((skill) => (
                <button
                  className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-highlight-blue rounded-3xl"
                  key={skill}
                >
                  {getFormattedSkillName(skill)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Link to Organization page */}
        <div className="m-1 p-1">
          <a
            href={`/org/${id}`}
            className="viewDetail inline-flex items-center px-4 py-2 pb-6 text-sm font-medium text-center text-white bg-dark-blue hover:bg-white hover:text-dark-blue hover:border-highlight-blue"
          >
            View in Detail
          </a>
        </div>
      </div>
    </div>
  );
};
