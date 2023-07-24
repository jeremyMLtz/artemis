"use client";

interface Application {
  companyName: string;
  status: string;
  companyURL: string;
  salaryRange: string;
  createdAt: Date;
}

const ApplicationRow = ({
  companyName,
  status,
  companyURL,
  salaryRange,
  createdAt,
}: Application) => {
  const formattedDate = `${createdAt.getMonth()}/${createdAt.getDay()}/${createdAt.getFullYear()}`;
  return (
    <div>
      <a
        className='companyName'
        href={companyURL}
        target='_blank'
        rel='noopener noreferrer'>
        {companyName}
      </a>
      <span>{salaryRange}</span>
      <span>{formattedDate}</span>
    </div>
  );
};

export default ApplicationRow;
