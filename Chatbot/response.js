const responseObj = {
    hello: "Hello! How can I help you today?",
    hey: "Hey! What's Up",
    today:  new Date().toLocaleDateString([],{weekday: "short", month: "short", day: "2-digit", year: "numeric"}),
    time: new Date().toLocaleTimeString(),
    "How can I pay for my order?": "The website accepts various payment methods, including credit cards, PayPal, and Apple Pay.",
    "shipping charges": "Yes, the website offers free shipping on orders over a certain amount. Please see the website's shipping policy for more details.",
    "How can I track my order?": " Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on the website's tracking page.",
    "Can I return a product if I'm not satisfied with it?": " Yes, the website accepts returns within 7 days of purchase for most products. Please see the website's return policy for more details.",
    hii : "Hello! How can I help you today?",
    "Hello! How can I help you today?": "Our return policy allows you to return products within 30 days of purchase. Please review our return policy on the website for detailed information and instructions.",
    " What types of headphones do you offer?": "We have a diverse range of headphones, including over-ear, on-ear, in-ear, wireless, and noise-canceling options. Explore our collection on our website to find the perfect fit for you.",
  };