const Heading = ({ heading, subheading }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-5xl font-extrabold font-nohemi">{heading}</h2>
            <p className="text-base">&quot;{subheading}&quot;</p>
        </div>
    );
};

export default Heading;
