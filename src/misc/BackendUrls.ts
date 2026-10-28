export class BackendUrls{
    // url base
    public static base = "http://localhost:8000/";
    
    // for page data
    public static topics = BackendUrls.base + "topics/";
    public static posts = BackendUrls.base + "posts/";
    public static search = BackendUrls.base + "topicsearch/?search=";
    public static postsByTopic = BackendUrls.base + "postsbytopic/";

    // for button functions
    public static generateTopics = BackendUrls.base + "generatetopics";
    public static generatePosts = BackendUrls.base + "generateposts/";
}