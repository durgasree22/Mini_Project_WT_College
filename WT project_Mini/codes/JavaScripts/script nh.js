// Expanded list of hospitals with Andhra Pradesh examples
const hospitalsData = [
    // Hospitals in Visakhapatnam
    {
        name: "Apollo Hospitals",
        location: "Visakhapatnam",
        phone: "+91 891-123456",
        rating: 4.7,
        address: "123 Main Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Cardiologist", "Orthopedic", "Dermatologist"],
        whatsapp: "https://wa.me/91891123456",
        appointment: "https://apollohospitals.com/appointment",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyoasQ4o30CRlOZvZcuehOV2YzoFqT9L2dStYqY7d8Hqdb9q3fjgemBn76GifFXxsKJE&usqp=CAU"
    },
    {
        name: "Care Hospital",
        location: "Visakhapatnam",
        phone: "+91 891-789012",
        rating: 4.6,
        address: "123 Main Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Cardiologist", "Neurologist"],
        whatsapp: "https://wa.me/91891789012",
        appointment: "https://carehospital.com/appointment",
        image: "wt5.jpeg"
    },
    {
        name: "King George Hospital",
        location: "Visakhapatnam",
        phone: "+91 891-654321",
        rating: 4.5,
        address: "123 Main Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Pediatrician", "Orthopedic", "ENT Specialist"],
        whatsapp: "https://wa.me/91891654321",
        appointment: "https://kghospital.com/appointment",
        image: "KingGeorge-hospital.jpg"
    },

    // Hospitals in Vijayawada
    {
        name: "Ramesh Hospitals",
        location: "Vijayawada",
        phone: "+91 866-234567",
        rating: 4.8,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Cardiologist", "Pediatrician", "Nephrologist"],
        whatsapp: "https://wa.me/91866234567",
        appointment: "https://rameshhospitals.com/appointment",
        image: "Ramesh-hospital"
    },
    {
        name: "Andhra Hospital",
        location: "Vijayawada",
        phone: "+91 866-765432",
        rating: 4.5,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Dermatologist", "ENT Specialist", "Gastroenterologist"],
        whatsapp: "https://wa.me/91866765432",
        appointment: "https://andrahospital.com/appointment",
        image: "ramesh-hospital.jpg"
    },

    // Hospitals in Guntur
    {
        name: "NRI General Hospital",
        location: "Guntur",
        phone: "+91 863-987654",
        rating: 4.4,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Cardiologist", "Orthopedic", "Neurologist"],
        whatsapp: "https://wa.me/91863987654",
        appointment: "https://nrihospital.com/appointment",
        image: "ramesh-hospital.jpg"
    },
    {
        name: "Lalitha Super Specialty Hospital",
        location: "Guntur",
        phone: "+91 863-543210",
        rating: 4.7,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Oncologist", "Pediatrician", "Orthopedic"],
        whatsapp: "https://wa.me/91863543210",
        appointment: "https://lalithahospital.com/appointment",
        image: "ramesh-hospital.jpg"
    },

    // Hospitals in Tirupati
    {
        name: "Sri Venkateswara Institute of Medical Sciences",
        location: "Tirupati",
        phone: "+91 877-112233",
        rating: 4.9,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Cardiologist", "Nephrologist", "Orthopedic"],
        whatsapp: "https://wa.me/91877112233",
        appointment: "https://svimstirupati.com/appointment",
        image: "ramesh-hospital.jpg"
    },
    {
        name: "BIRRD Hospital",
        location: "Tirupati",
        phone: "+91 877-445566",
        rating: 4.5,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Orthopedic", "Rheumatologist"],
        whatsapp: "https://wa.me/91877445566",
        appointment: "https://birrdhospital.com/appointment",
        image: "ramesh-hospital.jpg"
    },

    // Hospitals in Kurnool
    {
        name: "Government General Hospital",
        location: "Kurnool",
        phone: "+91 851-223344",
        rating: 4.3,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Pediatrician", "Cardiologist"],
        whatsapp: "https://wa.me/91851223344",
        appointment: "https://kurnoolhospital.com/appointment",
        image: "ramesh-hospital.jpg"
    },
    {
        name: "Viswabharathi Super Speciality Hospital",
        location: "Kurnool",
        phone: "+91 851-667788",
        rating: 4.6,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Neurologist", "Orthopedic"],
        whatsapp: "https://wa.me/91851667788",
        appointment: "https://viswabharathi.com/appointment",
        image: "ramesh-hospital.jpg"
    },

    // Hospitals in Nellore
    {
        name: "Narayana Medical College & Hospital",
        location: "Nellore",
        phone: "+91 861-223344",
        rating: 4.7,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Oncologist", "Cardiologist", "Gastroenterologist"],
        whatsapp: "https://wa.me/91861223344",
        appointment: "https://narayanamedical.com/appointment",
        image: "ramesh-hospital.jpg"
    },
    {
        name: "Simhapuri Hospital",
        location: "Nellore",
        phone: "+91 861-445566",
        rating: 4.4,
        address: "456 Beach Road, Visakhapatnam",
        hours: "24/7",
        specialists: ["Pediatrician", "Orthopedic", "ENT Specialist"],
        whatsapp: "https://wa.me/91861445566",
        appointment: "https://simhapurihospital.com/appointment",
        image: "ramesh-hospital.jpg"
    }
];

// Function to filter hospitals based on location and specialist
function searchHospitals() {
    const location = document.getElementById("locationInput").value.toLowerCase();
    const selectedSpecialist = document.getElementById("specialistSelect").value;

    const hospitalList = document.getElementById("hospitalList");
    hospitalList.innerHTML = '';
    const hospitalCountElement = document.getElementById("hospitalCount");

    const filteredHospitals = hospitalsData.filter(hospital => {
        const isLocationMatch = hospital.location.toLowerCase().includes(location);
        const isSpecialistMatch = selectedSpecialist ? hospital.specialists.includes(selectedSpecialist) : true;
        return isLocationMatch && isSpecialistMatch;
    });

    hospitalCountElement.textContent = `${filteredHospitals.length} hospital(s) found in ${location.charAt(0).toUpperCase() + location.slice(1)} for ${selectedSpecialist}`;

    if (filteredHospitals.length > 0) {
        filteredHospitals.forEach(hospital => {
            const listItem = document.createElement("li");

            const hospitalImage = `<img src="${hospital.image}" alt="${hospital.name}">`;

            const details = `
                <div class="hospital-details">
                    <p><strong>${hospital.name}</strong></p>
                    <p>Location: ${hospital.location}</p>
                    <p>Phone: <a href="tel:${hospital.phone}">${hospital.phone}</a></p>
                    <p>Rating: ${hospital.rating} ⭐</p>
                </div>
            `;

            const actions = `
                <div class="hospital-actions">
                    <a href="${hospital.whatsapp}" target="_blank">WhatsApp</a>
                    <a href="${hospital.appointment}" target="_blank">Book Appointment</a>
                </div>
            `;

            listItem.innerHTML = hospitalImage + details + actions;
            hospitalList.appendChild(listItem);
        });
    } else {
        hospitalList.innerHTML = '<li>No hospitals found.</li>';
    }
}

// Event listener for search button
document.getElementById("searchButton").addEventListener("click", searchHospitals);

