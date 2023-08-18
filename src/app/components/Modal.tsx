import ContributorsCard from "./ContributorsCard";

interface Contributors {
    url : string,
    name : string,
    role : string
}

export default function Modal(props : any) : JSX.Element {

    const susunJadwal : Contributors[] = [
        {
            url:"/images/placeholder.png",
            name:"Tukang Susun Jadwal",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Susun Jadwal",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Susun Jadwal",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Susun Jadwal",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Susun Jadwal",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Susun Jadwal",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Susun Jadwal",
            role:"Designer"
        }
    ]
    
    const bikunTracker : Contributors[] = [
        {
            url:"/images/placeholder.png",
            name:"Tukang Bikun Tracker",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Bikun Tracker",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Bikun Tracker",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Bikun Tracker",
            role:"Designer"
        }
    ] 

    const ristekLink : Contributors[] = [
        {
            url:"/images/placeholder.png",
            name:"Tukang Ristek Link",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ristek Link",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ristek Link",
            role:"Designer"
        }
    ] 

    const ulasKelas : Contributors[] = [
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        }
    ] 

    let app;

    if (props.modalApp === 'Susun Jadwal') {
        app = susunJadwal
    } else if (props.modalApp === 'Bikun Tracker') {
        app = bikunTracker
    } else if (props.modalApp === 'Ristek Link') {
        app = ristekLink
    } else {
        app = ulasKelas
    }

    return (
            <div className="fade fixed mt-[64px] flex flex-col items-center sm:gap-[20px] md:gap-[40px] gap-[12px] sm:p-[40px] md:p-[60px] p-[20px] w-[90%] sm:max-h-[564px] max-h-[664px] rounded-[20px] bg-white">
                <div className="flex flex-row w-full justify-between">
                    <img src={"/icons/cross_box.svg"} className="invisible lg:block hidden"></img>
                    <p className="font-bold lg:text-[60px] sm:text-[36px] text-[24px]">
                        People Behind This Product!
                    </p>
                    <img src={"/icons/cross_box.svg"} onClick={() => props.modal()} className="cursor-pointer"></img>
                </div>
                <div className="flex flex-wrap gap-[20px] w-full justify-center overflow-auto 
                                pt-[8px] pb-[8px]">
                    {app.map((contributors, index) => {
                        return (
                        <ContributorsCard url={contributors.url} name={contributors.name} role={contributors.role} key={index}/>
                        )
                    })}
                </div>
            </div>
    )
}