// Built-in Study Decks & Official CNSF 80-Question Bank
window.DEFAULT_STUDY_DECKS = [
  {
    "id": "cnsf-80-default",
    "title": "Trọn Bộ 80 Câu Hỏi Ôn Tập Mạng & Bảo Mật (CNSF)",
    "subtitle": "Certified Network Security Fundamentals · Song ngữ Anh – Việt kèm giải thích đáp án đúng & phân tích lỗi sai",
    "category": "Security",
    "badge": "Chứng chỉ Quốc tế CNSF",
    "isBuiltIn": true,
    "createdAt": "2026-11-26",
    "questions": [
      {
        "id": "cnsf-q1",
        "num": 1,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Study the topology above. Which host is correctly placed in the DMZ so that Internet users can reach it while the internal LAN stays protected?",
        "questionVi": "Quan sát sơ đồ mạng ở trên. Máy chủ nào được đặt đúng ở vùng đệm DMZ để người dùng từ Internet có thể truy cập mà mạng nội bộ (LAN) vẫn được bảo vệ?",
        "options": [
          {
            "key": "A",
            "text": "The database"
          },
          {
            "key": "B",
            "text": "The web server"
          },
          {
            "key": "C",
            "text": "The firewall"
          },
          {
            "key": "D",
            "text": "The Internet cloud"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "The web server",
        "explainRight": "Host này phục vụ trang web cho Internet users truy cập, đặt ở DMZ (vùng đệm trung gian) giống như quầy tiếp khách phía ngoài để internal LAN bên trong vẫn được bảo vệ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. The database: Nơi lưu dữ liệu quan trọng như két sắt trong phòng kín, không nên đặt ở DMZ tiếp xúc trực tiếp với bên ngoài. C. The firewall: Đóng vai trò cổng kiểm soát ra vào giữa các khu vực chứ không phải host chứa trang web. D. The Internet cloud: Là mạng Internet bên ngoài, không nằm trong DMZ."
      },
      {
        "id": "cnsf-q2",
        "num": 2,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Which network segmentation feature isolates ports on a switch into separate logical broadcast domains?",
        "questionVi": "Tính năng phân tách mạng (network segmentation) nào cô lập các cổng trên switch thành các vùng quảng bá logic (logical broadcast domains) riêng biệt?",
        "options": [],
        "correctKey": null,
        "correctAnswer": "VLAN (Virtual Local Area Network)",
        "explainRight": "Một chiếc switch giống như ổ cắm chung cho nhiều máy tính; VLAN giúp chia các cổng này thành từng \"phòng riêng ảo\" để thông báo chung (broadcast) của nhóm này không bắn tràn sang nhóm khác, giúp mạng gọn gàng và an toàn hơn.",
        "explainWrongLabel": "Vì sao các hướng hiểu sai thường gặp",
        "explainWrong": "Không cần mua thêm switch vật lý mới hay rút cắm lại dây cáp riêng biệt mới tách được nhóm, vì VLAN chia nhóm bằng phần mềm cấu hình ngay trên switch."
      },
      {
        "id": "cnsf-q3",
        "num": 3,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Applying least privilege to network access control means users and devices should receive what?",
        "questionVi": "Áp dụng nguyên tắc đặc quyền tối thiểu (least privilege) vào kiểm soát truy cập mạng nghĩa là người dùng và thiết bị nên nhận được gì?",
        "options": [
          {
            "key": "A",
            "text": "Only the access required for their role"
          },
          {
            "key": "B",
            "text": "Full administrative rights by default"
          },
          {
            "key": "C",
            "text": "Access to every VLAN and subnet present"
          },
          {
            "key": "D",
            "text": "Shared root credentials for all staﬀ"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Only the access required for their role",
        "explainRight": "Giống như chỉ phát đúng chìa khóa phòng làm việc của từng nhân viên thay vì phát chìa khóa vạn năng mở mọi cửa, giúp khoanh vùng thiệt hại nếu tài khoản hay thiết bị bị xâm nhập.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Cấp toàn quyền quản trị ngay từ đầu rất rủi ro vì chỉ một thao tác sai hay mã độc lây nhiễm cũng có thể phá hỏng cả hệ thống. C: Cho phép đi khắp mọi khu vực mạng khiến kẻ xấu dễ dàng lan sang các vùng nhạy cảm khác. D: Dùng chung tài khoản quản trị cao nhất làm mất dấu vết ai đã thao tác và dễ lộ mật khẩu."
      },
      {
        "id": "cnsf-q4",
        "num": 4,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Study the decision above. When the host sends a packet to 8.8.8.8 (a diﬀerent subnet), where does it send the frame first?",
        "questionVi": "Quan sát quyết định ở trên. Khi host gửi gói tin đến 8.8.8.8 (một mạng con - subnet khác), đầu tiên nó sẽ gửi frame đi đâu?",
        "options": [
          {
            "key": "A",
            "text": "Directly to 8.8.8.8 on the LAN"
          },
          {
            "key": "B",
            "text": "To the default gateway"
          },
          {
            "key": "C",
            "text": "To its own loopback"
          },
          {
            "key": "D",
            "text": "To the broadcast address only"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "To the default gateway",
        "explainRight": "Khi gửi dữ liệu ra khỏi khu mạng nội bộ hiện tại, máy tính sẽ đưa gói tin đến default gateway (giống như cổng ra hoặc bưu điện của khu phố) để thiết bị này chuyển tiếp đi xa hơn.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A: Địa chỉ 8.8.8.8 không nằm trong mạng nội bộ trước mặt nên không gửi trực tiếp kiểu nội bộ được. C: Gửi về loopback chỉ để máy tự kiểm tra chính mình chứ không đi ra ngoài mạng. D: Địa chỉ quảng bá chỉ để gọi tất cả máy trong cùng một mạng cục bộ, không dẫn đường sang mạng khác."
      },
      {
        "id": "cnsf-q5",
        "num": 5,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Study the VLAN layout above. Without a router or layer-3 device, which pair of PCs can communicate directly?",
        "questionVi": "Quan sát sơ đồ VLAN ở trên. Nếu không có router hay thiết bị tầng 3 (layer-3 device), cặp PC nào có thể giao tiếp trực tiếp với nhau?",
        "options": [
          {
            "key": "A",
            "text": "PC-A and PC-B (both VLAN 10)"
          },
          {
            "key": "B",
            "text": "PC-A and PC-C (across VLANs 10/20)"
          },
          {
            "key": "C",
            "text": "PC-B and PC-D (across VLANs 10/20)"
          },
          {
            "key": "D",
            "text": "PC-A and PC-D (across VLANs 10/20)"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "PC-A and PC-B (both VLAN 10)",
        "explainRight": "Hai máy này nằm trong cùng một nhóm VLAN 10 nên giống như ngồi chung một phòng, có thể trao đổi dữ liệu trực tiếp với nhau mà không cần thiết bị định tuyến trung gian.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B, C, D: Khác VLAN giống như hai phòng ngăn cách hoàn toàn, muốn nói chuyện qua lại bắt buộc phải có router hoặc switch layer-3 làm cầu nối."
      },
      {
        "id": "cnsf-q6",
        "num": 6,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Which device operates primarily at OSI layer 3 to forward packets between diﬀerent networks?",
        "questionVi": "Thiết bị nào hoạt động chủ yếu ở tầng 3 của mô hình OSI để chuyển tiếp gói tin giữa các mạng khác nhau?",
        "options": [
          {
            "key": "A",
            "text": "Hub"
          },
          {
            "key": "B",
            "text": "Router"
          },
          {
            "key": "C",
            "text": "Repeater"
          },
          {
            "key": "D",
            "text": "Media converter"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Router",
        "explainRight": "Router giống như người dẫn đường giữa các khu vực mạng khác nhau dựa vào địa chỉ IP, giúp gói tin đi đúng tuyến từ mạng này sang mạng kia.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Hub: Chỉ phát lặp lại tín hiệu ra mọi cổng một cách máy móc ở tầng 1, không biết địa chỉ hay phân chia mạng. C. Repeater: Chỉ khuếch đại tín hiệu vật lý ở tầng 1 cho dây truyền xa hơn, không định tuyến giữa các mạng. D. Media converter: Chỉ chuyển đổi dạng tín hiệu ở tầng 1 (như từ dây đồng sang cáp quang), không dẫn đường giữa các mạng."
      },
      {
        "id": "cnsf-q7",
        "num": 7,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Study the diagram above. What is the primary role of the device sitting between the clients and the three web servers?",
        "questionVi": "Quan sát sơ đồ ở trên. Vai trò chính của thiết bị nằm giữa các clients và ba web servers là gì?",
        "options": [
          {
            "key": "A",
            "text": "Encrypts the local server hard disks at rest"
          },
          {
            "key": "B",
            "text": "Assigns MAC addresses to all clients on the LAN"
          },
          {
            "key": "C",
            "text": "Distributes incoming requests across servers"
          },
          {
            "key": "D",
            "text": "Resolves public domain names into IP addresses"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Distributes incoming requests across servers",
        "explainRight": "Thiết bị này (load balancer – bộ cân bằng tải) giống như nhân viên điều phối khách vào 3 quầy thu ngân để chia đều lượng truy cập, tránh một máy chủ bị quá tải và giúp hệ thống chạy mượt hơn.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A: Mã hóa dữ liệu lưu trữ trên ổ cứng là việc của hệ điều hành hoặc phần mềm lưu trữ. B: Địa chỉ MAC được nhà sản xuất gắn sẵn vào phần cứng card mạng ngay từ đầu. D: Dịch tên miền sang địa chỉ IP là nhiệm vụ của máy chủ DNS."
      },
      {
        "id": "cnsf-q8",
        "num": 8,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Study the NAT diagram above. After translation, what source IP does the public server see in the arriving packet?",
        "questionVi": "Quan sát sơ đồ NAT ở trên. Sau khi biên dịch địa chỉ (translation), máy chủ công cộng sẽ thấy địa chỉ IP nguồn nào trong gói tin đi tới?",
        "options": [
          {
            "key": "A",
            "text": "203.0.113.7 (router public IP)"
          },
          {
            "key": "B",
            "text": "192.168.1.20 (host private IP)"
          },
          {
            "key": "C",
            "text": "255.255.255.0"
          },
          {
            "key": "D",
            "text": "127.0.0.1"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "203.0.113.7 (router public IP)",
        "explainRight": "Giống như nhiều máy lẻ trong công ty khi gọi ra ngoài đều hiện chung một số tổng đài đại diện, NAT đổi IP riêng bên trong thành IP công cộng của router để giao tiếp ra Internet.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Là địa chỉ nội bộ dùng riêng trong nhà/công ty, không đi thẳng ra Internet công cộng được. C: Là subnet mask dùng để phân định phạm vi mạng, không phải địa chỉ IP của một máy. D: Là địa chỉ loopback để máy tự gọi lại chính nó, không dùng gửi ra server bên ngoài."
      },
      {
        "id": "cnsf-q9",
        "num": 9,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Study the switch table above. A frame destined for bb:bb arrives. Out which single port does the switch forward it?",
        "questionVi": "Quan sát bảng địa chỉ của switch ở trên. Một frame có đích đến là bb:bb đi tới, switch sẽ chuyển tiếp nó ra duy nhất cổng nào?",
        "options": [
          {
            "key": "A",
            "text": "Port 1"
          },
          {
            "key": "B",
            "text": "Port 3"
          },
          {
            "key": "C",
            "text": "Port 2"
          },
          {
            "key": "D",
            "text": "All ports (flood)"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Port 2",
        "explainRight": "Trong bảng địa chỉ MAC của switch, địa chỉ bb:bb được ghi rõ ở Port 2, nên switch gửi thẳng gói tin ra đúng cổng số 2 thay vì gửi tràn lan.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Port 1: Đang ứng với địa chỉ aa:aa trong bảng. B. Port 3: Đang ứng với địa chỉ cc:cc trong bảng. D. All ports (flood): Switch chỉ gửi tỏa ra mọi cổng khi chưa biết đích đến nằm ở cổng nào."
      },
      {
        "id": "cnsf-q10",
        "num": 10,
        "section": "Phần 1: Câu 1–10",
        "questionEn": "Study the Nmap output above. Which TCP port is reported as OPEN and serving HTTPS?",
        "questionVi": "Quan sát kết quả quét Nmap ở trên. Cổng TCP nào được báo cáo là OPEN và đang phục vụ dịch vụ HTTPS?",
        "options": [
          {
            "key": "A",
            "text": "80"
          },
          {
            "key": "B",
            "text": "22"
          },
          {
            "key": "C",
            "text": "3389"
          },
          {
            "key": "D",
            "text": "443"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "443",
        "explainRight": "Kết quả quét Nmap hiển thị 443/tcp open https, nghĩa là cổng 443 đang mở và chạy dịch vụ web bảo mật HTTPS (trang web có biểu tượng ổ khóa an toàn).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 80: Trong bảng kết quả đang ở trạng thái closed (đã đóng) và dành cho HTTP thường. B. 22: Tuy đang open nhưng là dịch vụ ssh (điều khiển dòng lệnh từ xa), không phải HTTPS. C. 3389: Đang ở trạng thái filtered (bị tường lửa chặn/lọc) và dùng cho điều khiển màn hình từ xa Windows (ms-wbt-server)."
      },
      {
        "id": "cnsf-q11",
        "num": 11,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "A /24 network uses which dotted-decimal subnet mask?",
        "questionVi": "Một network /24 dùng subnet mask dạng dotted-decimal nào?",
        "options": [
          {
            "key": "A",
            "text": "255.255.0.0"
          },
          {
            "key": "B",
            "text": "255.0.0.0"
          },
          {
            "key": "C",
            "text": "255.255.255.0"
          },
          {
            "key": "D",
            "text": "255.255.255.255"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "255.255.255.0",
        "explainRight": "Trong IPv4, /24 nghĩa là 24 bit đầu tiên khóa cố định phần network, tương đương ba cụm 255 đầu tiên và cụm cuối là 0 dành cho các thiết bị bên trong.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 255.255.0.0: Tương ứng với /16, phạm vi network rộng hơn nhiều. B. 255.0.0.0: Tương ứng với /8, chỉ khóa 8 bit đầu tiên. D. 255.255.255.255: Tương ứng với /32, chỉ dùng để trỏ đúng một IP đơn lẻ."
      },
      {
        "id": "cnsf-q12",
        "num": 12,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "Which addressing concept uniquely identifies a network interface at layer 2 and is burned into the hardware?",
        "questionVi": "Khái niệm địa chỉ nào định danh duy nhất một network interface ở layer 2 và được ghi cứng vào hardware?",
        "options": [
          {
            "key": "A",
            "text": "MAC address"
          },
          {
            "key": "B",
            "text": "IP address"
          },
          {
            "key": "C",
            "text": "Port number"
          },
          {
            "key": "D",
            "text": "Subnet mask"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "MAC address",
        "explainRight": "MAC address giống như số sê-ri khắc sẵn trên card mạng (NIC) ngay từ nhà máy, giúp nhận diện thiết bị trực tiếp trong cùng một mạng cục bộ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. IP address: Là địa chỉ logic ở layer 3 để định tuyến giữa các mạng và có thể thay đổi theo từng mạng. C. Port number: Là số cổng ở layer 4 để phân biệt từng ứng dụng hoặc dịch vụ trên cùng một máy. D. Subnet mask: Là mặt nạ dùng cùng IPv4 để tách phần network và phần host."
      },
      {
        "id": "cnsf-q13",
        "num": 13,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "Which now-broken wireless encryption standard should never be used?",
        "questionVi": "Chuẩn wireless encryption nào hiện đã bị bẻ khóa và không bao giờ nên dùng?",
        "options": [
          {
            "key": "A",
            "text": "WPA3"
          },
          {
            "key": "B",
            "text": "WPA2-AES"
          },
          {
            "key": "C",
            "text": "WEP"
          },
          {
            "key": "D",
            "text": "TLS"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "WEP",
        "explainRight": "WEP dùng thuật toán yếu và khóa khởi tạo quá ngắn nên dễ bị kẻ xấu dò ra mật khẩu Wi-Fi rất nhanh.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. WPA3: Là chuẩn bảo mật Wi-Fi hiện đại và an toàn nhất hiện nay. B. WPA2-AES: Vẫn an toàn hơn nhiều so với WEP nếu dùng mật khẩu mạnh. D. TLS: Là giao thức mã hóa truyền tải dữ liệu (như cho HTTPS), không phải chuẩn mã hóa Wi-Fi."
      },
      {
        "id": "cnsf-q14",
        "num": 14,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "Which utility sends ICMP echo requests to test host reachability?",
        "questionVi": "Tiện ích nào gửi ICMP echo requests để kiểm tra xem host có kết nối tới được hay không?",
        "options": [
          {
            "key": "A",
            "text": "Ping"
          },
          {
            "key": "B",
            "text": "Arp"
          },
          {
            "key": "C",
            "text": "Nslookup"
          },
          {
            "key": "D",
            "text": "Netstat"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Ping",
        "explainRight": "Ping giống như tiếng \"alo\" gửi đi và chờ tiếng trả lời vọng lại để xem máy đích còn sống trên mạng và mất bao nhiêu thời gian phản hồi.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Arp: Dùng để ánh xạ giữa IP address và MAC address trong mạng nội bộ. C. Nslookup: Dùng để tra cứu thông tin DNS. D. Netstat: Dùng để xem các kết nối mạng và port đang hoạt động trên máy."
      },
      {
        "id": "cnsf-q15",
        "num": 15,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "Which protocol automatically assigns IP addresses, subnet masks, and default gateways to devices joining a network?",
        "questionVi": "Protocol nào tự động cấp IP addresses, subnet masks và default gateways cho các thiết bị khi tham gia vào network?",
        "options": [
          {
            "key": "A",
            "text": "DHCP"
          },
          {
            "key": "B",
            "text": "DNS"
          },
          {
            "key": "C",
            "text": "FTP"
          },
          {
            "key": "D",
            "text": "SNMP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "DHCP",
        "explainRight": "Thay vì phải tự gõ tay thông số mạng cho từng điện thoại hay laptop, DHCP giống như quầy phát thẻ số tự động để cấp địa chỉ hợp lệ ngay khi bạn kết nối vào mạng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. DNS: Chỉ lo dịch tên miền thành địa chỉ IP, không cấp cấu hình mạng tự động. C. FTP: Dùng để truyền tải file giữa máy khách và server. D. SNMP: Dùng để giám sát và quản lý trạng thái thiết bị mạng."
      },
      {
        "id": "cnsf-q16",
        "num": 16,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "Which service translates human-readable domain names (such as example.com) into IP addresses?",
        "questionVi": "Dịch vụ nào dịch các domain names dễ đọc (như example.com) thành IP addresses?",
        "options": [
          {
            "key": "A",
            "text": "DHCP"
          },
          {
            "key": "B",
            "text": "DNS"
          },
          {
            "key": "C",
            "text": "SSH"
          },
          {
            "key": "D",
            "text": "NAT"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "DNS",
        "explainRight": "DNS giống như danh bạ điện thoại của Internet: bạn nhớ tên người quen (example.com), còn danh bạ sẽ tìm ra số máy chính xác (IP address) để gọi đúng chỗ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. DHCP: Cấp IP và cấu hình mạng cho thiết bị, không phân giải tên miền. C. SSH: Dùng để đăng nhập điều khiển máy từ xa một cách bảo mật. D. NAT: Dịch địa chỉ IP khi đi qua router giữa mạng nội bộ và Internet."
      },
      {
        "id": "cnsf-q17",
        "num": 17,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "Which protocol provides encrypted remote command-line access to a server or network device?",
        "questionVi": "Protocol nào cung cấp quyền truy cập command-line từ xa được mã hóa tới server hoặc thiết bị mạng?",
        "options": [
          {
            "key": "A",
            "text": "Telnet"
          },
          {
            "key": "B",
            "text": "HTTP"
          },
          {
            "key": "C",
            "text": "SSH"
          },
          {
            "key": "D",
            "text": "TFTP"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "SSH",
        "explainRight": "SSH giống như một đường hầm kín có khóa mã hóa giúp quản trị viên gõ lệnh điều khiển từ xa mà người nghe lén trên đường truyền không đọc được nội dung hay mật khẩu.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Telnet: Cũng điều khiển dòng lệnh từ xa nhưng gửi dữ liệu dạng văn bản thuần không mã hóa, rất dễ bị nghe lén. B. HTTP: Dùng để tải trang web thông thường, không mã hóa như HTTPS. D. TFTP: Là giao thức truyền file đơn giản, không phải công cụ điều khiển dòng lệnh từ xa có mã hóa."
      },
      {
        "id": "cnsf-q18",
        "num": 18,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "What is the primary purpose of a firewall on a network boundary?",
        "questionVi": "Mục đích chính của một firewall tại ranh giới network là gì?",
        "options": [
          {
            "key": "A",
            "text": "Filter traﬃc based on defined security rules"
          },
          {
            "key": "B",
            "text": "Increase Wi-Fi signal range"
          },
          {
            "key": "C",
            "text": "Store user passwords"
          },
          {
            "key": "D",
            "text": "Replace all switches"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Filter traﬃc based on defined security rules",
        "explainRight": "Firewall giống như cổng kiểm soát an ninh đối chiếu từng lượt ra vào với danh sách quy định cho phép hoặc chặn để giữ an toàn cho hệ thống.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Tăng tầm phủ sóng Wi-Fi là việc của access point hoặc bộ kích sóng. C: Lưu mật khẩu người dùng là việc của trình quản lý mật khẩu hoặc hệ thống xác thực. D: Switch dùng để nối các thiết bị trong mạng nội bộ, firewall không thay thế vai trò kết nối nội bộ này."
      },
      {
        "id": "cnsf-q19",
        "num": 19,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "Which attack involves tricking users into revealing sensitive information or clicking malicious links via deceptive messages?",
        "questionVi": "Kiểu tấn công nào lừa người dùng tiết lộ thông tin nhạy cảm hoặc bấm vào link độc hại thông qua các thông điệp giả mạo?",
        "options": [
          {
            "key": "A",
            "text": "Phishing"
          },
          {
            "key": "B",
            "text": "Port scanning"
          },
          {
            "key": "C",
            "text": "ARP spoofing"
          },
          {
            "key": "D",
            "text": "VLAN hopping"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Phishing",
        "explainRight": "Phishing (lừa đảo mạo danh) giống như giăng mồi giả giống hệt email ngân hàng, công ty hay dịch vụ quen thuộc để đánh vào sự vội vàng hoặc tò mò của nạn nhân.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Port scanning: Là hành động dò xem máy đích đang mở cổng dịch vụ nào. C. ARP spoofing: Là kỹ thuật đánh lừa bảng địa chỉ trong mạng nội bộ để chặn hoặc chuyển hướng lưu lượng. D. VLAN hopping: Là kỹ thuật tìm cách vượt qua ranh giới chia tách giữa các VLAN."
      },
      {
        "id": "cnsf-q20",
        "num": 20,
        "section": "Phần 2: Câu 11–20",
        "questionEn": "What does Multi-Factor Authentication (MFA) add to strengthen account security beyond a password?",
        "questionVi": "Multi-Factor Authentication (MFA) bổ sung thêm yếu tố gì để tăng cường bảo mật tài khoản ngoài password?",
        "options": [
          {
            "key": "A",
            "text": "At least one additional verification factor (such as an authenticator code or hardware key)"
          },
          {
            "key": "B",
            "text": "Longer password history only"
          },
          {
            "key": "C",
            "text": "Disabling encryption"
          },
          {
            "key": "D",
            "text": "Sharing accounts with teammates"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "At least one additional verification factor (such as an authenticator code or hardware key)",
        "explainRight": "MFA giống như khóa cửa có thêm chốt phụ hoặc mã xác nhận gửi về điện thoại: kể cả khi kẻ xấu đoán được mật khẩu, chúng vẫn khó vào được nếu thiếu yếu tố xác thực còn lại.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Chỉ nhớ nhiều mật khẩu cũ không thêm lớp xác thực độc lập nào khi đăng nhập. C: Tắt mã hóa sẽ làm giảm bảo mật chứ không tăng bảo mật. D: Chia sẻ tài khoản làm giảm tính kiểm soát và tăng nguy cơ lộ thông tin."
      },
      {
        "id": "cnsf-q21",
        "num": 21,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which protocol is used to securely browse websites over an encrypted HTTP connection?",
        "questionVi": "Protocol nào được dùng để duyệt websites an toàn qua kết nối HTTP được mã hóa?",
        "options": [
          {
            "key": "A",
            "text": "HTTP"
          },
          {
            "key": "B",
            "text": "HTTPS"
          },
          {
            "key": "C",
            "text": "FTP"
          },
          {
            "key": "D",
            "text": "Telnet"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "HTTPS",
        "explainRight": "HTTPS giống như gửi thư qua đường bưu điện có niêm phong bảo vệ bằng lớp mã hóa (TLS/SSL), giúp người đi đường không đọc trộm được mật khẩu hay thông tin thanh toán khi bạn vào web.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. HTTP: Truyền dữ liệu web dạng thông thường không mã hóa nên dễ bị nghe lén. C. FTP: Dùng để truyền tải tập tin giữa máy tính và server. D. Telnet: Dùng để điều khiển dòng lệnh từ xa không mã hóa."
      },
      {
        "id": "cnsf-q22",
        "num": 22,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which address range belongs to private IPv4 addresses defined for internal networks (RFC 1918)?",
        "questionVi": "Dải địa chỉ nào thuộc về private IPv4 addresses được định nghĩa cho internal networks (RFC 1918)?",
        "options": [
          {
            "key": "A",
            "text": "192.168.0.0/16"
          },
          {
            "key": "B",
            "text": "8.8.8.0/24"
          },
          {
            "key": "C",
            "text": "127.0.0.0/8"
          },
          {
            "key": "D",
            "text": "224.0.0.0/4"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "192.168.0.0/16",
        "explainRight": "Dải 192.168.0.0/16 (như 192.168.1.x) giống như đánh số nhà trong từng khu dân cư hay văn phòng riêng, dùng nội bộ và không định tuyến trực tiếp trên Internet công cộng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. 8.8.8.0/24: Nằm trong vùng địa chỉ công cộng (public) trên Internet. C. 127.0.0.0/8: Dành cho địa chỉ loopback để thiết bị tự gọi lại chính nó. D. 224.0.0.0/4: Dành cho địa chỉ multicast (gửi tới một nhóm thiết bị đăng ký nhận)."
      },
      {
        "id": "cnsf-q23",
        "num": 23,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which tool traces the path and hop-by-hop transit delays that packets take to reach a destination?",
        "questionVi": "Công cụ nào dò tìm đường đi và độ trễ từng chặng (hop-by-hop) mà packets đi qua để tới đích?",
        "options": [
          {
            "key": "A",
            "text": "Traceroute"
          },
          {
            "key": "B",
            "text": "Ipconfig"
          },
          {
            "key": "C",
            "text": "Dig"
          },
          {
            "key": "D",
            "text": "Whois"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Traceroute",
        "explainRight": "Traceroute giống như kiểm tra từng trạm trung chuyển mà bưu kiện đi qua từ lúc xuất phát tới khi nhận được, giúp biết gói tin đang bị chậm hoặc tắc ở chặng nào.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Ipconfig: Dùng để xem hoặc làm mới cấu hình IP của chính máy tính bạn đang ngồi. C. Dig: Dùng để truy vấn chi tiết bản ghi DNS của tên miền. D. Whois: Dùng để tra cứu thông tin đăng ký tên miền hoặc khối địa chỉ IP."
      },
      {
        "id": "cnsf-q24",
        "num": 24,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which security control encrypts data while it is being transmitted across a network?",
        "questionVi": "Biện pháp kiểm soát bảo mật nào mã hóa dữ liệu khi đang được truyền đi qua network?",
        "options": [
          {
            "key": "A",
            "text": "Encryption in transit"
          },
          {
            "key": "B",
            "text": "Encryption at rest"
          },
          {
            "key": "C",
            "text": "Air-gapping"
          },
          {
            "key": "D",
            "text": "Port mirroring"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Encryption in transit",
        "explainRight": "Encryption in transit (mã hóa khi đang truyền) giống như bỏ tài liệu vào vali khóa số trước khi mang đi trên đường để dù có bị chặn giữa chừng cũng không đọc được nội dung.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Encryption at rest: Là mã hóa dữ liệu khi đang nằm yên lưu trữ trên ổ cứng hay thiết bị lưu trữ. C. Air-gapping: Là tách biệt hoàn toàn một hệ thống khỏi mạng bên ngoài về mặt vật lý. D. Port mirroring: Là sao chép lưu lượng trên cổng switch sang một cổng khác để phân tích/giám sát."
      },
      {
        "id": "cnsf-q25",
        "num": 25,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "What is the primary goal of the CIA triad in information security?",
        "questionVi": "Mục tiêu chính của bộ ba CIA trong bảo mật thông tin (information security) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Confidentiality, Integrity, and Availability"
          },
          {
            "key": "B",
            "text": "Compliance, Identity, and Auditing"
          },
          {
            "key": "C",
            "text": "Caching, Indexing, and Archiving"
          },
          {
            "key": "D",
            "text": "Compression, Inspection, and Acceleration"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Confidentiality, Integrity, and Availability",
        "explainRight": "Ba chữ C - I - A là nền tảng cốt lõi của bảo mật: giữ bí mật đúng người được xem (Confidentiality), giữ dữ liệu nguyên vẹn không bị sửa trái phép (Integrity), và đảm bảo hệ thống luôn sẵn sàng hoạt động khi cần (Availability).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Liên quan tới tuân thủ, danh tính và kiểm toán nhưng không phải tên ba trụ cột của bộ ba CIA. C: Là các kỹ thuật lưu đệm, đánh chỉ mục và lưu trữ dữ liệu. D: Là nén dữ liệu, kiểm tra lưu lượng và tăng tốc kết nối."
      },
      {
        "id": "cnsf-q26",
        "num": 26,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which attack floods a target system or network with excessive traﬃc to disrupt service availability?",
        "questionVi": "Kiểu tấn công nào làm ngập hệ thống hoặc network đích bằng lưu lượng quá mức để làm gián đoạn tính sẵn sàng của dịch vụ?",
        "options": [
          {
            "key": "A",
            "text": "Denial of Service (DoS)"
          },
          {
            "key": "B",
            "text": "SQL injection"
          },
          {
            "key": "C",
            "text": "Credential stuﬃng"
          },
          {
            "key": "D",
            "text": "DNS poisoning"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Denial of Service (DoS)",
        "explainRight": "DoS giống như việc một đám đông gọi điện hoặc xếp hàng tràn ngập khiến quầy dịch vụ bị tê liệt, khách bình thường không thể kết nối hoặc sử dụng được nữa.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. SQL injection: Là tấn công chèn mã truy vấn độc hại vào ô nhập liệu để thao túng cơ sở dữ liệu. C. Credential stuﬃng: Là thử hàng loạt cặp tài khoản – mật khẩu bị lộ từ nơi khác để đăng nhập hàng loạt. D. DNS poisoning: Là đầu độc dữ liệu phân giải tên miền để dẫn người dùng tới sai địa chỉ IP."
      },
      {
        "id": "cnsf-q27",
        "num": 27,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which wireless security standard introduced SAE (Simultaneous Authentication of Equals) to resist oﬄine dictionary attacks?",
        "questionVi": "Chuẩn bảo mật wireless nào đưa vào SAE (Simultaneous Authentication of Equals) để chống lại các cuộc tấn công dò mật khẩu từ điển ngoại tuyến (oﬄine dictionary attacks)?",
        "options": [
          {
            "key": "A",
            "text": "WPA3"
          },
          {
            "key": "B",
            "text": "WEP"
          },
          {
            "key": "C",
            "text": "WPA"
          },
          {
            "key": "D",
            "text": "Open Wi-Fi"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "WPA3",
        "explainRight": "WPA3 giúp quá trình bắt tay xác thực mật khẩu Wi-Fi an toàn hơn hẳn chuẩn cũ, khiến kẻ tấn công khó thu thập dữ liệu để đem về máy tính tự dò mật khẩu ngầm.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. WEP: Là chuẩn bảo mật cổ rất yếu và đã bị bẻ khóa từ lâu. C. WPA: Là thế hệ đầu dùng thuật toán cũ không an toàn bằng WPA2/WPA3. D. Open Wi-Fi: Là mạng Wi-Fi mở không có mật khẩu mã hóa bảo vệ."
      },
      {
        "id": "cnsf-q28",
        "num": 28,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which network device connects multiple devices within a local area network (LAN) and forwards frames based on MAC addresses?",
        "questionVi": "Thiết bị mạng nào kết nối nhiều thiết bị trong một local area network (LAN) và chuyển tiếp frames dựa trên MAC addresses?",
        "options": [
          {
            "key": "A",
            "text": "Switch"
          },
          {
            "key": "B",
            "text": "Modem"
          },
          {
            "key": "C",
            "text": "Firewall"
          },
          {
            "key": "D",
            "text": "Load balancer"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Switch",
        "explainRight": "Switch giống như trung tâm nối dây cho các máy tính, máy in trong cùng một văn phòng và học biết máy nào gắn ở cổng nào để gửi khung dữ liệu cho đúng đích nội bộ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Modem: Dùng để điều chế/giải điều chế tín hiệu kết nối với nhà cung cấp dịch vụ đường truyền bên ngoài. C. Firewall: Tập trung kiểm soát và lọc lưu lượng theo quy tắc bảo mật giữa các vùng mạng. D. Load balancer: Tập trung chia đều yêu cầu truy cập tới nhiều máy chủ phía sau."
      },
      {
        "id": "cnsf-q29",
        "num": 29,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "What is the role of a subnet mask when paired with an IPv4 address?",
        "questionVi": "Vai trò của subnet mask khi đi kèm với một IPv4 address là gì?",
        "options": [
          {
            "key": "A",
            "text": "Separate the network portion from the host portion"
          },
          {
            "key": "B",
            "text": "Translate domain names to IP addresses"
          },
          {
            "key": "C",
            "text": "Encrypt Wi-Fi radio signals"
          },
          {
            "key": "D",
            "text": "Assign hardware serial numbers"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Separate the network portion from the host portion",
        "explainRight": "Subnet mask giống như vạch phân định mã vùng mạng với số thứ tự từng máy trong vùng đó, giúp máy tính biết đích đến nằm cùng mạng nội bộ hay phải đi qua gateway ra ngoài.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Là công việc của DNS. C: Là công việc của chuẩn bảo mật không dây (như WPA2/WPA3). D: Số sê-ri phần cứng do nhà sản xuất gắn sẵn."
      },
      {
        "id": "cnsf-q30",
        "num": 30,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which practice helps contain lateral movement if an attacker compromises one host on a network?",
        "questionVi": "Thực hành nào giúp kiềm chế sự di chuyển ngang (lateral movement) nếu kẻ tấn công chiếm được một host trên network?",
        "options": [
          {
            "key": "A",
            "text": "Network segmentation (such as VLANs and firewall rules)"
          },
          {
            "key": "B",
            "text": "Disabling all host firewalls"
          },
          {
            "key": "C",
            "text": "Using default passwords on servers"
          },
          {
            "key": "D",
            "text": "Connecting every device to a single flat network"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Network segmentation (such as VLANs and firewall rules)",
        "explainRight": "Chia nhỏ mạng bằng VLAN và quy tắc tường lửa giống như làm các vách ngăn và cửa kiểm soát trong tòa nhà: nếu kẻ xấu lọt vào được một phòng thì bị chặn lại, khó đi lan sang các phòng chứa dữ liệu quan trọng khác.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Tắt tường lửa trên các máy trạm sẽ mở toang đường cho mã độc và kẻ tấn công lan rộng. C: Dùng mật khẩu mặc định khiến kẻ xấu dễ đăng nhập vào các máy chủ khác. D: Gộp mọi thiết bị vào chung một mạng phẳng lớn khiến không có vách ngăn nào cản bước di chuyển ngang."
      },
      {
        "id": "cnsf-q31",
        "num": 31,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which protocol resolves a known IPv4 address into a MAC address on a local Ethernet network?",
        "questionVi": "Protocol nào phân giải một IPv4 address đã biết thành MAC address trên một local Ethernet network?",
        "options": [
          {
            "key": "A",
            "text": "ARP"
          },
          {
            "key": "B",
            "text": "DNS"
          },
          {
            "key": "C",
            "text": "DHCP"
          },
          {
            "key": "D",
            "text": "NTP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "ARP",
        "explainRight": "ARP (Address Resolution Protocol) giống như việc bạn biết số nhà/số phòng (IPv4 address) trong khu và hỏi xem ai đang ở đó để biết mặt/nhận diện trực tiếp (MAC address) trước khi gửi dữ liệu ở tầng mạng nội bộ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. DNS: Đổi tên miền thành IP address. C. DHCP: Cấp IP address và thông số mạng tự động cho thiết bị. D. NTP: Đồng bộ thời gian chuẩn cho các thiết bị trên mạng."
      },
      {
        "id": "cnsf-q32",
        "num": 32,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which TCP port is the default standard port for unencrypted HTTP web traﬃc?",
        "questionVi": "TCP port nào là port chuẩn mặc định cho lưu lượng web HTTP không mã hóa?",
        "options": [
          {
            "key": "A",
            "text": "80"
          },
          {
            "key": "B",
            "text": "443"
          },
          {
            "key": "C",
            "text": "22"
          },
          {
            "key": "D",
            "text": "53"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "80",
        "explainRight": "Cổng 80 giống như cửa mặc định mà trình duyệt thường gõ vào khi tải trang web HTTP thông thường (chưa có lớp mã hóa bảo vệ như HTTPS).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. 443: Là cổng mặc định của HTTPS (web có mã hóa bảo mật). C. 22: Là cổng mặc định của SSH. D. 53: Là cổng chuẩn thường dùng cho dịch vụ phân giải tên miền DNS."
      },
      {
        "id": "cnsf-q33",
        "num": 33,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which type of malware encrypts a victim's files and demands payment to restore access?",
        "questionVi": "Loại malware nào mã hóa các file của nạn nhân và đòi tiền thanh toán để khôi phục quyền truy cập?",
        "options": [
          {
            "key": "A",
            "text": "Ransomware"
          },
          {
            "key": "B",
            "text": "Adware"
          },
          {
            "key": "C",
            "text": "Spyware"
          },
          {
            "key": "D",
            "text": "Worm"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Ransomware",
        "explainRight": "Ransomware (mã độc tống tiền) giống như kẻ gian khóa chặt tủ hồ sơ của bạn bằng ổ khóa số rồi đòi tiền chuộc thì mới đưa mã mở.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Adware: Tập trung hiển thị quảng cáo không mong muốn. C. Spyware: Tập trung theo dõi, thu thập thông tin lén lút trên thiết bị. D. Worm: Là mã độc có khả năng tự nhân bản và phát tán qua mạng tới các máy khác."
      },
      {
        "id": "cnsf-q34",
        "num": 34,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which security principle ensures that a user cannot falsely deny having performed an action or sent a message?",
        "questionVi": "Nguyên tắc bảo mật nào đảm bảo người dùng không thể chối cãi sai sự thật rằng mình đã thực hiện một hành động hoặc gửi một tin nhắn?",
        "options": [
          {
            "key": "A",
            "text": "Non-repudiation"
          },
          {
            "key": "B",
            "text": "Confidentiality"
          },
          {
            "key": "C",
            "text": "Availability"
          },
          {
            "key": "D",
            "text": "Spoofing"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Non-repudiation",
        "explainRight": "Non-repudiation (tính không thể chối bỏ) giống như chữ ký xác thực hoặc biên lai có ghi nhận rõ ràng: một khi bạn đã ký duyệt hay gửi yêu cầu hợp lệ thì khó có thể phủ nhận rằng mình không làm.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Confidentiality: Là giữ bí mật thông tin để chỉ người được phép mới đọc được. C. Availability: Là đảm bảo hệ thống và dữ liệu luôn sẵn sàng hoạt động khi người dùng cần. D. Spoofing: Là hành vi giả mạo danh tính, địa chỉ hoặc nguồn gửi để đánh lừa."
      },
      {
        "id": "cnsf-q35",
        "num": 35,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which network device operates primarily at Layer 1 by regenerating signals without inspecting MAC or IP addresses?",
        "questionVi": "Thiết bị mạng nào hoạt động chủ yếu ở Layer 1 bằng cách tái tạo tín hiệu mà không kiểm tra MAC addresses hay IP addresses?",
        "options": [
          {
            "key": "A",
            "text": "Repeater"
          },
          {
            "key": "B",
            "text": "Router"
          },
          {
            "key": "C",
            "text": "Switch"
          },
          {
            "key": "D",
            "text": "Firewall"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Repeater",
        "explainRight": "Repeater giống như trạm tiếp sức dọc đường dây truyền tín hiệu: tín hiệu đi xa bị yếu đi thì nó làm mới và đẩy đi tiếp, hoàn toàn không đọc địa chỉ MAC hay IP.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Router: Hoạt động ở tầng cao hơn (Layer 3) và dựa vào IP addresses để định tuyến giữa các mạng. C. Switch: Hoạt động ở Layer 2 và dựa vào MAC addresses để chuyển tiếp khung dữ liệu trong mạng nội bộ. D. Firewall: Kiểm tra và lọc lưu lượng theo quy tắc bảo mật thay vì chỉ tái tạo tín hiệu vật lý thuần túy."
      },
      {
        "id": "cnsf-q36",
        "num": 36,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which attack intercepts or alters communication between two parties without their knowledge?",
        "questionVi": "Kiểu tấn công nào chặn bắt hoặc sửa đổi giao tiếp giữa hai bên mà họ không hay biết?",
        "options": [
          {
            "key": "A",
            "text": "Man-in-the-Middle (MitM)"
          },
          {
            "key": "B",
            "text": "Brute force"
          },
          {
            "key": "C",
            "text": "DDoS"
          },
          {
            "key": "D",
            "text": "Phishing"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Man-in-the-Middle (MitM)",
        "explainRight": "MitM (tấn công xen giữa) giống như có người đứng giữa hai người đang trao đổi thư từ để đọc lén hoặc tráo đổi nội dung trước khi chuyển tiếp mà cả hai không hề biết.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Brute force: Là thử liên tục nhiều tổ hợp mật khẩu/khóa cho tới khi trúng. C. DDoS: Là tấn công từ chối dịch vụ phân tán từ nhiều nguồn nhằm làm quá tải mục tiêu. D. Phishing: Là lừa đảo qua thông điệp/đường link giả mạo để nạn nhân tự lộ thông tin hoặc bấm nhầm."
      },
      {
        "id": "cnsf-q37",
        "num": 37,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "What does a VPN (Virtual Private Network) primarily create between a user and a remote network?",
        "questionVi": "VPN (Virtual Private Network) chủ yếu tạo ra điều gì giữa người dùng và một remote network?",
        "options": [
          {
            "key": "A",
            "text": "An encrypted tunnel over a public or untrusted network"
          },
          {
            "key": "B",
            "text": "A physical fiber cable across the country"
          },
          {
            "key": "C",
            "text": "A public DNS directory"
          },
          {
            "key": "D",
            "text": "A hardware firewall for every home"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "An encrypted tunnel over a public or untrusted network",
        "explainRight": "VPN giống như tạo ra một \"đường hầm kín được mã hóa\" đi xuyên qua mạng công cộng (như Wi-Fi quán cà phê), giúp dữ liệu của bạn đi an toàn tới mạng từ xa như thể đang nối dây riêng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: VPN là giải pháp mạng ảo/mã hóa, không phải kéo cáp quang vật lý xuyên quốc gia. C: Danh bạ phân giải tên miền là chức năng của DNS. D: VPN không phải là thiết bị tường lửa phần cứng gắn cho từng hộ gia đình."
      },
      {
        "id": "cnsf-q38",
        "num": 38,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which IPv6 address represents the loopback interface (equivalent to 127.0.0.1 in IPv4)?",
        "questionVi": "IPv6 address nào đại diện cho giao diện loopback (tương đương 127.0.0.1 trong IPv4)?",
        "options": [
          {
            "key": "A",
            "text": "::1"
          },
          {
            "key": "B",
            "text": "fe80::1"
          },
          {
            "key": "C",
            "text": "2001:db8::1"
          },
          {
            "key": "D",
            "text": "ﬀ02::1"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "::1",
        "explainRight": "Trong IPv6, ::1 là địa chỉ loopback dùng để máy tự kiểm tra ngăn xếp mạng của chính nó, tương tự như 127.0.0.1 quen thuộc ở IPv4.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. fe80::1: Nằm trong dải link-local (fe80::/10), dùng cho giao tiếp trên cùng một liên kết cục bộ. C. 2001:db8::1: Thuộc dải dành riêng cho tài liệu/ví dụ minh họa. D. ﬀ02::1: Là địa chỉ multicast trên liên kết cục bộ, gửi tới nhóm thiết bị."
      },
      {
        "id": "cnsf-q39",
        "num": 39,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which practice keeps systems protected against known software vulnerabilities?",
        "questionVi": "Thực hành nào giúp hệ thống được bảo vệ trước các lỗ hổng phần mềm đã biết?",
        "options": [
          {
            "key": "A",
            "text": "Patch management (applying timely security updates)"
          },
          {
            "key": "B",
            "text": "Ignoring vendor advisories"
          },
          {
            "key": "C",
            "text": "Running outdated operating systems"
          },
          {
            "key": "D",
            "text": "Disabling antivirus alerts"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Patch management (applying timely security updates)",
        "explainRight": "Khi nhà sản xuất phát hiện lỗ hổng bảo mật thì sẽ tung ra bản vá (patch); cập nhật kịp thời giống như vá lại lỗ thủng trên cửa trước khi kẻ xấu chui qua.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Bỏ qua cảnh báo từ nhà cung cấp khiến hệ thống bỏ lỡ các bản sửa lỗi quan trọng. C: Dùng hệ điều hành quá cũ không còn được vá lỗi sẽ để lộ nhiều điểm yếu bảo mật. D: Tắt cảnh báo phần mềm bảo mật làm giảm khả năng phát hiện và ngăn chặn nguy cơ."
      },
      {
        "id": "cnsf-q40",
        "num": 40,
        "section": "Phần 4: Câu 31–40",
        "questionEn": "Which transport layer protocol is connectionless and prioritizes low overhead and speed over guaranteed delivery?",
        "questionVi": "Transport layer protocol nào không cần thiết lập kết nối (connectionless) và ưu tiên độ trễ thấp cùng tốc độ hơn là đảm bảo gửi tới nơi?",
        "options": [
          {
            "key": "A",
            "text": "UDP"
          },
          {
            "key": "B",
            "text": "TCP"
          },
          {
            "key": "C",
            "text": "HTTP"
          },
          {
            "key": "D",
            "text": "ICMP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "UDP",
        "explainRight": "UDP giống như phát trực tiếp (livestream) hoặc gọi thoại thời gian thực: gửi nhanh liên tục để kịp lúc, chấp nhận rớt vài gói nhỏ còn hơn dừng lại chờ gửi lại làm giật lag.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. TCP: Là giao thức hướng kết nối (connection-oriented), có kiểm tra và gửi lại gói tin bị mất. C. HTTP: Là giao thức ở tầng ứng dụng (Application layer) cho web. D. ICMP: Thường dùng cho chẩn đoán mạng và báo lỗi/điều khiển (như ping, traceroute)."
      },
      {
        "id": "cnsf-q41",
        "num": 41,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which transport layer protocol is connection-oriented and uses a three-way handshake to establish a reliable session?",
        "questionVi": "Transport layer protocol nào hướng kết nối (connection- oriented) và dùng bắt tay ba bước (three-way handshake) để thiết lập phiên làm việc đáng tin cậy?",
        "options": [
          {
            "key": "A",
            "text": "TCP"
          },
          {
            "key": "B",
            "text": "UDP"
          },
          {
            "key": "C",
            "text": "ARP"
          },
          {
            "key": "D",
            "text": "DHCP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "TCP",
        "explainRight": "TCP giống như gọi điện thoại có xác nhận \"Alo, nghe rõ không? – Rõ rồi! – Ok bắt đầu nói chuyện\" trước khi truyền dữ liệu quan trọng, đảm bảo gói tin tới đủ và đúng thứ tự.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. UDP: Là giao thức không cần thiết lập kết nối trước và ưu tiên tốc độ, không dùng bắt tay ba bước. C. ARP: Hoạt động ở tầng mạng nội bộ để đổi địa chỉ IP sang MAC. D. DHCP: Dùng để cấp cấu hình mạng tự động cho thiết bị."
      },
      {
        "id": "cnsf-q42",
        "num": 42,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which attack attempts to guess passwords repeatedly until finding the correct one?",
        "questionVi": "Kiểu tấn công nào thử đoán passwords lặp đi lặp lại cho tới khi tìm ra mật khẩu đúng?",
        "options": [
          {
            "key": "A",
            "text": "Brute force"
          },
          {
            "key": "B",
            "text": "SQL injection"
          },
          {
            "key": "C",
            "text": "VLAN hopping"
          },
          {
            "key": "D",
            "text": "Port mirroring"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Brute force",
        "explainRight": "Brute force (tấn công vét cạn) giống như cầm một chùm chìa khóa lớn thử lần lượt từng chiếc vào ổ khóa cho tới khi mở được cửa.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. SQL injection: Là chèn câu lệnh truy vấn độc hại vào đầu vào ứng dụng để can thiệp cơ sở dữ liệu. C. VLAN hopping: Là kỹ thuật vượt ranh giới chia tách giữa các VLAN trên mạng. D. Port mirroring: Là sao chép lưu lượng từ một cổng switch sang cổng khác để giám sát."
      },
      {
        "id": "cnsf-q43",
        "num": 43,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which type of backup copies only data that has changed since the last full backup?",
        "questionVi": "Loại backup nào chỉ sao chép dữ liệu đã thay đổi kể từ lần backup đầy đủ (full backup) gần nhất?",
        "options": [
          {
            "key": "A",
            "text": "Incremental backup"
          },
          {
            "key": "B",
            "text": "Mirroring only"
          },
          {
            "key": "C",
            "text": "Disk wiping"
          },
          {
            "key": "D",
            "text": "Log rotation"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Incremental backup",
        "explainRight": "Thay vì sao chép lại toàn bộ tủ hồ sơ mỗi ngày, incremental backup chỉ ghi lại những tờ giấy mới thêm hoặc sửa đổi từ đợt sao lưu đầy đủ trước đó nên tiết kiệm thời gian và dung lượng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Mirroring only: Là nhân bản đồng bộ theo thời gian thực/gương. C. Disk wiping: Là xóa sạch dữ liệu trên ổ đĩa. D. Log rotation: Là xoay vòng, nén hoặc dọn dẹp các file nhật ký (log) theo chu kỳ."
      },
      {
        "id": "cnsf-q44",
        "num": 44,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "What does a firewall rule set to \"DENY\" or \"DROP\" do when matching traﬃc arrives?",
        "questionVi": "Một quy tắc firewall đặt ở trạng thái \"DENY\" hoặc \"DROP\" sẽ làm gì khi có lưu lượng khớp điều kiện đi tới?",
        "options": [
          {
            "key": "A",
            "text": "Blocks or discards the matching traﬃc"
          },
          {
            "key": "B",
            "text": "Automatically upgrades TLS versions"
          },
          {
            "key": "C",
            "text": "Assigns a public IP address"
          },
          {
            "key": "D",
            "text": "Translates domain names to IP addresses"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Blocks or discards the matching traﬃc",
        "explainRight": "Khi gặp lệnh DENY hoặc DROP, firewall giống như nhân viên gác cổng từ chối cho đi qua hoặc loại bỏ luôn gói tin không được phép đó.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Việc nâng cấp chuẩn mã hóa TLS do cấu hình máy chủ/ứng dụng và trình duyệt quyết định. C: Cấp địa chỉ IP thuộc về cấu hình mạng/NAT/ISP. D: Phân giải tên miền sang IP là việc của DNS."
      },
      {
        "id": "cnsf-q45",
        "num": 45,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which protocol is commonly used to synchronize clocks across network devices so logs have accurate timestamps?",
        "questionVi": "Protocol nào thường được dùng để đồng bộ đồng hồ giữa các thiết bị mạng nhằm giúp logs có mốc thời gian chính xác?",
        "options": [
          {
            "key": "A",
            "text": "NTP"
          },
          {
            "key": "B",
            "text": "FTP"
          },
          {
            "key": "C",
            "text": "Telnet"
          },
          {
            "key": "D",
            "text": "SNMP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "NTP",
        "explainRight": "NTP (Network Time Protocol) giống như chỉnh tất cả đồng hồ trong tòa nhà theo cùng một giờ chuẩn để khi có sự cố xảy ra, các bản ghi nhật ký (logs) khớp thời gian với nhau dễ điều tra.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. FTP: Dùng để truyền tệp tin giữa các máy. C. Telnet: Dùng để kết nối dòng lệnh từ xa không mã hóa. D. SNMP: Dùng để giám sát và thu thập thông số quản lý thiết bị mạng."
      },
      {
        "id": "cnsf-q46",
        "num": 46,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which security practice limits access to sensitive systems and data only to authorized individuals?",
        "questionVi": "Thực hành bảo mật nào giới hạn quyền truy cập vào các hệ thống và dữ liệu nhạy cảm chỉ cho những cá nhân được cấp phép?",
        "options": [
          {
            "key": "A",
            "text": "Access control"
          },
          {
            "key": "B",
            "text": "Public sharing"
          },
          {
            "key": "C",
            "text": "Default credentials"
          },
          {
            "key": "D",
            "text": "Open relay"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Access control",
        "explainRight": "Access control (kiểm soát truy cập) giống như thẻ ra vào phân quyền: ai được phép mở cửa kho hồ sơ hay phòng máy chủ thì mới vào được, còn người không có quyền sẽ bị ngăn lại.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Public sharing: Chia sẻ công khai cho tất cả mọi người sẽ làm lộ dữ liệu nhạy cảm. C. Default credentials: Dùng thông tin đăng nhập mặc định khiến hệ thống dễ bị xâm nhập trái phép. D. Open relay: Là cấu hình mở cho phép chuyển tiếp thư/lưu lượng không kiểm soát."
      },
      {
        "id": "cnsf-q47",
        "num": 47,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which wireless attack involves setting up a rogue access point that mimics a legitimate Wi-Fi network?",
        "questionVi": "Kiểu tấn công wireless nào dựng lên một access point giả mạo bắt chước một Wi-Fi network hợp pháp?",
        "options": [
          {
            "key": "A",
            "text": "Evil twin"
          },
          {
            "key": "B",
            "text": "Phishing"
          },
          {
            "key": "C",
            "text": "SQL injection"
          },
          {
            "key": "D",
            "text": "DDoS"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Evil twin",
        "explainRight": "Evil twin (điểm phát sóng \"sinh đôi ác quỷ\") giống như dựng một quán cà phê giả đặt tên y hệt quán thật ngay cạnh đó để khách tưởng nhầm mà kết nối vào, từ đó dễ bị theo dõi lưu lượng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Phishing: Thường qua email, tin nhắn hoặc trang web giả mạo. C. SQL injection: Là tấn công vào lỗ hổng nhập liệu truy vấn cơ sở dữ liệu. D. DDoS: Là tấn công làm ngập lưu lượng từ nhiều nguồn để gây gián đoạn dịch vụ."
      },
      {
        "id": "cnsf-q48",
        "num": 48,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "What is the purpose of an Intrusion Detection System (IDS)?",
        "questionVi": "Mục đích của một Intrusion Detection System (IDS) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Monitor traﬃc and alert on suspicious or malicious activity"
          },
          {
            "key": "B",
            "text": "Encrypt hard drives automatically"
          },
          {
            "key": "C",
            "text": "Assign IPv4 leases to clients"
          },
          {
            "key": "D",
            "text": "Replace routers in WAN links"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Monitor traﬃc and alert on suspicious or malicious activity",
        "explainRight": "IDS (hệ thống phát hiện xâm nhập) giống như camera an ninh và chuông báo động: theo dõi luồng hoạt động trên mạng và cảnh báo khi phát hiện dấu hiệu bất thường hoặc tấn công.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Mã hóa ổ đĩa do giải pháp mã hóa lưu trữ/hệ điều hành đảm nhiệm. C: Cấp địa chỉ IP tự động là chức năng của DHCP. D: IDS không thay thế vai trò định tuyến kết nối đường dài WAN của router."
      },
      {
        "id": "cnsf-q49",
        "num": 49,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which DNS record maps a domain name to an IPv4 address?",
        "questionVi": "Bản ghi DNS nào ánh xạ một domain name sang một IPv4 address?",
        "options": [
          {
            "key": "A",
            "text": "A record"
          },
          {
            "key": "B",
            "text": "MX record"
          },
          {
            "key": "C",
            "text": "PTR record"
          },
          {
            "key": "D",
            "text": "TXT record"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A record",
        "explainRight": "A record (Address record) giống như dòng ghi chú cơ bản nhất trong danh bạ: tên miền này trỏ thẳng tới địa chỉ IPv4 nào (ví dụ 93.184.216.34).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. MX record: Dùng để chỉ định máy chủ nhận email (Mail Exchange) cho tên miền. C. PTR record: Thường dùng cho tra cứu ngược (từ địa chỉ IP tìm ra tên miền tương ứng). D. TXT record: Dùng để lưu các chuỗi văn bản thông tin như xác thực tên miền."
      },
      {
        "id": "cnsf-q50",
        "num": 50,
        "section": "Phần 5: Câu 41–50",
        "questionEn": "Which type of attack sends a large volume of traﬃc from many distributed sources simultaneously?",
        "questionVi": "Loại tấn công nào gửi một lượng lớn traﬃc từ nhiều nguồn phân tán cùng lúc?",
        "options": [
          {
            "key": "A",
            "text": "Distributed Denial of Service (DDoS)"
          },
          {
            "key": "B",
            "text": "Password reuse"
          },
          {
            "key": "C",
            "text": "ARP lookup"
          },
          {
            "key": "D",
            "text": "Port forwarding"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Distributed Denial of Service (DDoS)",
        "explainRight": "Khác với một người gọi làm phiền (DoS), DDoS giống như hàng nghìn thiết bị rải rác khắp nơi cùng lúc đổ xô truy cập vào một mục tiêu khiến hệ thống quá tải và nghẽn mạch.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Password reuse: Là việc người dùng dùng đi dùng lại một mật khẩu ở nhiều dịch vụ khác nhau. C. ARP lookup: Là quá trình tra cứu địa chỉ MAC trong mạng nội bộ bình thường. D. Port forwarding: Là cấu hình chuyển tiếp cổng trên router/NAT để đưa lưu lượng tới dịch vụ nội bộ."
      },
      {
        "id": "cnsf-q51",
        "num": 51,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which protocol is commonly used to transfer files between a client and a server over a network?",
        "questionVi": "Protocol nào thường được dùng để truyền tệp tin giữa client và server qua network?",
        "options": [
          {
            "key": "A",
            "text": "FTP"
          },
          {
            "key": "B",
            "text": "ARP"
          },
          {
            "key": "C",
            "text": "NTP"
          },
          {
            "key": "D",
            "text": "ICMP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "FTP",
        "explainRight": "FTP (File Transfer Protocol) giống như dịch vụ chuyển phát tài liệu chuyên dụng giữa máy tính của bạn và máy chủ lưu trữ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. ARP: Dùng để ánh xạ IP sang MAC trong mạng nội bộ. C. NTP: Dùng để đồng bộ giờ chuẩn cho các thiết bị trên mạng. D. ICMP: Dùng để kiểm tra kết nối và báo lỗi mạng (như lệnh ping)."
      },
      {
        "id": "cnsf-q52",
        "num": 52,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which IPv4 address block is reserved for loopback testing on a local host?",
        "questionVi": "Khối IPv4 address nào được dành riêng cho việc kiểm tra loopback trên một local host?",
        "options": [
          {
            "key": "A",
            "text": "127.0.0.0/8"
          },
          {
            "key": "B",
            "text": "10.0.0.0/8"
          },
          {
            "key": "C",
            "text": "172.16.0.0/12"
          },
          {
            "key": "D",
            "text": "192.168.0.0/16"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "127.0.0.0/8",
        "explainRight": "Dải 127.0.0.0/8 (nổi tiếng nhất là 127.0.0.1) giống như tự soi gương hoặc tự gọi vào số máy của chính mình để kiểm tra xem phần mềm mạng trên máy có chạy ổn không.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. 10.0.0.0/8: Là dải IP riêng nội bộ (private IP) cho mạng gia đình hoặc doanh nghiệp. C. 172.16.0.0/12: Cũng là dải IP riêng nội bộ theo chuẩn RFC 1918. D. 192.168.0.0/16: Là dải IP riêng nội bộ phổ biến ở router gia đình và văn phòng nhỏ."
      },
      {
        "id": "cnsf-q53",
        "num": 53,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which security mechanism verifies the identity of a user, process, or device before granting access?",
        "questionVi": "Cơ chế bảo mật nào xác minh danh tính của user, process hoặc device trước khi cấp quyền truy cập?",
        "options": [
          {
            "key": "A",
            "text": "Authentication"
          },
          {
            "key": "B",
            "text": "Compression"
          },
          {
            "key": "C",
            "text": "Caching"
          },
          {
            "key": "D",
            "text": "Fragmentation"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Authentication",
        "explainRight": "Authentication (xác thực) giống như kiểm tra căn cước công dân hoặc thẻ nhân viên trước khi mở cửa: phải chứng minh \"bạn đúng là ai\" rồi mới xét tới việc cho vào đâu.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Compression: Là nén dữ liệu cho gọn nhẹ hơn. C. Caching: Là lưu tạm dữ liệu để truy cập nhanh lần sau. D. Fragmentation: Là chia nhỏ gói tin lớn thành các mảnh nhỏ hơn để truyền qua đường mạng phù hợp."
      },
      {
        "id": "cnsf-q54",
        "num": 54,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which type of malware disguises itself as legitimate or useful software to trick users into running it?",
        "questionVi": "Loại malware nào ngụy trang thành phần mềm hợp pháp hoặc hữu ích để lừa người dùng chạy nó?",
        "options": [
          {
            "key": "A",
            "text": "Trojan"
          },
          {
            "key": "B",
            "text": "DDoS"
          },
          {
            "key": "C",
            "text": "Firewall"
          },
          {
            "key": "D",
            "text": "VPN"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Trojan",
        "explainRight": "Trojan (mã độc ngựa thành Troy) giống như một món quà đẹp đẽ hoặc bộ cài đặt phần mềm tưởng chừng vô hại nhưng bên trong lại giấu mã độc mở cửa hậu cho kẻ xấu.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. DDoS: Là hình thức tấn công làm ngập lưu lượng để gây gián đoạn dịch vụ. C. Firewall: Là thiết bị hoặc phần mềm bảo vệ giúp lọc lưu lượng mạng. D. VPN: Là công cụ tạo kết nối đường hầm mã hóa bảo vệ dữ liệu trên mạng."
      },
      {
        "id": "cnsf-q55",
        "num": 55,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which network layer (Layer 3) protocol handles logical addressing and routing of packets across networks?",
        "questionVi": "Network layer (Layer 3) protocol nào xử lý đánh địa chỉ logic và định tuyến packets xuyên qua các networks?",
        "options": [
          {
            "key": "A",
            "text": "IP"
          },
          {
            "key": "B",
            "text": "Ethernet"
          },
          {
            "key": "C",
            "text": "TCP"
          },
          {
            "key": "D",
            "text": "HTTP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "IP",
        "explainRight": "IP (Internet Protocol) giống như địa chỉ nhà/thành phố trên phong bì thư giúp gói dữ liệu biết đường đi từ mạng này sang mạng khác trên toàn cầu.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Ethernet: Thường gắn với tầng liên kết dữ liệu/vật lý (Layer 2/Layer 1) trong mạng cục bộ. C. TCP: Hoạt động ở tầng vận chuyển (Layer 4) để đảm bảo truyền dữ liệu tin cậy theo phiên. D. HTTP: Hoạt động ở tầng ứng dụng (Layer 7) cho giao tiếp web."
      },
      {
        "id": "cnsf-q56",
        "num": 56,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "What is the primary purpose of an Intrusion Prevention System (IPS) compared to a passive IDS?",
        "questionVi": "Mục đích chính của Intrusion Prevention System (IPS) so với IDS thụ động là gì?",
        "options": [
          {
            "key": "A",
            "text": "Actively block or drop detected malicious traﬃc in real time"
          },
          {
            "key": "B",
            "text": "Replace Wi-Fi antennas"
          },
          {
            "key": "C",
            "text": "Generate random MAC addresses"
          },
          {
            "key": "D",
            "text": "Convert IPv4 to analog audio"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Actively block or drop detected malicious traﬃc in real time",
        "explainRight": "Nếu IDS giống như chuông báo động chỉ phát tín hiệu cảnh báo thì IPS giống như bảo vệ can thiệp ngay lập tức: phát hiện lưu lượng độc hại là chặn hoặc hủy luôn theo thời gian thực.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: IPS không thay thế ăng-ten thu phát sóng Wi-Fi. C: Tạo địa chỉ MAC ngẫu nhiên không phải chức năng chính của IPS. D: IPS không đổi dữ liệu mạng IPv4 thành tín hiệu âm thanh analog."
      },
      {
        "id": "cnsf-q57",
        "num": 57,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which practice reduces attack surface by turning oﬀ unused services, ports, and accounts on a system?",
        "questionVi": "Thực hành nào làm giảm bề mặt tấn công (attack surface) bằng cách tắt các services, ports và accounts không dùng tới trên hệ thống?",
        "options": [
          {
            "key": "A",
            "text": "System hardening"
          },
          {
            "key": "B",
            "text": "Over-provisioning"
          },
          {
            "key": "C",
            "text": "Public exposure"
          },
          {
            "key": "D",
            "text": "Broadcast flooding"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "System hardening",
        "explainRight": "System hardening (làm cứng hệ thống) giống như khóa hết các cửa sổ phụ và bỏ những chìa khóa dự phòng không cần thiết trong nhà để kẻ trộm ít điểm đột nhập hơn.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Over-provisioning: Là cấp dư tài nguyên (như dung lượng, băng thông). C. Public exposure: Phơi bày dịch vụ ra công cộng không cần thiết sẽ làm tăng nguy cơ tấn công. D. Broadcast flooding: Là gửi tràn lan lưu lượng quảng bá trong mạng."
      },
      {
        "id": "cnsf-q58",
        "num": 58,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which protocol is used by email clients to retrieve messages from a mail server?",
        "questionVi": "Protocol nào được email clients dùng để nhận/tải thư từ mail server?",
        "options": [
          {
            "key": "A",
            "text": "IMAP (or POP3)"
          },
          {
            "key": "B",
            "text": "DHCP"
          },
          {
            "key": "C",
            "text": "ARP"
          },
          {
            "key": "D",
            "text": "SNMP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "IMAP (or POP3)",
        "explainRight": "IMAP (và POP3) giống như cách hộp thư trên điện thoại hay máy tính đồng bộ hoặc tải thư từ hòm thư chính trên máy chủ về cho bạn đọc.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. DHCP: Dùng để cấp cấu hình IP tự động cho thiết bị mạng. C. ARP: Dùng để đổi địa chỉ IP sang MAC trong mạng cục bộ. D. SNMP: Dùng để giám sát thiết bị mạng."
      },
      {
        "id": "cnsf-q59",
        "num": 59,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which attack exploits improper input validation in a web form to run unauthorized database queries?",
        "questionVi": "Kiểu tấn công nào khai thác việc kiểm tra đầu vào (input validation) chưa chặt chẽ trên biểu mẫu web để chạy các câu truy vấn cơ sở dữ liệu trái phép?",
        "options": [
          {
            "key": "A",
            "text": "SQL injection"
          },
          {
            "key": "B",
            "text": "Evil twin"
          },
          {
            "key": "C",
            "text": "Port scanning"
          },
          {
            "key": "D",
            "text": "Link aggregation"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "SQL injection",
        "explainRight": "SQL injection giống như việc ô nhập tên đăng nhập đáng lẽ chỉ nhận tên người dùng nhưng lại bị nhét thêm câu lệnh điều khiển cơ sở dữ liệu khiến hệ thống đọc hoặc sửa dữ liệu sai phép.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Evil twin: Là dựng điểm phát Wi-Fi giả mạo để đánh lừa người dùng kết nối vào. C. Port scanning: Là dò tìm các cổng mạng đang mở trên mục tiêu. D. Link aggregation: Là gộp nhiều đường cáp mạng lại để tăng băng thông hoặc dự phòng."
      },
      {
        "id": "cnsf-q60",
        "num": 60,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which type of backup creates a complete copy of all selected data regardless of previous backups?",
        "questionVi": "Loại backup nào tạo ra một bản sao đầy đủ của toàn bộ dữ liệu được chọn bất kể các lần backup trước đó?",
        "options": [
          {
            "key": "A",
            "text": "Full backup"
          },
          {
            "key": "B",
            "text": "Sniﬃng"
          },
          {
            "key": "C",
            "text": "Spoofing"
          },
          {
            "key": "D",
            "text": "Subnetting"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Full backup",
        "explainRight": "Full backup (sao lưu đầy đủ) giống như chụp lại toàn bộ kho dữ liệu hiện tại thành một bản trọn vẹn độc lập, giúp khôi phục nhanh gọn mà không cần ghép nối nhiều bản lẻ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Sniﬃng: Là nghe lén, bắt gói tin đi qua mạng. C. Spoofing: Là giả mạo địa chỉ hoặc danh tính để đánh lừa. D. Subnetting: Là chia nhỏ mạng IP thành các mạng con."
      },
      {
        "id": "cnsf-q61",
        "num": 61,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "Which protocol is used to send outgoing emails from a mail client to a mail server or between mail servers?",
        "questionVi": "Protocol nào được dùng để gửi thư đi từ mail client tới mail server hoặc giữa các mail servers?",
        "options": [
          {
            "key": "A",
            "text": "SMTP"
          },
          {
            "key": "B",
            "text": "POP3"
          },
          {
            "key": "C",
            "text": "SNMP"
          },
          {
            "key": "D",
            "text": "DHCP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "SMTP",
        "explainRight": "SMTP giống như xe thư chuyển hàng đi: phụ trách đẩy email từ thiết bị gửi lên máy chủ thư và chuyển tiếp tới máy chủ nhận.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. POP3: Dùng để nhận/tải thư về thiết bị chứ không dùng để gửi thư đi. C. SNMP: Dùng để giám sát và quản lý thiết bị mạng. D. DHCP: Dùng để cấp địa chỉ IP tự động cho thiết bị vào mạng."
      },
      {
        "id": "cnsf-q62",
        "num": 62,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "What does the security principle of \"Defense in Depth\" mean?",
        "questionVi": "Nguyên tắc bảo mật \"Defense in Depth\" (phòng thủ theo chiều sâu) có nghĩa là gì?",
        "options": [
          {
            "key": "A",
            "text": "Using multiple overlapping layers of security controls"
          },
          {
            "key": "B",
            "text": "Relying on a single strong firewall only"
          },
          {
            "key": "C",
            "text": "Sharing one admin password across systems"
          },
          {
            "key": "D",
            "text": "Disabling logging to save storage"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Using multiple overlapping layers of security controls",
        "explainRight": "Giống như tòa lâu đài có tường bao, hào nước, cổng gác và két sắt bên trong: nếu một lớp bị vượt qua thì vẫn còn các lớp khác chặn lại.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Chỉ dựa vào một lớp duy nhất rất rủi ro nếu lớp đó gặp lỗ hổng hoặc bị cấu hình sai. C: Dùng chung mật khẩu quản trị làm giảm an toàn chứ không tạo chiều sâu phòng thủ. D: Tắt nhật ký khiến mất khả năng theo dõi và điều tra sự cố."
      },
      {
        "id": "cnsf-q63",
        "num": 63,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "Which wireless frequency band generally oﬀers faster speeds over shorter distances compared to 2.4 GHz?",
        "questionVi": "Băng tần wireless nào nhìn chung cho tốc độ nhanh hơn ở khoảng cách ngắn hơn so với 2.4 GHz?",
        "options": [
          {
            "key": "A",
            "text": "5 GHz"
          },
          {
            "key": "B",
            "text": "900 Hz"
          },
          {
            "key": "C",
            "text": "50 Hz"
          },
          {
            "key": "D",
            "text": "10 kHz"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "5 GHz",
        "explainRight": "Băng tần 5 GHz giống như đường cao tốc nhiều làn ít kẹt xe nên truyền nhanh hơn, nhưng sóng khó xuyên tường xa bằng 2.4 GHz.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B, C, D: Đây là các tần số cực thấp (như tần số điện lưới hoặc âm tần), không phải băng tần chuẩn của Wi-Fi."
      },
      {
        "id": "cnsf-q64",
        "num": 64,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "Which type of malware secretly monitors user activity and collects sensitive information without consent?",
        "questionVi": "Loại malware nào âm thầm theo dõi hoạt động của người dùng và thu thập thông tin nhạy cảm mà không được phép?",
        "options": [
          {
            "key": "A",
            "text": "Spyware"
          },
          {
            "key": "B",
            "text": "Patch"
          },
          {
            "key": "C",
            "text": "Firewall"
          },
          {
            "key": "D",
            "text": "Load balancer"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Spyware",
        "explainRight": "Spyware (phần mềm gián điệp) giống như thiết bị nghe lén cài ngầm trong máy để ghi lại thao tác gõ phím, lịch sử duyệt web hay thông tin cá nhân rồi gửi ra ngoài.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Patch: Là bản cập nhật vá lỗi phần mềm giúp hệ thống an toàn hơn. C. Firewall: Là công cụ kiểm soát và lọc lưu lượng bảo vệ mạng. D. Load balancer: Là thiết bị chia đều lưu lượng truy cập giữa nhiều máy chủ."
      },
      {
        "id": "cnsf-q65",
        "num": 65,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "Which command-line tool displays active network connections, listening ports, and routing statistics on a host?",
        "questionVi": "Công cụ command-line nào hiển thị các kết nối mạng đang hoạt động, các port đang lắng nghe và thống kê định tuyến trên một host?",
        "options": [
          {
            "key": "A",
            "text": "Netstat"
          },
          {
            "key": "B",
            "text": "Ping"
          },
          {
            "key": "C",
            "text": "Whois"
          },
          {
            "key": "D",
            "text": "Mkdir"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Netstat",
        "explainRight": "Netstat giống như bảng theo dõi cửa ra vào của máy tính, cho biết ứng dụng nào đang mở cổng chờ kết nối hoặc đang trao đổi dữ liệu với bên ngoài.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Ping: Chỉ kiểm tra xem một máy đích có phản hồi qua mạng hay không. C. Whois: Dùng để tra cứu thông tin đăng ký tên miền hoặc khối IP công cộng. D. Mkdir: Là lệnh tạo thư mục mới trên hệ điều hành."
      },
      {
        "id": "cnsf-q66",
        "num": 66,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "What is the primary purpose of hashing a password before storing it in a database?",
        "questionVi": "Mục đích chính của việc băm (hashing) password trước khi lưu vào database là gì?",
        "options": [
          {
            "key": "A",
            "text": "Convert it into a fixed-length one-way value so the original password is not stored in plaintext"
          },
          {
            "key": "B",
            "text": "Compress video files"
          },
          {
            "key": "C",
            "text": "Speed up Wi-Fi roaming"
          },
          {
            "key": "D",
            "text": "Assign MAC addresses"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Convert it into a fixed-length one-way value so the original password is not stored in plaintext",
        "explainRight": "Hashing giống như xay nguyên liệu thành một dấu vân tay duy nhất một chiều: hệ thống vẫn kiểm tra được mật khẩu nhập vào có khớp không, nhưng kể cả khi dữ liệu bị rò rỉ thì cũng không nhìn thấy mật khẩu gốc dạng chữ rõ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Hàm băm mật khẩu không dùng để nén tệp video. C: Không liên quan tới chuyển vùng sóng Wi-Fi. D: Không dùng để cấp địa chỉ phần cứng card mạng."
      },
      {
        "id": "cnsf-q67",
        "num": 67,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "Which attack tricks a victim's browser into executing unintended actions on a web application where they are already authenticated?",
        "questionVi": "Kiểu tấn công nào lừa trình duyệt của nạn nhân thực hiện các hành động ngoài ý muốn trên một web application mà họ đang đăng nhập sẵn?",
        "options": [
          {
            "key": "A",
            "text": "Cross-Site Request Forgery (CSRF)"
          },
          {
            "key": "B",
            "text": "Port scanning"
          },
          {
            "key": "C",
            "text": "Cable tapping"
          },
          {
            "key": "D",
            "text": "Disk defragmentation"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Cross-Site Request Forgery (CSRF)",
        "explainRight": "CSRF giống như việc lợi dụng lúc bạn đã mở khóa phiên đăng nhập ngân hàng trên trình duyệt để lén gửi kèm một yêu cầu chuyển tiền hoặc đổi thông tin mà bạn không hay biết.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Port scanning: Là dò tìm các cổng mạng đang mở trên máy chủ. C. Cable tapping: Là nghe lén trực tiếp trên đường dây cáp vật lý. D. Disk defragmentation: Là chống phân mảnh ổ cứng để tối ưu tốc độ đọc ghi."
      },
      {
        "id": "cnsf-q68",
        "num": 68,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "Which security device or service hides internal client identities, caches content, and filters outbound web requests?",
        "questionVi": "Thiết bị hoặc dịch vụ bảo mật nào ẩn danh tính client nội bộ, lưu đệm nội dung và lọc các yêu cầu web đi ra ngoài?",
        "options": [
          {
            "key": "A",
            "text": "Forward proxy"
          },
          {
            "key": "B",
            "text": "Repeater"
          },
          {
            "key": "C",
            "text": "Hub"
          },
          {
            "key": "D",
            "text": "Media converter"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Forward proxy",
        "explainRight": "Forward proxy giống như người đại diện mua hàng hộ cho cả văn phòng: nhân viên muốn truy cập web bên ngoài đều đi qua proxy này để kiểm soát nội dung cho phép, lưu sẵn trang hay dùng và che địa chỉ máy nội bộ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Repeater: Chỉ khuếch đại tín hiệu vật lý trên dây truyền. C. Hub: Chỉ phát lặp tín hiệu ra mọi cổng ở tầng vật lý. D. Media converter: Chỉ chuyển đổi loại tín hiệu giữa hai môi trường truyền dẫn như đồng và quang."
      },
      {
        "id": "cnsf-q69",
        "num": 69,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "What is the purpose of a Security Information and Event Management (SIEM) platform?",
        "questionVi": "Mục đích của nền tảng Security Information and Event Management (SIEM) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Collect, correlate, and analyze logs from multiple sources to detect security incidents"
          },
          {
            "key": "B",
            "text": "Replace Ethernet switches"
          },
          {
            "key": "C",
            "text": "Manufacture hardware tokens"
          },
          {
            "key": "D",
            "text": "Increase monitor refresh rate"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Collect, correlate, and analyze logs from multiple sources to detect security incidents",
        "explainRight": "SIEM giống như trung tâm điều hành an ninh gom nhật ký từ tường lửa, máy chủ và ứng dụng về một chỗ để đối chiếu, phát hiện sớm dấu hiệu tấn công và hỗ trợ điều tra sự cố.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: SIEM là hệ thống phân tích log/sự kiện, không thay thế thiết bị chuyển mạch mạng. C: Không sản xuất thiết bị khóa bảo mật vật lý. D: Không liên quan tới tần số quét màn hình."
      },
      {
        "id": "cnsf-q70",
        "num": 70,
        "section": "Phần 7: Câu 61–70",
        "questionEn": "Which physical security control prevents unauthorized people from following an authorized employee through a secure door?",
        "questionVi": "Biện pháp kiểm soát an ninh vật lý nào ngăn người không có quyền đi bám theo một nhân viên hợp lệ qua cửa bảo mật?",
        "options": [
          {
            "key": "A",
            "text": "Access control vestibule (mantrap)"
          },
          {
            "key": "B",
            "text": "Unsecured open door"
          },
          {
            "key": "C",
            "text": "Shared sticky-note passwords"
          },
          {
            "key": "D",
            "text": "Public Wi-Fi guest portal"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Access control vestibule (mantrap)",
        "explainRight": "Access control vestibule giống như buồng đệm hai lớp cửa liên động: cửa thứ nhất phải đóng lại và xác thực xong thì cửa thứ hai mới mở, ngăn tình trạng đi nối đuôi trót lọt.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Cửa mở tự do hoàn toàn không ngăn được người lạ đi vào. C: Ghi mật khẩu lên giấy nhớ gây lộ thông tin đăng nhập chứ không kiểm soát cửa ra vào vật lý. D: Là trang đăng nhập Wi-Fi cho khách, không phải cửa kiểm soát an ninh vật lý."
      },
      {
        "id": "cnsf-q71",
        "num": 71,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "Which protocol is used by administrators to monitor and manage network devices such as routers, switches, and servers?",
        "questionVi": "Protocol nào được quản trị viên dùng để giám sát và quản lý các thiết bị mạng như routers, switches và servers?",
        "options": [
          {
            "key": "A",
            "text": "SNMP"
          },
          {
            "key": "B",
            "text": "HTTP"
          },
          {
            "key": "C",
            "text": "ARP"
          },
          {
            "key": "D",
            "text": "TFTP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "SNMP",
        "explainRight": "SNMP (Simple Network Management Protocol) giống như bảng đồng hồ trung tâm thu thập thông số hoạt động và cảnh báo lỗi từ các thiết bị mạng về một nơi.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. HTTP: Dùng để truyền tải trang web chứ không phải giao thức giám sát thiết bị mạng chuyên dụng. C. ARP: Dùng để đổi địa chỉ IP sang MAC trong mạng nội bộ. D. TFTP: Dùng để truyền tệp đơn giản, không dùng để giám sát trạng thái thiết bị."
      },
      {
        "id": "cnsf-q72",
        "num": 72,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "What is the primary purpose of a digital certificate in HTTPS/TLS communications?",
        "questionVi": "Mục đích chính của digital certificate (chứng chỉ số) trong giao tiếp HTTPS/TLS là gì?",
        "options": [
          {
            "key": "A",
            "text": "Verify the identity of a server/entity and bind it to its public key"
          },
          {
            "key": "B",
            "text": "Assign private IPv4 addresses"
          },
          {
            "key": "C",
            "text": "Block ICMP ping packets"
          },
          {
            "key": "D",
            "text": "Speed up hard disk read times"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Verify the identity of a server/entity and bind it to its public key",
        "explainRight": "Digital certificate giống như giấy chứng nhận danh tính có dấu mộc uy tín xác nhận trang web bạn đang vào đúng là trang thật và cung cấp khóa công khai để thiết lập kết nối mã hóa an toàn.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Việc cấp IP tự động thuộc về DHCP. C: Chặn ping là quy tắc của firewall. D: Không liên quan tới tốc độ đọc ổ cứng."
      },
      {
        "id": "cnsf-q73",
        "num": 73,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "Which attack exploits a user's trust by manipulating human psychology rather than breaking technical encryption?",
        "questionVi": "Kiểu tấn công nào khai thác lòng tin và tâm lý con người thay vì phá vỡ kỹ thuật mã hóa?",
        "options": [
          {
            "key": "A",
            "text": "Social engineering"
          },
          {
            "key": "B",
            "text": "Symmetric encryption"
          },
          {
            "key": "C",
            "text": "Packet switching"
          },
          {
            "key": "D",
            "text": "Subnetting"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Social engineering",
        "explainRight": "Social engineering (kỹ nghệ xã hội) giống như đánh vào sự vội vàng, sợ hãi hoặc cả tin của con người (giả danh sếp, IT hay ngân hàng) để nạn nhân tự giao chìa khóa thay vì cố phá ổ khóa.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Symmetric encryption: Là phương pháp mã hóa bảo vệ dữ liệu dùng chung một khóa, không phải kiểu tấn công. C. Packet switching: Là cơ chế chuyển mạch gói tin cơ bản của mạng máy tính. D. Subnetting: Là kỹ thuật chia nhỏ mạng IP thành các mạng con."
      },
      {
        "id": "cnsf-q74",
        "num": 74,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "Which layer of the OSI model handles logical port numbers (such as TCP port 443 or UDP port 53) to direct data to the right application?",
        "questionVi": "Tầng nào của mô hình OSI xử lý các logical port numbers (như TCP port 443 hay UDP port 53) để đưa dữ liệu tới đúng ứng dụng?",
        "options": [
          {
            "key": "A",
            "text": "Transport layer (Layer 4)"
          },
          {
            "key": "B",
            "text": "Physical layer (Layer 1)"
          },
          {
            "key": "C",
            "text": "Data Link layer (Layer 2)"
          },
          {
            "key": "D",
            "text": "Network layer (Layer 3)"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Transport layer (Layer 4)",
        "explainRight": "Nếu địa chỉ IP đưa gói tin tới đúng tòa nhà thì Transport layer (Layer 4) dùng port number giống như số căn hộ để giao dữ liệu vào đúng ứng dụng đang chạy bên trong.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Physical layer (Layer 1): Chỉ truyền tín hiệu vật lý (điện, quang, sóng vô tuyến), không đọc số cổng. C. Data Link layer (Layer 2): Dùng địa chỉ MAC trong mạng cục bộ, không quản lý port TCP/UDP. D. Network layer (Layer 3): Dùng địa chỉ IP để định tuyến giữa các mạng, chưa phân tách tới cổng ứng dụng."
      },
      {
        "id": "cnsf-q75",
        "num": 75,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "What is a \"zero-day\" vulnerability?",
        "questionVi": "Lỗ hổng \"zero-day\" là gì?",
        "options": [
          {
            "key": "A",
            "text": "A newly discovered flaw for which no oﬃcial vendor patch is yet available"
          },
          {
            "key": "B",
            "text": "A vulnerability that only aﬀects devices turned oﬀ for zero days"
          },
          {
            "key": "C",
            "text": "A firewall rule that blocks all ports"
          },
          {
            "key": "D",
            "text": "A password that expires every 24 hours"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A newly discovered flaw for which no oﬃcial vendor patch is yet available",
        "explainRight": "Zero-day nghĩa là nhà sản xuất có \"0 ngày\" chuẩn bị bản vá: lỗ hổng vừa bị phát hiện hoặc khai thác khi chưa kịp có bản sửa lỗi chính thức nên mức độ nguy hiểm rất cao.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B, C, D: Đều là các cách diễn giải sai về thời gian tắt máy, quy tắc tường lửa hoặc chu kỳ đổi mật khẩu, không phải định nghĩa lỗ hổng bảo mật chưa có bản vá."
      },
      {
        "id": "cnsf-q76",
        "num": 76,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "Which security concept ensures that authorized users have reliable and timely access to systems and data when needed?",
        "questionVi": "Khái niệm bảo mật nào đảm bảo người dùng được cấp phép có quyền truy cập ổn định và kịp thời vào hệ thống cùng dữ liệu khi cần?",
        "options": [
          {
            "key": "A",
            "text": "Availability"
          },
          {
            "key": "B",
            "text": "Obfuscation"
          },
          {
            "key": "C",
            "text": "Eavesdropping"
          },
          {
            "key": "D",
            "text": "Spoofing"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Availability",
        "explainRight": "Availability (tính sẵn sàng) giống như cửa hàng luôn mở đúng giờ và có đủ điện nước phục vụ khách hàng hợp lệ, không bị sập hay gián đoạn dịch vụ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Obfuscation: Là làm rối mã/thông tin để khó đọc hiểu hơn. C. Eavesdropping: Là hành vi nghe lén lưu lượng trên đường truyền. D. Spoofing: Là giả mạo danh tính hoặc địa chỉ nguồn."
      },
      {
        "id": "cnsf-q77",
        "num": 77,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "Which wireless security setting prevents clients on the same Wi-Fi access point from communicating directly with each other?",
        "questionVi": "Thiết lập bảo mật wireless nào ngăn các clients kết nối cùng một Wi-Fi access point giao tiếp trực tiếp với nhau?",
        "options": [
          {
            "key": "A",
            "text": "Client isolation (AP isolation)"
          },
          {
            "key": "B",
            "text": "DHCP relay"
          },
          {
            "key": "C",
            "text": "Port forwarding"
          },
          {
            "key": "D",
            "text": "MAC cloning"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Client isolation (AP isolation)",
        "explainRight": "Client isolation giống như bố trí vách ngăn riêng cho từng bàn trong quán cà phê Wi-Fi công cộng: máy của bạn chỉ đi ra Internet được chứ không nhìn thấy hay kết nối ngang sang máy khách ngồi bàn bên cạnh.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. DHCP relay: Dùng để chuyển tiếp yêu cầu xin cấp IP qua mạng khác. C. Port forwarding: Dùng để mở đường chuyển tiếp cổng từ ngoài vào dịch vụ nội bộ. D. MAC cloning: Là sao chép địa chỉ MAC của một thiết bị khác."
      },
      {
        "id": "cnsf-q78",
        "num": 78,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "Why is asymmetric encryption commonly used during the initial TLS handshake before switching to symmetric encryption?",
        "questionVi": "Tại sao mã hóa bất đối xứng (asymmetric encryption) thường được dùng ở bước bắt tay TLS ban đầu trước khi chuyển sang mã hóa đối xứng (symmetric encryption)?",
        "options": [
          {
            "key": "A",
            "text": "To securely exchange a shared session key without sending it in plaintext, then use faster symmetric encryption for bulk data"
          },
          {
            "key": "B",
            "text": "Because symmetric encryption cannot encrypt text"
          },
          {
            "key": "C",
            "text": "To disable server authentication"
          },
          {
            "key": "D",
            "text": "Because asymmetric encryption needs no keys at all"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "To securely exchange a shared session key without sending it in plaintext, then use faster symmetric encryption for bulk data",
        "explainRight": "Giống như dùng hộp khóa công khai để gửi an toàn một chiếc chìa khóa chung cho hai bên, sau đó dùng chính chìa khóa chung đó mở/khóa dữ liệu cho thật nhanh và nhẹ máy trong suốt phiên kết nối.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Mã hóa đối xứng mã hóa mọi dữ liệu rất tốt và nhanh, không hề bị giới hạn loại dữ liệu. C: Bắt tay TLS giúp xác thực máy chủ chứ không tắt xác thực. D: Mã hóa bất đối xứng dùng cặp khóa công khai và khóa bí mật (public/private key)."
      },
      {
        "id": "cnsf-q79",
        "num": 79,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "What is the primary goal of an Incident Response Plan (IRP)?",
        "questionVi": "Mục tiêu chính của một Incident Response Plan (IRP - kế hoạch ứng phó sự cố) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Provide a structured process to detect, contain, eradicate, and recover from security incidents"
          },
          {
            "key": "B",
            "text": "Guarantee that zero cyberattacks will ever happen"
          },
          {
            "key": "C",
            "text": "Replace all network cables annually"
          },
          {
            "key": "D",
            "text": "Store plain-text backups on public websites"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Provide a structured process to detect, contain, eradicate, and recover from security incidents",
        "explainRight": "IRP giống như quy trình diễn tập phòng cháy chữa cháy: khi sự cố xảy ra thì mọi người biết ngay bước nào phát hiện, khoanh vùng dập lửa, xử lý triệt để và khôi phục hoạt động nhanh nhất.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: Không kế hoạch nào đảm bảo 100% không bao giờ bị tấn công; kế hoạch giúp giảm thiểu thiệt hại khi sự cố xảy ra. C: Không liên quan tới việc thay dây cáp mạng định kỳ. D: Đưa bản sao lưu không mã hóa lên web công cộng là hành động cực kỳ mất an toàn."
      },
      {
        "id": "cnsf-q80",
        "num": 80,
        "section": "Phần 8: Câu 71–80",
        "questionEn": "Which type of security testing simulates a real-world attack with authorization to identify exploitable weaknesses before malicious actors do?",
        "questionVi": "Loại kiểm thử bảo mật nào mô phỏng một cuộc tấn công thực tế có cấp phép nhằm phát hiện các điểm yếu có thể khai thác trước khi kẻ xấu làm điều đó?",
        "options": [
          {
            "key": "A",
            "text": "Penetration testing"
          },
          {
            "key": "B",
            "text": "Passive cable crimping"
          },
          {
            "key": "C",
            "text": "Daily log deletion"
          },
          {
            "key": "D",
            "text": "Open port broadcasting"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Penetration testing",
        "explainRight": "Penetration testing (kiểm thử xâm nhập / pentest) giống như thuê chuyên gia kiểm tra khóa cửa hợp pháp đóng vai kẻ trộm để tìm ra khe hở và vá lại trước khi trộm thật ghé thăm.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Passive cable crimping: Chỉ là bấm đầu dây cáp mạng vật lý, không phải kiểm thử bảo mật. C. Daily log deletion: Xóa nhật ký hằng ngày làm mất dữ liệu theo dõi sự cố chứ không tìm lỗ hổng. D. Open port broadcasting: Không phải phương pháp kiểm thử xâm nhập có cấp phép."
      }
    ]
  }
];
