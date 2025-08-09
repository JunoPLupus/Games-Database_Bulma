const getPlatformStr = (platforms) => {
    const platformStr = platforms.map(pl => pl.platform.name).join(", ");
    if (platformStr.length > 30) {
        return platformStr.substring(0, 30) + "...";
    }
    return platformStr;
}

const getDevelopersStr = (developers) => {
    const developersStr = developers.map(dev => dev.name).join(", ");
    if (developersStr.length > 30) {
        return developersStr.substring(0, 30) + "...";
    }
    return developersStr;
}

const getPublishersStr = (publishers) => {
    const publishersStr = publishers.map(pub => pub.name).join(", ");
    if (publishersStr.length > 30) {
        return publishersStr.substring(0, 30) + "...";
    }
    return publishersStr;
}