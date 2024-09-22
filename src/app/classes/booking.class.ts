export class Booking {
    mainContact
    phone
    email
    bookingConf
    paxTotal
    pickupDate
    pickupTime
    fromTransfer
    toTransfer
    remarks
    paymentMethod
    fixPriceClient
    fixPriceGTcontracttor
    routingPrice
    contactPerson
    emailBookingArranger
    phoneBookingArranger
    arrangerBookingConfirmation
    language
    GTU
    AgencyNr
    cc_id_GT
    caseInvoice
    externalBookingident
    internalBookingident
    transactionType
    serviceClass
    vehicleType
    flightOrigin
    flightDestination
    flightArrival
    flightDeparture
    flightNumber
    airportTransferFromTo
    ModeExpedia
    VIP
    CustomerID
    CityPriceID

    constructor(data?: any) {
        this.mainContact = data.mainContact || ''
        this.phone = data.phone || ''
        this.email = data.email || ''
        this.bookingConf = data.status || ''
        this.paxTotal = data.paxTotal || ''
        this.pickupDate = data.pickupDate || ''
        this.pickupTime = data.pickupTime || ''
        this.fromTransfer = data.fromTransfer || ''
        this.toTransfer = data.toTransfer || ''
        this.remarks = data.remarks || ''
        this.paymentMethod = data.paymentMethod || 'invoice'
        this.fixPriceClient = data.fixPriceClient || ''
        this.fixPriceGTcontracttor = -5
        this.routingPrice = data.routingPrice || ''
        this.contactPerson = data.contactPerson || ''
        this.emailBookingArranger = data.email || ''
        this.phoneBookingArranger = data.phoneArranger || ''
        this.arrangerBookingConfirmation = data.arrangerBookingConfirmation || ''
        this.language = data.language || ''
        this.GTU = data.GTU || ''
        this.AgencyNr = data.agencyNr || ''
        this.cc_id_GT = data.cc_id_GT || ''
        this.caseInvoice = data.caseInvoice || ''
        this.externalBookingident = data.externalBookingident || ''
        this.internalBookingident = data.internalBookingident || ''
        this.transactionType = data.transactionType || ''
        this.serviceClass = data.serviceClass || ''
        this.vehicleType = data.vehicleType || ''
        this.flightOrigin = data.flightOrigin || ''
        this.flightDestination = data.flightDestination || ''
        this.flightArrival = data.flightArrivalTime || ''
        this.flightDeparture = data.flightDepartTime || ''
        this.flightNumber = data.flightNumber || ''
        this.airportTransferFromTo = data.airportTransferFromTo || ''
        this.ModeExpedia = data.ModeExpedia || ''
        this.VIP = data.VIP || ''
        this.CustomerID = data.CustomerID || ''
        this.CityPriceID = data.CityPriceId || ''

    }
}