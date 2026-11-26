// Pre-built Study Question Banks for Nguyen Viet Thanh Learning Hub
// Decks: CNSF (80) + Networking/Security/SysAdmin (200) + M365 Admin SOP (61) = 341 Questions
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
            "text": "Shared root credentials for all staff"
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
        "questionEn": "Study the decision above. When the host sends a packet to 8.8.8.8 (a different subnet), where does it send the frame first?",
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
        "questionEn": "Which device operates primarily at OSI layer 3 to forward packets between different networks?",
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
            "text": "Filter traffic based on defined security rules"
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
        "correctAnswer": "Filter traffic based on defined security rules",
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
        "questionEn": "Which attack floods a target system or network with excessive traffic to disrupt service availability?",
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
            "text": "Credential stuffing"
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
        "explainWrong": "B. SQL injection: Là tấn công chèn mã truy vấn độc hại vào ô nhập liệu để thao túng cơ sở dữ liệu. C. Credential stuffing: Là thử hàng loạt cặp tài khoản – mật khẩu bị lộ từ nơi khác để đăng nhập hàng loạt. D. DNS poisoning: Là đầu độc dữ liệu phân giải tên miền để dẫn người dùng tới sai địa chỉ IP."
      },
      {
        "id": "cnsf-q27",
        "num": 27,
        "section": "Phần 3: Câu 21–30",
        "questionEn": "Which wireless security standard introduced SAE (Simultaneous Authentication of Equals) to resist offline dictionary attacks?",
        "questionVi": "Chuẩn bảo mật wireless nào đưa vào SAE (Simultaneous Authentication of Equals) để chống lại các cuộc tấn công dò mật khẩu từ điển ngoại tuyến (offline dictionary attacks)?",
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
        "questionEn": "Which TCP port is the default standard port for unencrypted HTTP web traffic?",
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
            "text": "ff02::1"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "::1",
        "explainRight": "Trong IPv6, ::1 là địa chỉ loopback dùng để máy tự kiểm tra ngăn xếp mạng của chính nó, tương tự như 127.0.0.1 quen thuộc ở IPv4.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. fe80::1: Nằm trong dải link-local (fe80::/10), dùng cho giao tiếp trên cùng một liên kết cục bộ. C. 2001:db8::1: Thuộc dải dành riêng cho tài liệu/ví dụ minh họa. D. ff02::1: Là địa chỉ multicast trên liên kết cục bộ, gửi tới nhóm thiết bị."
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
        "questionEn": "What does a firewall rule set to \"DENY\" or \"DROP\" do when matching traffic arrives?",
        "questionVi": "Một quy tắc firewall đặt ở trạng thái \"DENY\" hoặc \"DROP\" sẽ làm gì khi có lưu lượng khớp điều kiện đi tới?",
        "options": [
          {
            "key": "A",
            "text": "Blocks or discards the matching traffic"
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
        "correctAnswer": "Blocks or discards the matching traffic",
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
            "text": "Monitor traffic and alert on suspicious or malicious activity"
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
        "correctAnswer": "Monitor traffic and alert on suspicious or malicious activity",
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
        "questionEn": "Which type of attack sends a large volume of traffic from many distributed sources simultaneously?",
        "questionVi": "Loại tấn công nào gửi một lượng lớn traffic từ nhiều nguồn phân tán cùng lúc?",
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
            "text": "Actively block or drop detected malicious traffic in real time"
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
        "correctAnswer": "Actively block or drop detected malicious traffic in real time",
        "explainRight": "Nếu IDS giống như chuông báo động chỉ phát tín hiệu cảnh báo thì IPS giống như bảo vệ can thiệp ngay lập tức: phát hiện lưu lượng độc hại là chặn hoặc hủy luôn theo thời gian thực.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B: IPS không thay thế ăng-ten thu phát sóng Wi-Fi. C: Tạo địa chỉ MAC ngẫu nhiên không phải chức năng chính của IPS. D: IPS không đổi dữ liệu mạng IPv4 thành tín hiệu âm thanh analog."
      },
      {
        "id": "cnsf-q57",
        "num": 57,
        "section": "Phần 6: Câu 51–60",
        "questionEn": "Which practice reduces attack surface by turning off unused services, ports, and accounts on a system?",
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
            "text": "Sniffing"
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
        "explainWrong": "B. Sniffing: Là nghe lén, bắt gói tin đi qua mạng. C. Spoofing: Là giả mạo địa chỉ hoặc danh tính để đánh lừa. D. Subnetting: Là chia nhỏ mạng IP thành các mạng con."
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
        "questionEn": "Which wireless frequency band generally offers faster speeds over shorter distances compared to 2.4 GHz?",
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
            "text": "A newly discovered flaw for which no official vendor patch is yet available"
          },
          {
            "key": "B",
            "text": "A vulnerability that only affects devices turned off for zero days"
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
        "correctAnswer": "A newly discovered flaw for which no official vendor patch is yet available",
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
  },
  {
    "id": "net-sec-200",
    "title": "Bộ 200 Câu Hỏi Ôn Tập Mạng, Bảo Mật & Hệ Thống",
    "subtitle": "Tổng hợp 200 câu hỏi phỏng vấn & vận hành thực tế: Nền tảng TCP/IP, EIGRP, OSPF, BGP, Palo Alto NGFW, Zscaler, Cabling, IT Support & M365 SOP (Song ngữ Anh – Việt, kèm giải thích đúng/sai).",
    "category": "Networking & Security",
    "badge": "200 Câu Chuyên Sâu",
    "isBuiltIn": true,
    "createdAt": "2026-11-26",
    "questions": [
      {
        "id": "net200-q1",
        "num": 1,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What are the responsibilities of the Network, Data Link, and Physical layers?",
        "questionVi": "Nhiệm vụ của các tầng Network, Data Link và Physical là gì?",
        "options": [
          {
            "key": "A",
            "text": "Network layer manages physical MAC addresses; Data Link layer handles dynamic IP routing; Physical layer provides end-to-end flow control"
          },
          {
            "key": "B",
            "text": "Network layer defines mechanical cable standards; Data Link layer handles logical path selection; Physical layer manages packet fragmentation"
          },
          {
            "key": "C",
            "text": "Network layer ensures reliable frame delivery; Data Link layer performs dynamic routing decisions; Physical layer assigns IP addresses to devices"
          },
          {
            "key": "D",
            "text": "Network layer provides logical addressing and path determination (routing); Data Link layer (MAC) provides reliable transit across a physical link; Physical layer defines electrical and mechanical specifications between devices"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Network layer provides logical addressing and path determination (routing); Data Link layer (MAC) provides reliable transit across a physical link; Physical layer defines electrical and mechanical specifications between devices",
        "explainRight": "Tầng Physical lo dây cáp và tín hiệu điện/quang; tầng Data Link lo địa chỉ vật lý MAC trong mạng nội bộ; tầng Network lo địa chỉ IP và dẫn đường giữa các mạng. (Đáp án đầy đủ: Network layer provides logical addressing and path determination (routing); Data Link layer (MAC) provides reliable transit across a physical link; Physical layer defines electrical and mechanical specifications between devices.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Network layer manages physical MAC addresses; Data Link layer handles dynamic IP routing; Physical layer provides end-to-end flow control: Tầng Network không quản lý địa chỉ MAC vật lý và tầng Data Link không thực hiện định tuyến IP động. B. Network layer defines mechanical cable standards; Data Link layer handles logical path selection; Physical layer manages packet fragmentation: Tầng Network không quy định tiêu chuẩn cáp cơ khí và tầng Data Link không chọn đường đi logic. C. Network layer ensures reliable frame delivery; Data Link layer performs dynamic routing decisions; Physical layer assigns IP addresses to devices: Tầng Network không chịu trách nhiệm truyền khung dữ liệu tin cậy và tầng Physical không gán địa chỉ IP."
      },
      {
        "id": "net200-q2",
        "num": 2,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the difference between Routed Protocols and Routing Protocols?",
        "questionVi": "Sự khác nhau giữa Routed Protocols và Routing Protocols là gì?",
        "options": [
          {
            "key": "A",
            "text": "Routed protocols (e.g., IP, IPX, AppleTalk) carry user application data between networks, whereas Routing protocols (e.g., OSPF, EIGRP, RIP) learn routes and perform path determination"
          },
          {
            "key": "B",
            "text": "Routed protocols handle MAC address resolution, whereas Routing protocols manage physical layer electrical signaling"
          },
          {
            "key": "C",
            "text": "Routed protocols find paths and build routing tables, whereas Routing protocols carry the actual user payload data across the network"
          },
          {
            "key": "D",
            "text": "Routed protocols provide session layer encryption, whereas Routing protocols control transport layer window sizes"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Routed protocols (e.g., IP, IPX, AppleTalk) carry user application data between networks, whereas Routing protocols (e.g., OSPF, EIGRP, RIP) learn routes and perform path determination",
        "explainRight": "Routed protocol là \"xe chở hàng\" mang dữ liệu người dùng, còn Routing protocol là \"bản đồ GPS\" tìm đường đi tốt nhất. (Đáp án đầy đủ: Routed protocols (e.g., IP, IPX, AppleTalk) carry user application data between networks, whereas Routing protocols (e.g., OSPF, EIGRP, RIP) learn routes and perform path determination.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Routed protocols handle MAC address resolution, whereas Routing protocols manage physical layer electrical signaling: Routed protocols không xử lý phân giải địa chỉ MAC và Routing protocols không quản lý tín hiệu điện tầng vật lý. C. Routed protocols find paths and build routing tables, whereas Routing protocols carry the actual user payload data across the network: Phát biểu bị đảo ngược hoàn toàn chức năng của Routed protocols và Routing protocols. D. Routed protocols provide session layer encryption, whereas Routing protocols control transport layer window sizes: Routed protocols không cung cấp mã hóa tầng phiên và Routing protocols không kiểm soát kích thước cửa sổ tầng vận chuyển."
      },
      {
        "id": "net200-q3",
        "num": 3,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is a port number and give some examples?",
        "questionVi": "Port number (số cổng) là gì và cho ví dụ?",
        "options": [
          {
            "key": "A",
            "text": "A 32-bit integer in the IP header identifying the physical network interface card on a local area network"
          },
          {
            "key": "B",
            "text": "A 48-bit hardware address stored in ROM that uniquely identifies a router interface globally"
          },
          {
            "key": "C",
            "text": "A 16-bit integer (0–65535) in the TCP/UDP header identifying a specific process/application on a host (e.g., FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, HTTP 80, POP3 110, NTP 123, SNMP 161/162, HTTPS 443)"
          },
          {
            "key": "D",
            "text": "An 8-bit field in the Ethernet header specifying the exact packet length and error correction code"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A 16-bit integer (0–65535) in the TCP/UDP header identifying a specific process/application on a host (e.g., FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, HTTP 80, POP3 110, NTP 123, SNMP 161/162, HTTPS 443)",
        "explainRight": "Nếu địa chỉ IP là địa chỉ tòa nhà thì port number là số phòng cụ thể để đưa dữ liệu vào đúng ứng dụng đang chạy. (Đáp án đầy đủ: A 16-bit integer (0–65535) in the TCP/UDP header identifying a specific process/application on a host (e.g., FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, HTTP 80, POP3 110, NTP 123, SNMP 161/162, HTTPS 443).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A 32-bit integer in the IP header identifying the physical network interface card on a local area network: Port number không phải là số nguyên 32-bit trong tiêu đề IP dùng để định danh card mạng. B. A 48-bit hardware address stored in ROM that uniquely identifies a router interface globally: Port number không phải là địa chỉ phần cứng 48-bit được lưu trong ROM. D. An 8-bit field in the Ethernet header specifying the exact packet length and error correction code: Port number không phải là trường 8-bit trong tiêu đề Ethernet quy định độ dài gói tin."
      },
      {
        "id": "net200-q4",
        "num": 4,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the range of port numbers?",
        "questionVi": "Phạm vi các port numbers được chia như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Well-known Ports: 0–511; Registered Ports: 512–1023; Open / Dynamic Ports: 1024–49151"
          },
          {
            "key": "B",
            "text": "Well-known Ports: 0–1023; Registered Ports: 1024–49151; Open / Dynamic (Ephemeral) Ports: 49152–65535"
          },
          {
            "key": "C",
            "text": "Well-known Ports: 0–255; Registered Ports: 256–1023; Open / Dynamic Ports: 1024–65535"
          },
          {
            "key": "D",
            "text": "Well-known Ports: 0–2047; Registered Ports: 2048–32767; Open / Dynamic Ports: 32768–65535"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Well-known Ports: 0–1023; Registered Ports: 1024–49151; Open / Dynamic (Ephemeral) Ports: 49152–65535",
        "explainRight": "Nhóm đầu dành cho dịch vụ chuẩn cố định (web, mail), nhóm giữa cho ứng dụng đăng ký riêng và nhóm cuối cho cổng tạm thời trên máy khách. (Đáp án đầy đủ: Well-known Ports: 0–1023; Registered Ports: 1024–49151; Open / Dynamic (Ephemeral) Ports: 49152–65535.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Well-known Ports: 0–511; Registered Ports: 512–1023; Open / Dynamic Ports: 1024–49151: Dải port được chia theo các mốc số không chính xác đối với hệ thống cổng đăng ký và cổng mở động. C. Well-known Ports: 0–255; Registered Ports: 256–1023; Open / Dynamic Ports: 1024–65535: Dải số port cho Well-known ports và Registered ports bị sai lệch so với tiêu chuẩn của IANA. D. Well-known Ports: 0–2047; Registered Ports: 2048–32767; Open / Dynamic Ports: 32768–65535: Dải phân chia các nhóm port không khớp với định nghĩa chuẩn mạng (0-1023, 1024-49151, 49152-65535)."
      },
      {
        "id": "net200-q5",
        "num": 5,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is a Protocol Number and give some examples?",
        "questionVi": "Protocol Number là gì và cho ví dụ?",
        "options": [
          {
            "key": "A",
            "text": "A 1-byte field in the IPv4 header identifying the upper-layer protocol receiving the payload: ICMP (1), IGMP (2), IPv4 (4), TCP (6), EGP (8), IGP (9), UDP (17), IPv6 (41), GRE (47), EIGRP (88), OSPF (89), BGP (179)"
          },
          {
            "key": "B",
            "text": "A 4-bit field in the IP header representing the internet protocol version and header length"
          },
          {
            "key": "C",
            "text": "A 2-byte field in the Ethernet header identifying the network layer routed protocol type using EtherType values"
          },
          {
            "key": "D",
            "text": "A 16-bit field in the TCP header identifying the source and destination application port numbers"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A 1-byte field in the IPv4 header identifying the upper-layer protocol receiving the payload: ICMP (1), IGMP (2), IPv4 (4), TCP (6), EGP (8), IGP (9), UDP (17), IPv6 (41), GRE (47), EIGRP (88), OSPF (89), BGP (179)",
        "explainRight": "Là nhãn dán trên gói tin IP báo cho hệ điều hành biết bên trong đang chứa dữ liệu của giao thức nào để xử lý đúng. (Đáp án đầy đủ: A 1-byte field in the IPv4 header identifying the upper-layer protocol receiving the payload: ICMP (1), IGMP (2), IPv4 (4), TCP (6), EGP (8), IGP (9), UDP (17), IPv6 (41), GRE (47), EIGRP (88), OSPF (89), BGP (179).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A 4-bit field in the IP header representing the internet protocol version and header length: Đây là trường Version và IHL trong tiêu đề IP chứ không chỉ định giao thức tầng trên. C. A 2-byte field in the Ethernet header identifying the network layer routed protocol type using EtherType values: Đây là mô tả của EtherType trong tầng Data Link chứ không phải Protocol Number trong tiêu đề IPv4. D. A 16-bit field in the TCP header identifying the source and destination application port numbers: Đây là mô tả về số hiệu cổng trong tiêu đề TCP chứ không phải Protocol Number của gói IP."
      },
      {
        "id": "net200-q6",
        "num": 6,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the difference between TCP and UDP in terms of acknowledgements and protocol numbers?",
        "questionVi": "TCP và UDP khác nhau thế nào về xác nhận (acknowledgements) và protocol number?",
        "options": [
          {
            "key": "A",
            "text": "TCP (Protocol No. 6) operates without acknowledgements for speed; UDP (Protocol No. 17) uses strict acknowledgements for session reliability"
          },
          {
            "key": "B",
            "text": "TCP (Protocol No. 17) supports acknowledgements for fast communication; UDP (Protocol No. 6) uses no acknowledgements for reliable streaming"
          },
          {
            "key": "C",
            "text": "TCP (Protocol No. 4) handles unreliable broadcast traffic; UDP (Protocol No. 6) manages reliable unicast routing updates"
          },
          {
            "key": "D",
            "text": "TCP (Protocol No. 6) supports acknowledgements for reliable communication (HTTP, FTP, SMTP); UDP (Protocol No. 17) has no acknowledgements for fast, unreliable communication (DNS, DHCP, TFTP)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "TCP (Protocol No. 6) supports acknowledgements for reliable communication (HTTP, FTP, SMTP); UDP (Protocol No. 17) has no acknowledgements for fast, unreliable communication (DNS, DHCP, TFTP)",
        "explainRight": "TCP gửi hàng có ký nhận đảm bảo đủ gói, còn UDP gửi nhanh liên tục không chờ phản hồi. (Đáp án đầy đủ: TCP (Protocol No. 6) supports acknowledgements for reliable communication (HTTP, FTP, SMTP); UDP (Protocol No. 17) has no acknowledgements for fast, unreliable communication (DNS, DHCP, TFTP).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. TCP (Protocol No. 6) operates without acknowledgements for speed; UDP (Protocol No. 17) uses strict acknowledgements for session reliability: Đặc tính về độ tin cậy và cơ chế xác nhận của TCP và UDP bị đảo ngược hoàn toàn. B. TCP (Protocol No. 17) supports acknowledgements for fast communication; UDP (Protocol No. 6) uses no acknowledgements for reliable streaming: Số hiệu giao thức (Protocol number) của TCP và UDP bị gán nhầm lẫn cho nhau. C. TCP (Protocol No. 4) handles unreliable broadcast traffic; UDP (Protocol No. 6) manages reliable unicast routing updates: Số hiệu giao thức và chức năng của TCP/UDP được mô tả sai lệch hoàn toàn với thực tế kỹ thuật."
      },
      {
        "id": "net200-q7",
        "num": 7,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What are Unicast, Multicast, and Broadcast?",
        "questionVi": "Unicast, Multicast và Broadcast là gì?",
        "options": [
          {
            "key": "A",
            "text": "Unicast is one-to-all communication; Multicast is one-to-one transmission; Broadcast is one-to-many group communication"
          },
          {
            "key": "B",
            "text": "Unicast is one-to-one transmission; Multicast is one-to-many group communication; Broadcast is one-to-all communication within a broadcast domain"
          },
          {
            "key": "C",
            "text": "Unicast is one-to-many group communication; Multicast is one-to-all communication; Broadcast is one-to-one transmission"
          },
          {
            "key": "D",
            "text": "Unicast is communication between two subnets; Multicast is communication across routers; Broadcast is local loopback traffic"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Unicast is one-to-one transmission; Multicast is one-to-many group communication; Broadcast is one-to-all communication within a broadcast domain",
        "explainRight": "Unicast là nhắn riêng 1-1, Multicast là nhắn vào nhóm đã đăng ký, Broadcast là phát loa cho tất cả trong cùng mạng cục bộ. (Đáp án đầy đủ: Unicast is one-to-one transmission; Multicast is one-to-many group communication; Broadcast is one-to-all communication within a broadcast domain.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Unicast is one-to-all communication; Multicast is one-to-one transmission; Broadcast is one-to-many group communication: Các định nghĩa về Unicast, Multicast và Broadcast bị xáo trộn vị trí cho nhau. C. Unicast is one-to-many group communication; Multicast is one-to-all communication; Broadcast is one-to-one transmission: Ý nghĩa truyền thông của ba chế độ Unicast, Multicast và Broadcast không chính xác. D. Unicast is communication between two subnets; Multicast is communication across routers; Broadcast is local loopback traffic: Các thuật ngữ này được giải thích theo phạm vi subnet và router thay vì kiểu truyền dữ liệu."
      },
      {
        "id": "net200-q8",
        "num": 8,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the difference between Half-duplex and Full-duplex?",
        "questionVi": "Sự khác nhau giữa Half-duplex và Full-duplex là gì?",
        "options": [
          {
            "key": "A",
            "text": "Half-duplex restricts data flow to a single direction permanently; Full-duplex alternates direction between two endpoints"
          },
          {
            "key": "B",
            "text": "Half-duplex allows data flow in both directions but only one direction at a time (e.g., Hub); Full-duplex allows simultaneous bidirectional data flow (e.g., Switch)"
          },
          {
            "key": "C",
            "text": "Half-duplex allows simultaneous bidirectional data flow; Full-duplex allows data flow in only one direction at a time"
          },
          {
            "key": "D",
            "text": "Half-duplex uses separate physical cables for send and receive; Full-duplex shares a single wire pair for bidirectional traffic"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Half-duplex allows data flow in both directions but only one direction at a time (e.g., Hub); Full-duplex allows simultaneous bidirectional data flow (e.g., Switch)",
        "explainRight": "Half-duplex giống bộ đàm phải nói lần lượt, Full-duplex giống điện thoại hai chiều vừa nói vừa nghe cùng lúc. (Đáp án đầy đủ: Half-duplex allows data flow in both directions but only one direction at a time (e.g., Hub); Full-duplex allows simultaneous bidirectional data flow (e.g., Switch).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Half-duplex restricts data flow to a single direction permanently; Full-duplex alternates direction between two endpoints: Half-duplex không giới hạn truyền dữ liệu một chiều cố định vĩnh viễn. C. Half-duplex allows simultaneous bidirectional data flow; Full-duplex allows data flow in only one direction at a time: Tính năng đồng thời và luân phiên của Half-duplex và Full-duplex bị đảo ngược. D. Half-duplex uses separate physical cables for send and receive; Full-duplex shares a single wire pair for bidirectional traffic: Việc chia sẻ cáp hoặc dùng cáp riêng không phải là định nghĩa phân biệt chế độ duplex."
      },
      {
        "id": "net200-q9",
        "num": 9,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the MAC address format?",
        "questionVi": "Định dạng địa chỉ MAC là gì?",
        "options": [
          {
            "key": "A",
            "text": "A 32-bit logical address split into four 8-bit octets representing network and host identifiers assigned dynamically"
          },
          {
            "key": "B",
            "text": "A 16-bit physical identifier assigned by switch port security to track connected host devices"
          },
          {
            "key": "C",
            "text": "A 128-bit hierarchical address represented in hexadecimal format used exclusively for global internet routing"
          },
          {
            "key": "D",
            "text": "A 48-bit (6-byte / 12 hexadecimal digits) hardware address split into two 24-bit halves: the first 24 bits are the OUI (assigned by IEEE) and the last 24 bits are the manufacturer-assigned serial code"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "A 48-bit (6-byte / 12 hexadecimal digits) hardware address split into two 24-bit halves: the first 24 bits are the OUI (assigned by IEEE) and the last 24 bits are the manufacturer-assigned serial code",
        "explainRight": "Nửa đầu là mã định danh nhà sản xuất card mạng, nửa sau là số sê-ri riêng của từng thiết bị. (Đáp án đầy đủ: A 48-bit (6-byte / 12 hexadecimal digits) hardware address split into two 24-bit halves: the first 24 bits are the OUI (assigned by IEEE) and the last 24 bits are the manufacturer-assigned serial code.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A 32-bit logical address split into four 8-bit octets representing network and host identifiers assigned dynamically: Đây là cấu trúc của địa chỉ IP phiên bản 4 (IPv4) chứ không phải địa chỉ MAC phần cứng. B. A 16-bit physical identifier assigned by switch port security to track connected host devices: Địa chỉ MAC không phải là định danh 16-bit được gán bởi tính năng bảo mật cổng của switch. C. A 128-bit hierarchical address represented in hexadecimal format used exclusively for global internet routing: Đây là mô tả về định dạng địa chỉ IPv6 chứ không phải địa chỉ MAC 48-bit."
      },
      {
        "id": "net200-q10",
        "num": 10,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is a Frame?",
        "questionVi": "Frame (khung dữ liệu) là gì?",
        "options": [
          {
            "key": "A",
            "text": "A Transport layer segment containing port numbers, sequence numbers, and reliability flags"
          },
          {
            "key": "B",
            "text": "A Data Link layer (Layer 2) protocol data unit encapsulating a packet with source and destination hardware (MAC) addresses in its header and error-checking trailer"
          },
          {
            "key": "C",
            "text": "A Network layer protocol data unit containing source and destination IP addresses and routing metrics"
          },
          {
            "key": "D",
            "text": "A Physical layer bitstream defining electrical voltage levels and synchronization preambles"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "A Data Link layer (Layer 2) protocol data unit encapsulating a packet with source and destination hardware (MAC) addresses in its header and error-checking trailer",
        "explainRight": "Là phong bì tầng 2 gắn địa chỉ MAC người gửi và người nhận để chuyển dữ liệu qua switch trong mạng nội bộ. (Đáp án đầy đủ: A Data Link layer (Layer 2) protocol data unit encapsulating a packet with source and destination hardware (MAC) addresses in its header and error-checking trailer.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A Transport layer segment containing port numbers, sequence numbers, and reliability flags: Đây là định nghĩa của phân đoạn (Segment) hoặc gói dữ liệu ở tầng Transport. C. A Network layer protocol data unit containing source and destination IP addresses and routing metrics: Đây là định nghĩa của gói dữ liệu (Packet) ở tầng Network chứ không phải Frame ở tầng Data Link. D. A Physical layer bitstream defining electrical voltage levels and synchronization preambles: Đây là định nghĩa của dòng bit (Bitstream) ở tầng Physical chứ không phải cấu trúc Frame."
      },
      {
        "id": "net200-q11",
        "num": 11,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the TCP/IP Model?",
        "questionVi": "Mô hình TCP/IP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A five-layer protocol suite that separates the Network Access layer into Physical and Data Link layers"
          },
          {
            "key": "B",
            "text": "A four-layer networking standard consisting of: Application layer, Transport layer, Internet layer, and Network Access layer"
          },
          {
            "key": "C",
            "text": "A three-layer hierarchical model designed by Cisco consisting of Core, Distribution, and Access layers"
          },
          {
            "key": "D",
            "text": "A seven-layer conceptual framework including Physical, Data Link, Network, Transport, Session, Presentation, and Application"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "A four-layer networking standard consisting of: Application layer, Transport layer, Internet layer, and Network Access layer",
        "explainRight": "Bộ quy tắc chuẩn 4 tầng giúp mọi thiết bị trên Internet kết nối và trao đổi dữ liệu thống nhất với nhau. (Đáp án đầy đủ: A four-layer networking standard consisting of: Application layer, Transport layer, Internet layer, and Network Access layer.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A five-layer protocol suite that separates the Network Access layer into Physical and Data Link layers: Đây là mô hình TCP/IP cải tiến hoặc mô hình lai, không phải cấu trúc 4 tầng nguyên bản của TCP/IP. C. A three-layer hierarchical model designed by Cisco consisting of Core, Distribution, and Access layers: Đây là mô hình thiết kế mạng phân cấp của Cisco, dùng để quy hoạch hạ tầng vật lý. D. A seven-layer conceptual framework including Physical, Data Link, Network, Transport, Session, Presentation, and Application: Đây là mô hình tham chiếu OSI 7 tầng, không phải mô hình TCP/IP chuẩn."
      },
      {
        "id": "net200-q12",
        "num": 12,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "Which protocols belong to each layer of the TCP/IP model?",
        "questionVi": "Các giao thức thuộc từng tầng của mô hình TCP/IP là gì?",
        "options": [
          {
            "key": "A",
            "text": "Application: DNS, DHCP; Transport: Ethernet; Internet: IP, ARP; Network Access: Fiber, Copper"
          },
          {
            "key": "B",
            "text": "Application: IP, ICMP; Transport: TCP, UDP; Internet: HTTP, FTP; Network Access: Ethernet, Wi-Fi"
          },
          {
            "key": "C",
            "text": "Application: HTTP, SSH; Transport: IP, ICMP; Internet: TCP, UDP; Network Access: MAC, LLC"
          },
          {
            "key": "D",
            "text": "Application: DNS, DHCP, FTP, TFTP, SMTP, HTTP, Telnet, SSH; Transport: TCP, UDP; Internet: IP, ICMP, IGMP; Network Access: Ethernet, Token Ring, FDDI, X.25, Frame Relay, ARP, RARP"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Application: DNS, DHCP, FTP, TFTP, SMTP, HTTP, Telnet, SSH; Transport: TCP, UDP; Internet: IP, ICMP, IGMP; Network Access: Ethernet, Token Ring, FDDI, X.25, Frame Relay, ARP, RARP",
        "explainRight": "Tầng trên lo ứng dụng người dùng, tầng giữa lo vận chuyển và định tuyến IP, tầng dưới lo truyền qua hạ tầng mạng vật lý. (Đáp án đầy đủ: Application: DNS, DHCP, FTP, TFTP, SMTP, HTTP, Telnet, SSH; Transport: TCP, UDP; Internet: IP, ICMP, IGMP; Network Access: Ethernet, Token Ring, FDDI, X.25, Frame Relay, ARP, RARP.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Application: DNS, DHCP; Transport: Ethernet; Internet: IP, ARP; Network Access: Fiber, Copper: Sai vì Ethernet thuộc tầng Network Access, không phải tầng Transport. B. Application: IP, ICMP; Transport: TCP, UDP; Internet: HTTP, FTP; Network Access: Ethernet, Wi-Fi: Sai vì IP và ICMP thuộc tầng Internet, còn HTTP và FTP thuộc tầng Application. C. Application: HTTP, SSH; Transport: IP, ICMP; Internet: TCP, UDP; Network Access: MAC, LLC: Sai vì IP và ICMP thuộc tầng Internet, trong khi TCP và UDP phải thuộc tầng Transport."
      },
      {
        "id": "net200-q13",
        "num": 13,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is ARP (Address Resolution Protocol)?",
        "questionVi": "ARP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A protocol used to translate private IP addresses into public IP addresses for internet routing"
          },
          {
            "key": "B",
            "text": "A protocol that resolves a known Layer 3 IPv4 address into its corresponding Layer 2 MAC hardware address on a local Ethernet network"
          },
          {
            "key": "C",
            "text": "A protocol that maps a known MAC address to a dynamic IPv4 address using a centralized server"
          },
          {
            "key": "D",
            "text": "A protocol that resolves domain names into IP addresses to facilitate web browsing"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "A protocol that resolves a known Layer 3 IPv4 address into its corresponding Layer 2 MAC hardware address on a local Ethernet network",
        "explainRight": "Giống như biết số nhà (IP) trong khu phố và hỏi xem ai đang ở đó để lấy địa chỉ vật lý (MAC) giao hàng tận tay. (Đáp án đầy đủ: A protocol that resolves a known Layer 3 IPv4 address into its corresponding Layer 2 MAC hardware address on a local Ethernet network.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A protocol used to translate private IP addresses into public IP addresses for internet routing: Đây là định nghĩa của NAT (Network Address Translation), không liên quan đến việc tìm địa chỉ MAC. C. A protocol that maps a known MAC address to a dynamic IPv4 address using a centralized server: Đây là mô tả của RARP hoặc DHCP, không phải chức năng tìm MAC từ IP của ARP. D. A protocol that resolves domain names into IP addresses to facilitate web browsing: Đây là chức năng của DNS (Domain Name System), không phải ARP."
      },
      {
        "id": "net200-q14",
        "num": 14,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "At which OSI layer does ARP work and why?",
        "questionVi": "ARP hoạt động ở tầng nào và tại sao?",
        "options": [
          {
            "key": "A",
            "text": "ARP works at the Network layer (Layer 3) because it handles IP addresses and routing between different subnets"
          },
          {
            "key": "B",
            "text": "ARP works at the Physical layer (Layer 1) because it deals with the electrical signals of the network interface card"
          },
          {
            "key": "C",
            "text": "ARP works at the Data Link layer (Layer 2) because it is implemented by the network protocol driver and encapsulated directly inside Ethernet frames"
          },
          {
            "key": "D",
            "text": "ARP works at the Transport layer (Layer 4) because it ensures the reliable delivery of MAC address information"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "ARP works at the Data Link layer (Layer 2) because it is implemented by the network protocol driver and encapsulated directly inside Ethernet frames",
        "explainRight": "Switch nội bộ chỉ đọc địa chỉ MAC ở tầng 2 nên ARP phải làm việc trực tiếp ở tầng này. (Đáp án đầy đủ: ARP works at the Data Link layer (Layer 2) because it is implemented by the network protocol driver and encapsulated directly inside Ethernet frames.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. ARP works at the Network layer (Layer 3) because it handles IP addresses and routing between different subnets: Mặc dù ARP xử lý IP nhưng nó không có header IP và không thể truyền qua Router, nên không được coi là Layer 3. B. ARP works at the Physical layer (Layer 1) because it deals with the electrical signals of the network interface card: ARP là một giao thức logic có cấu trúc gói tin, không phải là các tín hiệu điện hay đặc tính vật lý của dây dẫn. D. ARP works at the Transport layer (Layer 4) because it ensures the reliable delivery of MAC address information: ARP không có cơ chế kiểm soát luồng hay thiết lập phiên truyền dẫn như các giao thức tầng Transport."
      },
      {
        "id": "net200-q15",
        "num": 15,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is an ARP Table (cache)?",
        "questionVi": "ARP Table (cache) là gì?",
        "options": [
          {
            "key": "A",
            "text": "A security log that records all unauthorized MAC addresses attempting to connect to a switch port"
          },
          {
            "key": "B",
            "text": "A permanent database on a router that stores the MAC addresses of all devices on the global Internet"
          },
          {
            "key": "C",
            "text": "A dynamic memory table storing recently resolved IP-to-MAC mappings so the host does not need to broadcast ARP requests for every packet (though vulnerable to ARP spoofing)"
          },
          {
            "key": "D",
            "text": "A routing table used by Layer 3 switches to determine the best path for packet forwarding based on metric"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A dynamic memory table storing recently resolved IP-to-MAC mappings so the host does not need to broadcast ARP requests for every packet (though vulnerable to ARP spoofing)",
        "explainRight": "Bảng ghi nhớ tạm danh sách IP – MAC vừa tra cứu để lần sau gửi dữ liệu ngay lập tức. (Đáp án đầy đủ: A dynamic memory table storing recently resolved IP-to-MAC mappings so the host does not need to broadcast ARP requests for every packet (though vulnerable to ARP spoofing).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A security log that records all unauthorized MAC addresses attempting to connect to a switch port: Đây là chức năng của Port Security hoặc hệ thống giám sát, không phải bảng ARP. B. A permanent database on a router that stores the MAC addresses of all devices on the global Internet: Bảng ARP chỉ lưu trữ các thiết bị trong cùng mạng cục bộ và có tính chất tạm thời, không lưu toàn bộ Internet. D. A routing table used by Layer 3 switches to determine the best path for packet forwarding based on metric: Đây là mô tả của Routing Table, dùng IP đích để chọn đường đi, không phải ánh xạ IP-MAC."
      },
      {
        "id": "net200-q16",
        "num": 16,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the size of an ARP request and ARP reply packet?",
        "questionVi": "Kích thước gói ARP request và ARP reply là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "64 bytes (the minimum size of an entire Ethernet frame including the preamble)"
          },
          {
            "key": "B",
            "text": "20 bytes (the same size as a standard IPv4 header without options)"
          },
          {
            "key": "C",
            "text": "28 bytes (encapsulated inside an Ethernet frame)"
          },
          {
            "key": "D",
            "text": "46 bytes (the minimum payload size required for an Ethernet frame)"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "28 bytes (encapsulated inside an Ethernet frame)",
        "explainRight": "Gói tin ARP rất gọn nhẹ, chỉ chiếm đúng 28 byte dữ liệu. (Đáp án đầy đủ: 28 bytes (encapsulated inside an Ethernet frame).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 64 bytes (the minimum size of an entire Ethernet frame including the preamble): 64 bytes là kích thước tối thiểu của một khung Ethernet đầy đủ, bao gồm cả header và trailer. B. 20 bytes (the same size as a standard IPv4 header without options): 20 bytes là kích thước header IP, không phải kích thước gói tin ARP. D. 46 bytes (the minimum payload size required for an Ethernet frame): 46 bytes là kích thước dữ liệu tối thiểu để frame Ethernet không cần padding, không phải kích thước thực tế của ARP."
      },
      {
        "id": "net200-q17",
        "num": 17,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is Proxy ARP?",
        "questionVi": "Proxy ARP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A security feature that blocks all ARP requests to prevent network scanning and reconnaissance"
          },
          {
            "key": "B",
            "text": "A process where one device (such as a router) responds to an ARP request on behalf of another host located on a different network"
          },
          {
            "key": "C",
            "text": "A protocol used to assign multiple MAC addresses to a single virtual IP address for load balancing"
          },
          {
            "key": "D",
            "text": "A method where a host sends an ARP request for its own IP address to detect IP conflicts"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "A process where one device (such as a router) responds to an ARP request on behalf of another host located on a different network",
        "explainRight": "Router đứng giữa trả lời hộ bằng địa chỉ MAC của mình để nhận gói tin và chuyển tiếp sang mạng khác giúp máy gửi. (Đáp án đầy đủ: A process where one device (such as a router) responds to an ARP request on behalf of another host located on a different network.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A security feature that blocks all ARP requests to prevent network scanning and reconnaissance: Đây là mô tả của một tính năng Firewall hoặc ARP Inspection, không phải Proxy ARP. C. A protocol used to assign multiple MAC addresses to a single virtual IP address for load balancing: Đây là cơ chế thường thấy trong các giao thức dự phòng như HSRP/VRRP, không phải Proxy ARP. D. A method where a host sends an ARP request for its own IP address to detect IP conflicts: Đây là định nghĩa của Gratuitous ARP, dùng để kiểm tra trùng lặp IP."
      },
      {
        "id": "net200-q18",
        "num": 18,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is Reverse ARP (RARP)?",
        "questionVi": "Reverse ARP (RARP) là gì?",
        "options": [
          {
            "key": "A",
            "text": "A protocol that allows a router to find the MAC address of a device on a remote network segment"
          },
          {
            "key": "B",
            "text": "A legacy protocol used by a diskless device to obtain its IPv4 address when only its MAC address is known"
          },
          {
            "key": "C",
            "text": "A protocol used to map an IPv6 address back to a legacy IPv4 address for compatibility"
          },
          {
            "key": "D",
            "text": "A modern replacement for DHCP that provides faster IP address assignment for IoT devices"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "A legacy protocol used by a diskless device to obtain its IPv4 address when only its MAC address is known",
        "explainRight": "Ngược với ARP: thiết bị đã biết mã phần cứng MAC của mình và hỏi mạng xem IP của mình là gì. (Đáp án đầy đủ: A legacy protocol used by a diskless device to obtain its IPv4 address when only its MAC address is known.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A protocol that allows a router to find the MAC address of a device on a remote network segment: Việc tìm MAC ở mạng từ xa thường do Router xử lý qua định tuyến thông thường, không phải RARP. C. A protocol used to map an IPv6 address back to a legacy IPv4 address for compatibility: Việc chuyển đổi IPv6 sang IPv4 sử dụng các cơ chế tunneling hoặc NAT64, không liên quan đến RARP. D. A modern replacement for DHCP that provides faster IP address assignment for IoT devices: RARP là giao thức cũ (legacy) và đã bị thay thế bởi BOOTP/DHCP, không phải là công nghệ hiện đại cho IoT."
      },
      {
        "id": "net200-q19",
        "num": 19,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is Inverse ARP (InARP)?",
        "questionVi": "Inverse ARP (InARP) là gì?",
        "options": [
          {
            "key": "A",
            "text": "A protocol that dynamically maps local Data Link Connection Identifiers (DLCIs) to remote IP addresses in Frame Relay networks"
          },
          {
            "key": "B",
            "text": "A protocol used in Ethernet networks to find a hostname when only the IP address is known"
          },
          {
            "key": "C",
            "text": "A security mechanism that reverses ARP entries to identify the source of an ARP spoofing attack"
          },
          {
            "key": "D",
            "text": "A protocol that allows a client to request its subnet mask from a default gateway"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A protocol that dynamically maps local Data Link Connection Identifiers (DLCIs) to remote IP addresses in Frame Relay networks",
        "explainRight": "Dùng trong mạng kết nối ảo Frame Relay để tự tìm ra địa chỉ IP của đầu bên kia thông qua mã kênh ảo có sẵn. (Đáp án đầy đủ: A protocol that dynamically maps local Data Link Connection Identifiers (DLCIs) to remote IP addresses in Frame Relay networks.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A protocol used in Ethernet networks to find a hostname when only the IP address is known: Việc tìm hostname từ IP là chức năng Reverse DNS, không phải Inverse ARP. C. A security mechanism that reverses ARP entries to identify the source of an ARP spoofing attack: Không có cơ chế bảo mật nào tên là Inverse ARP dùng để truy vết tấn công spoofing theo cách này. D. A protocol that allows a client to request its subnet mask from a default gateway: Việc lấy subnet mask thường thông qua ICMP Address Mask Request hoặc DHCP, không phải InARP."
      },
      {
        "id": "net200-q20",
        "num": 20,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is TCP (Transmission Control Protocol)?",
        "questionVi": "TCP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A connectionless Transport layer protocol that prioritizes speed and low overhead over reliability"
          },
          {
            "key": "B",
            "text": "An Application layer protocol used primarily for secure remote management of network devices"
          },
          {
            "key": "C",
            "text": "A Network layer protocol responsible for logical addressing and routing packets across multiple networks"
          },
          {
            "key": "D",
            "text": "A connection-oriented Transport layer protocol ensuring reliable, ordered, error-checked end-to-end delivery between client and server"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "A connection-oriented Transport layer protocol ensuring reliable, ordered, error-checked end-to-end delivery between client and server",
        "explainRight": "Giao thức vận chuyển đáng tin cậy, đảm bảo dữ liệu tới đủ, đúng thứ tự và tự gửi lại nếu thất lạc. (Đáp án đầy đủ: A connection-oriented Transport layer protocol ensuring reliable, ordered, error-checked end-to-end delivery between client and server.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A connectionless Transport layer protocol that prioritizes speed and low overhead over reliability: Đây là đặc điểm của UDP (User Datagram Protocol), trái ngược hoàn toàn với TCP. B. An Application layer protocol used primarily for secure remote management of network devices: Đây là mô tả của các giao thức như SSH, không phải giao thức vận chuyển TCP. C. A Network layer protocol responsible for logical addressing and routing packets across multiple networks: Đây là mô tả của giao thức IP (Internet Protocol) ở tầng Network."
      },
      {
        "id": "net200-q21",
        "num": 21,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "Explain the TCP Three-Way Handshake process?",
        "questionVi": "Giải thích quá trình bắt tay ba bước (Three-Way Handshake) của TCP?",
        "options": [
          {
            "key": "A",
            "text": "1. Client sends SYN; 2. Server replies with ACK; 3. Client confirms with SYN-ACK to establish full-duplex"
          },
          {
            "key": "B",
            "text": "1. Client sends SYN; 2. Server replies with SYN-ACK; 3. Client confirms with ACK before user data transfer begins"
          },
          {
            "key": "C",
            "text": "1. Client sends DATA; 2. Server replies with ACK; 3. Client sends FIN to close the initial handshake"
          },
          {
            "key": "D",
            "text": "1. Client sends SYN-ACK; 2. Server replies with SYN; 3. Client confirms with ACK for sequence alignment"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "1. Client sends SYN; 2. Server replies with SYN-ACK; 3. Client confirms with ACK before user data transfer begins",
        "explainRight": "Ba bước chào xác nhận kết nối hai chiều trước khi chính thức truyền dữ liệu. (Đáp án đầy đủ: 1. Client sends SYN; 2. Server replies with SYN-ACK; 3. Client confirms with ACK before user data transfer begins.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Client sends SYN; 2. Server replies with ACK; 3. Client confirms with SYN-ACK to establish full-duplex: Sai thứ tự vì Server phải gửi cả SYN và ACK cùng lúc trong bước thứ hai thay vì chỉ gửi ACK. C. 1. Client sends DATA; 2. Server replies with ACK; 3. Client sends FIN to close the initial handshake: Sai bản chất vì dữ liệu (DATA) chỉ được truyền sau khi quá trình bắt tay hoàn tất, không phải bước khởi đầu. D. 1. Client sends SYN-ACK; 2. Server replies with SYN; 3. Client confirms with ACK for sequence alignment: Sai quy trình vì Client luôn bắt đầu bằng gói SYN đơn thuần, không phải SYN-ACK."
      },
      {
        "id": "net200-q22",
        "num": 22,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the purpose of the TCP RST bit?",
        "questionVi": "Mục đích của cờ RST trong TCP là gì?",
        "options": [
          {
            "key": "A",
            "text": "Immediately resets/aborts a TCP connection when a port is closed, not allowed, or an unexpected segment arrives"
          },
          {
            "key": "B",
            "text": "Gracefully terminates a TCP session by ensuring all buffered data is delivered before closing"
          },
          {
            "key": "C",
            "text": "Requests the sender to slow down the transmission rate due to network congestion"
          },
          {
            "key": "D",
            "text": "Synchronizes the sequence numbers between the client and server during the initial handshake"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Immediately resets/aborts a TCP connection when a port is closed, not allowed, or an unexpected segment arrives",
        "explainRight": "Tín hiệu ngắt kết nối khẩn cấp khi phía nhận từ chối hoặc phát hiện lỗi phiên truyền. (Đáp án đầy đủ: Immediately resets/aborts a TCP connection when a port is closed, not allowed, or an unexpected segment arrives.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Gracefully terminates a TCP session by ensuring all buffered data is delivered before closing: Đây là chức năng của cờ FIN để đóng kết nối một cách tuần tự, không phải ngắt khẩn cấp như RST. C. Requests the sender to slow down the transmission rate due to network congestion: Việc điều chỉnh tốc độ truyền dẫn là cơ chế Flow Control (Windowing), không phải chức năng của cờ RST. D. Synchronizes the sequence numbers between the client and server during the initial handshake: Đây là chức năng của cờ SYN dùng để đồng bộ hóa số thứ tự khi bắt đầu kết nối."
      },
      {
        "id": "net200-q23",
        "num": 23,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What are the six TCP control flags?",
        "questionVi": "Sáu cờ điều khiển của TCP là gì?",
        "options": [
          {
            "key": "A",
            "text": "SYN, ACK, FIN, RST, TTL (time to live), and WIN (window size) for flow control management"
          },
          {
            "key": "B",
            "text": "PSH (push buffered data immediately), RST (reset connection), FIN (finish session cleanly), URG (urgent data), ACK (acknowledge received bytes), and SYN (synchronize sequence numbers)"
          },
          {
            "key": "C",
            "text": "SYN, ACK, FIN, RST, PSH, and ECN (explicit congestion notification) for routing priority"
          },
          {
            "key": "D",
            "text": "PSH, RST, FIN, URG, ACK, and SEQ (sequence number) to track byte order and delivery"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "PSH (push buffered data immediately), RST (reset connection), FIN (finish session cleanly), URG (urgent data), ACK (acknowledge received bytes), and SYN (synchronize sequence numbers)",
        "explainRight": "Các bit tín hiệu điều khiển việc mở phiên, xác nhận nhận hàng, ưu tiên dữ liệu và đóng phiên. (Đáp án đầy đủ: PSH (push buffered data immediately), RST (reset connection), FIN (finish session cleanly), URG (urgent data), ACK (acknowledge received bytes), and SYN (synchronize sequence numbers).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. SYN, ACK, FIN, RST, TTL (time to live), and WIN (window size) for flow control management: TTL và WIN là các trường (fields) trong header IP/TCP chứ không phải là các cờ điều khiển (control flags). C. SYN, ACK, FIN, RST, PSH, and ECN (explicit congestion notification) for routing priority: ECN là một cơ chế mở rộng thông báo tắc nghẽn, không thuộc nhóm 6 cờ điều khiển cơ bản truyền thống của TCP. D. PSH, RST, FIN, URG, ACK, and SEQ (sequence number) to track byte order and delivery: SEQ (Sequence Number) là một trường dữ liệu 32-bit trong TCP header, không phải là một bit cờ điều khiển."
      },
      {
        "id": "net200-q24",
        "num": 24,
        "section": "Phần 1: Nền Tảng Mạng, TCP/IP, ARP & TCP (Câu 1–24)",
        "questionEn": "What is the importance of Sequence Number and Acknowledgement Number in TCP?",
        "questionVi": "Tầm quan trọng của Sequence Number và Acknowledgement Number là gì?",
        "options": [
          {
            "key": "A",
            "text": "Sequence Number identifies the application port, while Acknowledgement Number identifies the IP address of the sender"
          },
          {
            "key": "B",
            "text": "Sequence Number determines the transmission speed, while Acknowledgement Number limits the window size for flow control"
          },
          {
            "key": "C",
            "text": "Sequence Number counts the total number of hops, while Acknowledgement Number calculates the checksum for error detection"
          },
          {
            "key": "D",
            "text": "The 32-bit Sequence Number tracks sent byte order, while the Acknowledgement Number confirms receipt and specifies the next expected byte"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "The 32-bit Sequence Number tracks sent byte order, while the Acknowledgement Number confirms receipt and specifies the next expected byte",
        "explainRight": "Giống đánh số trang sách và báo lại đã nhận tới trang nào để ráp dữ liệu chính xác và phát hiện gói mất. (Đáp án đầy đủ: The 32-bit Sequence Number tracks sent byte order, while the Acknowledgement Number confirms receipt and specifies the next expected byte.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Sequence Number identifies the application port, while Acknowledgement Number identifies the IP address of the sender: Việc định danh ứng dụng và địa chỉ IP thuộc về các trường Port và IP address, không liên quan đến Sequence/ACK. B. Sequence Number determines the transmission speed, while Acknowledgement Number limits the window size for flow control: Tốc độ và Window size được điều khiển bởi trường Window, không phải do số thứ tự Sequence quyết định. C. Sequence Number counts the total number of hops, while Acknowledgement Number calculates the checksum for error detection: Số bước nhảy là TTL trong IP header và Checksum là trường riêng biệt để kiểm tra lỗi, không phải chức năng của Sequence/ACK."
      },
      {
        "id": "net200-q25",
        "num": 25,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "Where can a Cisco router IOS image be stored?",
        "questionVi": "File hệ điều hành IOS của router có thể lưu ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Only on a physical SD card inserted into the router's external management slot"
          },
          {
            "key": "B",
            "text": "In local Flash memory or on a remote TFTP server (with POST, bootstrap, and mini-IOS stored in ROM)"
          },
          {
            "key": "C",
            "text": "Inside the RAM during the boot process to allow for high-speed execution of routing protocols"
          },
          {
            "key": "D",
            "text": "Exclusively in NVRAM to ensure the operating system is not lost during a power failure"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "In local Flash memory or on a remote TFTP server (with POST, bootstrap, and mini-IOS stored in ROM)",
        "explainRight": "Nằm trong bộ nhớ Flash trên router hoặc lưu dự phòng trên máy chủ tệp TFTP qua mạng. (Đáp án đầy đủ: In local Flash memory or on a remote TFTP server (with POST, bootstrap, and mini-IOS stored in ROM).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Only on a physical SD card inserted into the router's external management slot: IOS có thể lưu ở Flash hoặc TFTP, không bắt buộc chỉ lưu duy nhất trên thẻ nhớ SD ngoài. C. Inside the RAM during the boot process to allow for high-speed execution of routing protocols: RAM là nơi IOS chạy sau khi nạp, nhưng không phải là nơi lưu trữ lâu dài (permanent storage) vì RAM sẽ mất dữ liệu khi tắt nguồn. D. Exclusively in NVRAM to ensure the operating system is not lost during a power failure: NVRAM chỉ dùng để lưu file cấu hình (startup-config), dung lượng quá nhỏ để chứa file IOS."
      },
      {
        "id": "net200-q26",
        "num": 26,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What are the three main CLI modes on a Cisco router?",
        "questionVi": "Ba chế độ dòng lệnh chính trên router là gì?",
        "options": [
          {
            "key": "A",
            "text": "User EXEC mode (Router>) for basic monitoring; Privileged EXEC mode (Router#) for troubleshooting and file management; Global Configuration mode (Router(config)#) for device-wide configuration"
          },
          {
            "key": "B",
            "text": "Read-Only mode for viewing; Write-Only mode for saving; and Admin mode for password recovery"
          },
          {
            "key": "C",
            "text": "Setup mode for initial boot; Interface mode for IP assignment; and Line mode for console access"
          },
          {
            "key": "D",
            "text": "Standard mode for users; Expert mode for engineers; and Root mode for system kernel changes"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "User EXEC mode (Router>) for basic monitoring; Privileged EXEC mode (Router#) for troubleshooting and file management; Global Configuration mode (Router(config)#) for device-wide configuration",
        "explainRight": "Chia 3 cấp quyền từ xem cơ bản, kiểm tra quản trị cho tới thay đổi cấu hình toàn hệ thống. (Đáp án đầy đủ: User EXEC mode (Router>) for basic monitoring; Privileged EXEC mode (Router#) for troubleshooting and file management; Global Configuration mode (Router(config)#) for device-wide configuration.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Read-Only mode for viewing; Write-Only mode for saving; and Admin mode for password recovery: Cisco không sử dụng các tên gọi Read-Only hay Write-Only cho các chế độ CLI chính thức. C. Setup mode for initial boot; Interface mode for IP assignment; and Line mode for console access: Đây là các chế độ phụ hoặc đặc thù, không phải là 3 chế độ phân cấp chính (User, Privileged, Global) của IOS. D. Standard mode for users; Expert mode for engineers; and Root mode for system kernel changes: Các thuật ngữ Expert hay Root thuộc về hệ điều hành Linux/Unix, không phải cấu trúc phân quyền chuẩn của Cisco IOS."
      },
      {
        "id": "net200-q27",
        "num": 27,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What command reboots a Cisco router?",
        "questionVi": "Lệnh khởi động lại router là gì?",
        "options": [
          {
            "key": "A",
            "text": "(config)#reboot"
          },
          {
            "key": "B",
            "text": "#reload (in Privileged EXEC mode)"
          },
          {
            "key": "C",
            "text": ">reset"
          },
          {
            "key": "D",
            "text": "#restart system"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "#reload (in Privileged EXEC mode)",
        "explainRight": "Khởi động lại toàn bộ thiết bị router từ chế độ đặc quyền. (Đáp án đầy đủ: #reload (in Privileged EXEC mode).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. (config)#reboot: Lệnh reboot không tồn tại trong chế độ Global Configuration của Cisco IOS. C. >reset: Dấu '>' chỉ User EXEC mode, nơi không có quyền thực hiện lệnh reset/khởi động lại hệ thống. D. #restart system: Cisco IOS không sử dụng lệnh 'restart system' để khởi động lại thiết bị."
      },
      {
        "id": "net200-q28",
        "num": 28,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What command backs up the IOS image to a TFTP server?",
        "questionVi": "Lệnh sao lưu IOS sang TFTP server là gì?",
        "options": [
          {
            "key": "A",
            "text": "#backup flash to tftp"
          },
          {
            "key": "B",
            "text": "#copy flash tftp"
          },
          {
            "key": "C",
            "text": "#transfer flash tftp"
          },
          {
            "key": "D",
            "text": "#move ios tftp-server"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "#copy flash tftp",
        "explainRight": "Chép file hệ điều hành từ bộ nhớ Flash đẩy sang máy chủ TFTP để dự phòng. (Đáp án đầy đủ: #copy flash tftp)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. #backup flash to tftp: 'backup' không phải là từ khóa lệnh hợp lệ trong CLI của Cisco để thực hiện việc sao chép file. C. #transfer flash tftp: Lệnh 'transfer' không tồn tại trong bộ lệnh copy chuẩn của Cisco IOS. D. #move ios tftp-server: Lệnh 'move' không được sử dụng để sao lưu file hệ điều hành sang server trong Cisco IOS."
      },
      {
        "id": "net200-q29",
        "num": 29,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What command saves the active configuration to non-volatile memory?",
        "questionVi": "Lệnh lưu cấu hình đang chạy vào cấu hình khởi động là gì?",
        "options": [
          {
            "key": "A",
            "text": "#save configuration"
          },
          {
            "key": "B",
            "text": "#write memory to nvram"
          },
          {
            "key": "C",
            "text": "#copy startup-config running-config"
          },
          {
            "key": "D",
            "text": "#copy running-config startup-config"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "#copy running-config startup-config",
        "explainRight": "Lưu các thay đổi từ RAM vào NVRAM để không bị mất khi tắt nguồn hoặc khởi động lại. (Đáp án đầy đủ: #copy running-config startup-config)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. #save configuration: Lệnh 'save' không phải là lệnh chuẩn trên Cisco IOS (dù 'write' có thể dùng nhưng 'save' thì không). B. #write memory to nvram: Cú pháp 'write memory to nvram' không đúng định dạng lệnh CLI của Cisco. C. #copy startup-config running-config: Lệnh này bị ngược, nó sẽ ghi đè cấu hình đang chạy bằng cấu hình cũ trong NVRAM, làm mất các thay đổi vừa thực hiện."
      },
      {
        "id": "net200-q30",
        "num": 30,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "Define static routing and list its advantages and disadvantages?",
        "questionVi": "Định nghĩa định tuyến tĩnh cùng ưu và nhược điểm?",
        "options": [
          {
            "key": "A",
            "text": "Routes learned automatically via protocols like OSPF. Advantages: Scalable, dynamic. Disadvantages: High CPU usage and complex configuration"
          },
          {
            "key": "B",
            "text": "Routes based on the shortest path to the destination. Advantages: Low latency. Disadvantages: Requires constant updates from neighboring routers"
          },
          {
            "key": "C",
            "text": "Routes manually configured by an administrator. Advantages: Secure, reliable, fast, zero bandwidth overhead. Disadvantages: No automatic updates, manual destination configuration, high admin workload, suited only for small networks"
          },
          {
            "key": "D",
            "text": "Routes that use a default gateway for all traffic. Advantages: Simple setup. Disadvantages: Causes routing loops in large enterprise environments"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Routes manually configured by an administrator. Advantages: Secure, reliable, fast, zero bandwidth overhead. Disadvantages: No automatic updates, manual destination configuration, high admin workload, suited only for small networks",
        "explainRight": "Đường đi cố định do người quản trị nhập tay: chạy nhẹ và an toàn nhưng khó quản lý khi mạng lớn hoặc thay đổi. (Đáp án đầy đủ: Routes manually configured by an administrator. Advantages: Secure, reliable, fast, zero bandwidth overhead. Disadvantages: No automatic updates, manual destination configuration, high admin workload, suited only for small networks.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Routes learned automatically via protocols like OSPF. Advantages: Scalable, dynamic. Disadvantages: High CPU usage and complex configuration: Đây là định nghĩa của định tuyến động (Dynamic Routing), không phải định tuyến tĩnh. B. Routes based on the shortest path to the destination. Advantages: Low latency. Disadvantages: Requires constant updates from neighboring routers: Việc tính toán đường đi ngắn nhất và cập nhật từ láng giềng là đặc điểm của giao thức định tuyến động (như Distance Vector/Link State). D. Routes that use a default gateway for all traffic. Advantages: Simple setup. Disadvantages: Causes routing loops in large enterprise environments: Đây là định nghĩa của Default Route, một trường hợp đặc biệt của định tuyến tĩnh nhưng không bao quát toàn bộ khái niệm định tuyến tĩnh."
      },
      {
        "id": "net200-q31",
        "num": 31,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is a default route?",
        "questionVi": "Tuyến đường mặc định (default route) là gì?",
        "options": [
          {
            "key": "A",
            "text": "A backup route that only becomes active when the primary static route interface goes down"
          },
          {
            "key": "B",
            "text": "A dynamic route learned via OSPF that has the lowest cost to reach the core switch"
          },
          {
            "key": "C",
            "text": "A catch-all route (0.0.0.0/0) specifying where to send packets whose destination network is not explicitly listed in the routing table"
          },
          {
            "key": "D",
            "text": "A route manually configured to point to a specific internal subnet within the local area network"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A catch-all route (0.0.0.0/0) specifying where to send packets whose destination network is not explicitly listed in the routing table",
        "explainRight": "Lối thoát mặc định cho mọi địa chỉ lạ chưa có trong bảng định tuyến, thường trỏ ra Internet. (Đáp án đầy đủ: A catch-all route (0.0.0.0/0) specifying where to send packets whose destination network is not explicitly listed in the routing table.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A backup route that only becomes active when the primary static route interface goes down: Đây là mô tả của Floating Static Route, được sử dụng để dự phòng chứ không phải là tuyến đường 'catch-all'. B. A dynamic route learned via OSPF that has the lowest cost to reach the core switch: OSPF có thể quảng bá default route nhưng bản thân định nghĩa default route không giới hạn ở giao thức OSPF hay chi phí thấp nhất. D. A route manually configured to point to a specific internal subnet within the local area network: Đây là mô tả của một static route thông thường cho một mạng cụ thể, không phải tuyến đường mặc định cho mọi đích đến."
      },
      {
        "id": "net200-q32",
        "num": 32,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is dynamic routing?",
        "questionVi": "Định tuyến động là gì?",
        "options": [
          {
            "key": "A",
            "text": "A process that uses ARP requests to map MAC addresses to IP addresses for packet forwarding"
          },
          {
            "key": "B",
            "text": "A method where routes are hardcoded and do not change even if a network link fails"
          },
          {
            "key": "C",
            "text": "Automatic route discovery and updating between neighboring routers running a common routing protocol such as OSPF, EIGRP, or BGP"
          },
          {
            "key": "D",
            "text": "The manual process of entering IP addresses into the routing table by a network administrator"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Automatic route discovery and updating between neighboring routers running a common routing protocol such as OSPF, EIGRP, or BGP",
        "explainRight": "Các router tự trao đổi thông tin và tự tìm đường vòng mới khi có sự cố đứt cáp. (Đáp án đầy đủ: Automatic route discovery and updating between neighboring routers running a common routing protocol such as OSPF, EIGRP, or BGP.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A process that uses ARP requests to map MAC addresses to IP addresses for packet forwarding: Đây là chức năng của giao thức ARP ở lớp 2, không phải là cơ chế tìm đường của giao thức định tuyến ở lớp 3. B. A method where routes are hardcoded and do not change even if a network link fails: Định tuyến động có khả năng thay đổi khi link hỏng; việc giữ nguyên đường đi bất chấp sự cố là đặc điểm của định tuyến tĩnh không có cơ chế dự phòng. D. The manual process of entering IP addresses into the routing table by a network administrator: Đây là định nghĩa của định tuyến tĩnh (static routing), đòi hỏi sự can thiệp thủ công của quản trị viên."
      },
      {
        "id": "net200-q33",
        "num": 33,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is an Interior Gateway Protocol (IGP)?",
        "questionVi": "IGP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A security protocol used to encrypt traffic between two different corporate data centers"
          },
          {
            "key": "B",
            "text": "A protocol that only manages traffic between a local host and its default gateway"
          },
          {
            "key": "C",
            "text": "A routing protocol operating within a single Autonomous System (e.g., RIP, EIGRP, OSPF)"
          },
          {
            "key": "D",
            "text": "A protocol used exclusively to connect different Internet Service Providers (ISPs) globally"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A routing protocol operating within a single Autonomous System (e.g., RIP, EIGRP, OSPF)",
        "explainRight": "Giao thức định tuyến nội bộ trong phạm vi một công ty hoặc một nhà mạng. (Đáp án đầy đủ: A routing protocol operating within a single Autonomous System (e.g., RIP, EIGRP, OSPF).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A security protocol used to encrypt traffic between two different corporate data centers: IGP là giao thức định tuyến, không phải giao thức bảo mật hay mã hóa dữ liệu. B. A protocol that only manages traffic between a local host and its default gateway: Việc quản lý lưu lượng giữa host và gateway thường do các giao thức như ICMP hoặc ARP hỗ trợ, không phải phạm vi của IGP. D. A protocol used exclusively to connect different Internet Service Providers (ISPs) globally: Việc kết nối giữa các ISP khác nhau là nhiệm vụ của EGP (như BGP), không phải IGP."
      },
      {
        "id": "net200-q34",
        "num": 34,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is an Exterior Gateway Protocol (EGP)?",
        "questionVi": "EGP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A protocol that calculates the shortest path based solely on the hop count inside an office"
          },
          {
            "key": "B",
            "text": "A routing protocol handling routing between different Autonomous Systems (e.g., BGP)"
          },
          {
            "key": "C",
            "text": "A protocol used to exchange routing information within a single local area network (LAN)"
          },
          {
            "key": "D",
            "text": "A protocol designed to manage internal VLAN routing on a Layer 3 switch"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "A routing protocol handling routing between different Autonomous Systems (e.g., BGP)",
        "explainRight": "Giao thức kết nối và trao đổi đường đi giữa các tổ chức, nhà cung cấp Internet (ISP) khác nhau. (Đáp án đầy đủ: A routing protocol handling routing between different Autonomous Systems (e.g., BGP).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A protocol that calculates the shortest path based solely on the hop count inside an office: Tính toán dựa trên hop count trong văn phòng thường là đặc điểm của RIP (một IGP), không phải EGP. C. A protocol used to exchange routing information within a single local area network (LAN): Trao đổi thông tin trong nội bộ LAN hoặc một hệ thống mạng đơn lẻ là vai trò của IGP. D. A protocol designed to manage internal VLAN routing on a Layer 3 switch: Quản lý định tuyến giữa các VLAN nội bộ là nhiệm vụ của Inter-VLAN routing hoặc IGP, không phải EGP."
      },
      {
        "id": "net200-q35",
        "num": 35,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is an Autonomous System (AS)?",
        "questionVi": "Autonomous System (AS) là gì?",
        "options": [
          {
            "key": "A",
            "text": "A software feature that allows a router to operate without any manual configuration"
          },
          {
            "key": "B",
            "text": "A collection of devices connected to the same physical switch in a small office"
          },
          {
            "key": "C",
            "text": "A single high-performance router that automatically handles all Internet traffic for a country"
          },
          {
            "key": "D",
            "text": "A group of IP networks and routers under a single administrative control sharing a unified routing policy"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "A group of IP networks and routers under a single administrative control sharing a unified routing policy",
        "explainRight": "Một hệ thống mạng lớn thuộc quyền quản lý thống nhất của một đơn vị duy nhất. (Đáp án đầy đủ: A group of IP networks and routers under a single administrative control sharing a unified routing policy.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A software feature that allows a router to operate without any manual configuration: AS là một đơn vị quản trị mạng, không phải là một tính năng phần mềm tự động hóa. B. A collection of devices connected to the same physical switch in a small office: Các thiết bị cùng cắm vào một switch thường chỉ tạo thành một phân đoạn mạng (segment) hoặc VLAN, không đủ quy mô để gọi là AS. C. A single high-performance router that automatically handles all Internet traffic for a country: AS là một hệ thống mạng gồm nhiều router và mạng con, không phải là một thiết bị phần cứng đơn lẻ."
      },
      {
        "id": "net200-q36",
        "num": 36,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is Administrative Distance (AD) and its range?",
        "questionVi": "Administrative Distance (AD) là gì và dải giá trị của nó?",
        "options": [
          {
            "key": "A",
            "text": "A measurement of physical cable length between two routers ranging from 1 to 1000 meters"
          },
          {
            "key": "B",
            "text": "A metric used by OSPF to calculate the bandwidth of a link, ranging from 0 to 100"
          },
          {
            "key": "C",
            "text": "A value from 1 to 65535 used to identify different BGP processes in a network"
          },
          {
            "key": "D",
            "text": "A trustworthiness metric from 0 (most trusted) to 255 (untrusted/never used) used to select the preferred routing source when multiple protocols learn the same route"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "A trustworthiness metric from 0 (most trusted) to 255 (untrusted/never used) used to select the preferred routing source when multiple protocols learn the same route",
        "explainRight": "Thang điểm độ tin cậy (số càng nhỏ càng ưu tiên) khi nhiều giao thức cùng chỉ đường tới một đích. (Đáp án đầy đủ: A trustworthiness metric from 0 (most trusted) to 255 (untrusted/never used) used to select the preferred routing source when multiple protocols learn the same route.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A measurement of physical cable length between two routers ranging from 1 to 1000 meters: AD là giá trị logic về độ tin cậy, không liên quan đến chiều dài vật lý của cáp. B. A metric used by OSPF to calculate the bandwidth of a link, ranging from 0 to 100: OSPF sử dụng Cost làm metric dựa trên băng thông, còn AD là để so sánh giữa các giao thức khác nhau. C. A value from 1 to 65535 used to identify different BGP processes in a network: Dải giá trị 1-65535 thường liên quan đến số hiệu AS hoặc Port, không phải dải giá trị của AD."
      },
      {
        "id": "net200-q37",
        "num": 37,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "List the standard Administrative Distance values for common route sources?",
        "questionVi": "Liệt kê các giá trị AD chuẩn của các nguồn định tuyến phổ biến?",
        "options": [
          {
            "key": "A",
            "text": "Connected (0), Static (1), EIGRP Summary (5), eBGP (20), Internal EIGRP (90), OSPF (110), RIP (120), External EIGRP (170), iBGP (200)"
          },
          {
            "key": "B",
            "text": "Connected (1), Static (0), OSPF (90), EIGRP (110), RIP (150), BGP (255)"
          },
          {
            "key": "C",
            "text": "Connected (0), Static (5), OSPF (10), EIGRP (20), RIP (30), BGP (40)"
          },
          {
            "key": "D",
            "text": "Connected (10), Static (20), EIGRP (90), OSPF (110), RIP (120), BGP (170)"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Connected (0), Static (1), EIGRP Summary (5), eBGP (20), Internal EIGRP (90), OSPF (110), RIP (120), External EIGRP (170), iBGP (200)",
        "explainRight": "Tuyến cắm trực tiếp (0) và tuyến tĩnh (1) đáng tin nhất; trong các giao thức động phổ biến, EIGRP (90) ưu tiên hơn OSPF (110) và RIP (120). (Đáp án đầy đủ: Connected (0), Static (1), EIGRP Summary (5), eBGP (20), Internal EIGRP (90), OSPF (110), RIP (120), External EIGRP (170), iBGP (200).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Connected (1), Static (0), OSPF (90), EIGRP (110), RIP (150), BGP (255): Giá trị Connected luôn là 0 và Static là 1; OSPF và EIGRP bị hoán đổi giá trị chuẩn trong phương án này. C. Connected (0), Static (5), OSPF (10), EIGRP (20), RIP (30), BGP (40): Các giá trị này hoàn toàn sai lệch so với tiêu chuẩn của Cisco (ví dụ Static là 1, OSPF là 110). D. Connected (10), Static (20), EIGRP (90), OSPF (110), RIP (120), BGP (170): Giá trị Connected và Static bị đẩy lên quá cao; thông thường chúng phải là những giá trị nhỏ nhất (đáng tin nhất)."
      },
      {
        "id": "net200-q38",
        "num": 38,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is a Distance-Vector routing protocol?",
        "questionVi": "Distance-Vector routing protocol là gì?",
        "options": [
          {
            "key": "A",
            "text": "A protocol that uses the Dijkstra algorithm to calculate the shortest path to every node"
          },
          {
            "key": "B",
            "text": "A protocol that maintains a complete map of the entire network topology before making decisions"
          },
          {
            "key": "C",
            "text": "A protocol that only sends updates when a specific link state change is detected in the area"
          },
          {
            "key": "D",
            "text": "A routing protocol that determines paths based on distance (such as hop count) and direction advertised by directly connected neighbors (e.g., RIP)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "A routing protocol that determines paths based on distance (such as hop count) and direction advertised by directly connected neighbors (e.g., RIP)",
        "explainRight": "Router chọn đường dựa trên thông tin khoảng cách do hàng xóm báo lại mà không có bản đồ toàn mạng. (Đáp án đầy đủ: A routing protocol that determines paths based on distance (such as hop count) and direction advertised by directly connected neighbors (e.g., RIP).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A protocol that uses the Dijkstra algorithm to calculate the shortest path to every node: Thuật toán Dijkstra (SPF) được sử dụng bởi các giao thức Link-State như OSPF. B. A protocol that maintains a complete map of the entire network topology before making decisions: Việc duy trì bản đồ toàn mạng (topology map) là đặc điểm của Link-State, không phải Distance-Vector. C. A protocol that only sends updates when a specific link state change is detected in the area: Gửi cập nhật khi có thay đổi (triggered updates) dựa trên trạng thái liên kết là cơ chế chính của Link-State."
      },
      {
        "id": "net200-q39",
        "num": 39,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is a Link-State routing protocol?",
        "questionVi": "Link-State routing protocol là gì?",
        "options": [
          {
            "key": "A",
            "text": "A protocol that periodically broadcasts its entire routing table to all physical interfaces"
          },
          {
            "key": "B",
            "text": "A protocol that uses hop count as the primary metric and has a maximum limit of 15 hops"
          },
          {
            "key": "C",
            "text": "A routing protocol where every router shares link status with all routers in the area to build a complete topology map and compute the shortest path (e.g., OSPF)"
          },
          {
            "key": "D",
            "text": "A protocol that only knows the distance and direction to a destination based on neighbor reports"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A routing protocol where every router shares link status with all routers in the area to build a complete topology map and compute the shortest path (e.g., OSPF)",
        "explainRight": "Mọi router đều có cùng một tấm bản đồ chi tiết toàn khu vực nên tự tính toán đường ngắn nhất. (Đáp án đầy đủ: A routing protocol where every router shares link status with all routers in the area to build a complete topology map and compute the shortest path (e.g., OSPF).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A protocol that periodically broadcasts its entire routing table to all physical interfaces: Việc gửi toàn bộ bảng định tuyến định kỳ là hành vi của các giao thức Distance-Vector cũ như RIPv1. B. A protocol that uses hop count as the primary metric and has a maximum limit of 15 hops: Sử dụng hop count và giới hạn 15 hop là đặc thù của RIP (Distance-Vector). D. A protocol that only knows the distance and direction to a destination based on neighbor reports: Đây là đặc điểm 'routing by rumor' của Distance-Vector, nơi router chỉ biết thông tin qua lời kể của hàng xóm."
      },
      {
        "id": "net200-q40",
        "num": 40,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is a Hybrid routing protocol?",
        "questionVi": "Hybrid routing protocol là gì?",
        "options": [
          {
            "key": "A",
            "text": "A protocol that requires a mix of hardware from different vendors like Cisco and Juniper to operate"
          },
          {
            "key": "B",
            "text": "A protocol that switches between Static and Dynamic routing based on the time of day"
          },
          {
            "key": "C",
            "text": "A protocol combining features of both Distance-Vector and Link-State protocols (e.g., EIGRP)"
          },
          {
            "key": "D",
            "text": "A protocol that can only function if both IPv4 and IPv6 are enabled on the interface"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A protocol combining features of both Distance-Vector and Link-State protocols (e.g., EIGRP)",
        "explainRight": "Giao thức lai kết hợp sự gọn nhẹ của Distance-Vector với tốc độ hội tụ nhanh của Link-State. (Đáp án đầy đủ: A protocol combining features of both Distance-Vector and Link-State protocols (e.g., EIGRP).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A protocol that requires a mix of hardware from different vendors like Cisco and Juniper to operate: Tính chất Hybrid không liên quan đến việc trộn lẫn thiết bị phần cứng của các hãng khác nhau. B. A protocol that switches between Static and Dynamic routing based on the time of day: Định tuyến không tự động chuyển đổi giữa Static và Dynamic dựa trên thời gian; đây là một khái niệm sai lệch. D. A protocol that can only function if both IPv4 and IPv6 are enabled on the interface: Hybrid ở đây nói về cơ chế hoạt động của giao thức, không liên quan đến việc chạy song song IPv4/IPv6 (Dual Stack)."
      },
      {
        "id": "net200-q41",
        "num": 41,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is a Routing Metric and what metrics do RIP, OSPF, and EIGRP use?",
        "questionVi": "Routing Metric là gì và RIP, OSPF, EIGRP dùng tham số nào?",
        "options": [
          {
            "key": "A",
            "text": "A numerical value used to pick the best route within a protocol: RIP uses Hop Count; OSPF uses Cost; EIGRP uses Bandwidth, Delay, Reliability, Load, and MTU"
          },
          {
            "key": "B",
            "text": "A layer 2 identifier for frame forwarding: RIP uses AS Path; OSPF uses Area ID; EIGRP uses Process ID"
          },
          {
            "key": "C",
            "text": "A priority value used to select between different protocols: RIP uses Cost; OSPF uses Hop Count; EIGRP uses Bandwidth and Delay only"
          },
          {
            "key": "D",
            "text": "A security metric for path encryption: RIP uses MD5; OSPF uses SHA-256; EIGRP uses IPsec"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A numerical value used to pick the best route within a protocol: RIP uses Hop Count; OSPF uses Cost; EIGRP uses Bandwidth, Delay, Reliability, Load, and MTU",
        "explainRight": "Thước đo chất lượng con đường để chọn tuyến tối ưu nhất trong cùng một giao thức. (Đáp án đầy đủ: A numerical value used to pick the best route within a protocol: RIP uses Hop Count; OSPF uses Cost; EIGRP uses Bandwidth, Delay, Reliability, Load, and MTU.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A layer 2 identifier for frame forwarding: RIP uses AS Path; OSPF uses Area ID; EIGRP uses Process ID: Metric là thông số lớp 3 dùng cho định tuyến, không phải định danh lớp 2, và các tham số như AS Path thuộc về BGP. C. A priority value used to select between different protocols: RIP uses Cost; OSPF uses Hop Count; EIGRP uses Bandwidth and Delay only: Metric dùng để chọn đường trong cùng một giao thức chứ không phải giữa các giao thức khác nhau, đồng thời RIP sử dụng Hop Count chứ không phải Cost. D. A security metric for path encryption: RIP uses MD5; OSPF uses SHA-256; EIGRP uses IPsec: Metric là thông số đo lường hiệu năng đường truyền, không phải là các thuật toán mã hóa bảo mật."
      },
      {
        "id": "net200-q42",
        "num": 42,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "Define Hop Count, Bandwidth, Delay, Reliability, Load, and MTU?",
        "questionVi": "Định nghĩa Hop Count, Bandwidth, Delay, Reliability, Load và MTU?",
        "options": [
          {
            "key": "A",
            "text": "Hop Count: number of routers crossed; Bandwidth: link capacity in Kbps; Delay: transit time; Reliability: lowest error/downtime rate; Load: current link utilization; MTU: maximum packet size (bytes) supported without fragmentation"
          },
          {
            "key": "B",
            "text": "Hop Count: total distance in miles; Bandwidth: data processed per second; Delay: router CPU usage; Reliability: uptime in days; Load: packet loss percentage; MTU: minimum frame size"
          },
          {
            "key": "C",
            "text": "Hop Count: TTL value; Bandwidth: latency inverse; Delay: jitter rate; Reliability: signal-to-noise ratio; Load: memory usage; MTU: maximum transmission unit in bits"
          },
          {
            "key": "D",
            "text": "Hop Count: number of switches crossed; Bandwidth: signal frequency; Delay: cable length; Reliability: hardware version; Load: power consumption; MTU: maximum segment size"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Hop Count: number of routers crossed; Bandwidth: link capacity in Kbps; Delay: transit time; Reliability: lowest error/downtime rate; Load: current link utilization; MTU: maximum packet size (bytes) supported without fragmentation",
        "explainRight": "Các thông số đo số trạm đi qua, độ rộng đường truyền, độ trễ, độ ổn định, mức độ tắc nghẽn và kích thước gói tối đa. (Đáp án đầy đủ: Hop Count: number of routers crossed; Bandwidth: link capacity in Kbps; Delay: transit time; Reliability: lowest error/downtime rate; Load: current link utilization; MTU: maximum packet size (bytes) supported without fragmentation.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Hop Count: total distance in miles; Bandwidth: data processed per second; Delay: router CPU usage; Reliability: uptime in days; Load: packet loss percentage; MTU: minimum frame size: Hop Count đo bằng số router chứ không phải khoảng cách vật lý, và Delay đo thời gian truyền dẫn chứ không phải mức sử dụng CPU. C. Hop Count: TTL value; Bandwidth: latency inverse; Delay: jitter rate; Reliability: signal-to-noise ratio; Load: memory usage; MTU: maximum transmission unit in bits: MTU được tính bằng đơn vị Bytes thay vì bits, và Hop Count không đồng nhất hoàn toàn với giá trị TTL trong gói tin. D. Hop Count: number of switches crossed; Bandwidth: signal frequency; Delay: cable length; Reliability: hardware version; Load: power consumption; MTU: maximum segment size: Hop Count tính qua router (L3) chứ không phải switch (L2), và Load đo mức độ sử dụng băng thông chứ không phải điện năng tiêu thụ."
      },
      {
        "id": "net200-q43",
        "num": 43,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is the difference between Bandwidth, Latency, and Throughput?",
        "questionVi": "Sự khác nhau giữa Bandwidth, Latency và Throughput là gì?",
        "options": [
          {
            "key": "A",
            "text": "Bandwidth is maximum link capacity; Latency is packet transit delay; Throughput is the actual volume of data successfully transferred over a period of time"
          },
          {
            "key": "B",
            "text": "Bandwidth is the delay between packets; Latency is the total data volume; Throughput is the theoretical limit of the cable"
          },
          {
            "key": "C",
            "text": "Bandwidth is the number of hops; Latency is the signal strength; Throughput is the error rate of the connection"
          },
          {
            "key": "D",
            "text": "Bandwidth is actual data speed; Latency is maximum capacity; Throughput is the time taken for a packet to travel"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Bandwidth is maximum link capacity; Latency is packet transit delay; Throughput is the actual volume of data successfully transferred over a period of time",
        "explainRight": "Bandwidth là độ rộng đường cao tốc, Latency là thời gian xe chạy hết đường, còn Throughput là lượng hàng thực tế chuyển được. (Đáp án đầy đủ: Bandwidth is maximum link capacity; Latency is packet transit delay; Throughput is the actual volume of data successfully transferred over a period of time.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Bandwidth is the delay between packets; Latency is the total data volume; Throughput is the theoretical limit of the cable: Bandwidth không phải là độ trễ giữa các gói tin và Throughput không phải là giới hạn lý thuyết của dây cáp. C. Bandwidth is the number of hops; Latency is the signal strength; Throughput is the error rate of the connection: Bandwidth không liên quan đến số bước nhảy (hops) và Latency không phải là cường độ tín hiệu. D. Bandwidth is actual data speed; Latency is maximum capacity; Throughput is the time taken for a packet to travel: Định nghĩa bị đảo ngược khi coi Bandwidth là tốc độ thực tế và Latency là dung lượng tối đa."
      },
      {
        "id": "net200-q44",
        "num": 44,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "How is OSPF Cost calculated?",
        "questionVi": "Chi phí (Cost) trong OSPF được tính như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Cost is a fixed value of 10 for all interfaces regardless of bandwidth to ensure equal load balancing"
          },
          {
            "key": "B",
            "text": "Cost is calculated by adding the hop count to the interface delay, where lower values are less preferred"
          },
          {
            "key": "C",
            "text": "Cost is inversely proportional to interface bandwidth (Reference Bandwidth / Interface Bandwidth), so faster links have lower cost"
          },
          {
            "key": "D",
            "text": "Cost is directly proportional to interface bandwidth, so faster links have higher cost to prevent congestion"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Cost is inversely proportional to interface bandwidth (Reference Bandwidth / Interface Bandwidth), so faster links have lower cost",
        "explainRight": "Đường truyền càng nhanh thì điểm Cost càng nhỏ và càng được ưu tiên. (Đáp án đầy đủ: Cost is inversely proportional to interface bandwidth (Reference Bandwidth / Interface Bandwidth), so faster links have lower cost.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Cost is a fixed value of 10 for all interfaces regardless of bandwidth to ensure equal load balancing: Cost thay đổi dựa trên băng thông giao diện chứ không phải là một giá trị cố định bằng 10 cho mọi loại cổng. B. Cost is calculated by adding the hop count to the interface delay, where lower values are less preferred: OSPF không sử dụng Hop Count hay Delay trong công thức tính Cost mặc định. D. Cost is directly proportional to interface bandwidth, so faster links have higher cost to prevent congestion: Cost tỉ lệ nghịch với băng thông, nếu tỉ lệ thuận sẽ khiến đường nhanh bị loại bỏ do điểm cao."
      },
      {
        "id": "net200-q45",
        "num": 45,
        "section": "Phần 2: Router IOS & Nguyên Lý Định Tuyến (Câu 25–45)",
        "questionEn": "What is CDP (Cisco Discovery Protocol)?",
        "questionVi": "CDP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A Cisco-proprietary Layer 2 protocol used to discover and gather device info (model, IP, interface) about directly connected Cisco neighbors"
          },
          {
            "key": "B",
            "text": "A Cisco-proprietary Layer 4 protocol used to establish encrypted VPN tunnels between remote sites"
          },
          {
            "key": "C",
            "text": "An industry-standard Layer 3 protocol used to route packets between different vendors' equipment"
          },
          {
            "key": "D",
            "text": "A multicast routing protocol used to discover neighbors across multiple router hops in a WAN"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A Cisco-proprietary Layer 2 protocol used to discover and gather device info (model, IP, interface) about directly connected Cisco neighbors",
        "explainRight": "Công cụ giúp thiết bị Cisco tự nhận diện thông tin của thiết bị Cisco cắm trực tiếp ngay bên cạnh. (Đáp án đầy đủ: A Cisco-proprietary Layer 2 protocol used to discover and gather device info (model, IP, interface) about directly connected Cisco neighbors.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A Cisco-proprietary Layer 4 protocol used to establish encrypted VPN tunnels between remote sites: CDP dùng để khám phá thiết bị láng giềng, không phải giao thức Lớp 4 dùng để thiết lập VPN. C. An industry-standard Layer 3 protocol used to route packets between different vendors' equipment: CDP là giao thức độc quyền của Cisco và hoạt động ở Lớp 2, không phải tiêu chuẩn chung ở Lớp 3. D. A multicast routing protocol used to discover neighbors across multiple router hops in a WAN: CDP chỉ hoạt động giữa các thiết bị kết nối trực tiếp, không thể truyền qua nhiều router hop."
      },
      {
        "id": "net200-q46",
        "num": 46,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "Explain the EIGRP routing protocol?",
        "questionVi": "Giải thích giao thức định tuyến EIGRP?",
        "options": [
          {
            "key": "A",
            "text": "Enhanced Interior Gateway Routing Protocol is a link-state protocol that requires a backbone area 0 for all communications"
          },
          {
            "key": "B",
            "text": "Enhanced Interior Gateway Routing Protocol uses the Bellman-Ford algorithm and is limited to a maximum hop count of 15"
          },
          {
            "key": "C",
            "text": "Enhanced Interior Gateway Routing Protocol uses the Diffusing Update Algorithm (DUAL) for loop-free, rapid convergence, supporting VLSM, classless routing, route summarization, and unequal-cost load balancing"
          },
          {
            "key": "D",
            "text": "Exterior Interior Gateway Routing Protocol uses the Dijkstra algorithm for shortest path first calculation and supports only classful routing"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Enhanced Interior Gateway Routing Protocol uses the Diffusing Update Algorithm (DUAL) for loop-free, rapid convergence, supporting VLSM, classless routing, route summarization, and unequal-cost load balancing",
        "explainRight": "Giao thức định tuyến nội bộ thông minh của Cisco với tốc độ chuyển mạch dự phòng cực nhanh. (Đáp án đầy đủ: Enhanced Interior Gateway Routing Protocol uses the Diffusing Update Algorithm (DUAL) for loop-free, rapid convergence, supporting VLSM, classless routing, route summarization, and unequal-cost load balancing.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Enhanced Interior Gateway Routing Protocol is a link-state protocol that requires a backbone area 0 for all communications: EIGRP là giao thức Hybrid (hoặc Distance Vector nâng cao), không phải Link-state và không yêu cầu Area 0 như OSPF. B. Enhanced Interior Gateway Routing Protocol uses the Bellman-Ford algorithm and is limited to a maximum hop count of 15: Thuật toán Bellman-Ford và giới hạn 15 hops thuộc về giao thức RIP, không phải EIGRP. D. Exterior Interior Gateway Routing Protocol uses the Dijkstra algorithm for shortest path first calculation and supports only classful routing: EIGRP sử dụng thuật toán DUAL chứ không phải Dijkstra và nó hỗ trợ classless routing thay vì chỉ classful."
      },
      {
        "id": "net200-q47",
        "num": 47,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What are the requirements for EIGRP neighborship?",
        "questionVi": "Các điều kiện để thiết lập láng giềng trong EIGRP là gì?",
        "options": [
          {
            "key": "A",
            "text": "Matching Autonomous System (AS) number, matching K-values, matching authentication parameters, and a shared primary subnet (or matching static neighbor config)"
          },
          {
            "key": "B",
            "text": "Matching BGP community, matching weight values, matching local preference, and matching peer group names"
          },
          {
            "key": "C",
            "text": "Matching VTP domain, matching VLAN ID, matching STP priority, and matching trunking encapsulation"
          },
          {
            "key": "D",
            "text": "Matching Process ID, matching Area ID, matching Hello/Dead timers, and unique Router IDs"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Matching Autonomous System (AS) number, matching K-values, matching authentication parameters, and a shared primary subnet (or matching static neighbor config)",
        "explainRight": "Hai router phải chung số AS, chung hệ số tính điểm K, khớp mật khẩu và nằm cùng lớp mạng kết nối. (Đáp án đầy đủ: Matching Autonomous System (AS) number, matching K-values, matching authentication parameters, and a shared primary subnet (or matching static neighbor config).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Matching BGP community, matching weight values, matching local preference, and matching peer group names: Community, Weight và Local Preference là các thuộc tính của BGP, không dùng cho EIGRP. C. Matching VTP domain, matching VLAN ID, matching STP priority, and matching trunking encapsulation: VTP, VLAN và STP là các giao thức Lớp 2, không liên quan đến điều kiện thiết lập láng giềng của giao thức định tuyến EIGRP. D. Matching Process ID, matching Area ID, matching Hello/Dead timers, and unique Router IDs: Process ID và Area ID là các điều kiện của OSPF, không phải của EIGRP."
      },
      {
        "id": "net200-q48",
        "num": 48,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "Which three tables do EIGRP routers maintain?",
        "questionVi": "Ba bảng dữ liệu mà router EIGRP duy trì là gì?",
        "options": [
          {
            "key": "A",
            "text": "Adjacency Table (MAC addresses), Database Table (LSA packets), and Forwarding Table (CEF entries)"
          },
          {
            "key": "B",
            "text": "Neighbor Table (adjacent EIGRP peers), Topology Table (all learned routes/metrics), and Routing Table (best routes installed for forwarding)"
          },
          {
            "key": "C",
            "text": "Successor Table (active routes), Feasible Successor Table (backup routes), and Metric Table (K-values)"
          },
          {
            "key": "D",
            "text": "ARP Table (IP-to-MAC), MAC Address Table (CAM), and Interface Table (Port status)"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Neighbor Table (adjacent EIGRP peers), Topology Table (all learned routes/metrics), and Routing Table (best routes installed for forwarding)",
        "explainRight": "Sổ danh bạ láng giềng, kho tất cả đường đi học được và bảng tuyến đường tốt nhất đang dùng thực tế. (Đáp án đầy đủ: Neighbor Table (adjacent EIGRP peers), Topology Table (all learned routes/metrics), and Routing Table (best routes installed for forwarding).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Adjacency Table (MAC addresses), Database Table (LSA packets), and Forwarding Table (CEF entries): Adjacency Table và LSA thuộc về OSPF và CEF, không phải các bảng chính của EIGRP. C. Successor Table (active routes), Feasible Successor Table (backup routes), and Metric Table (K-values): Successor và Feasible Successor là các thực thể nằm bên trong bảng Topology, không phải là các bảng riêng biệt. D. ARP Table (IP-to-MAC), MAC Address Table (CAM), and Interface Table (Port status): ARP và MAC table là các bảng chức năng chung của thiết bị, không phải bảng dữ liệu riêng của giao thức EIGRP."
      },
      {
        "id": "net200-q49",
        "num": 49,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "Why is the no auto-summary command used in EIGRP?",
        "questionVi": "Tại sao dùng lệnh no auto-summary trong EIGRP?",
        "options": [
          {
            "key": "A",
            "text": "It prevents the router from sending Hello packets to neighbors that are not in the same AS"
          },
          {
            "key": "B",
            "text": "It allows the router to automatically summarize all subnets into a single default route to simplify the routing table"
          },
          {
            "key": "C",
            "text": "It disables the exchange of routing updates to save bandwidth on slow serial links"
          },
          {
            "key": "D",
            "text": "It prevents automatic classful network summarization at major network boundaries so exact subnet masks are advertised"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "It prevents automatic classful network summarization at major network boundaries so exact subnet masks are advertised",
        "explainRight": "Giữ nguyên mặt nạ mạng con chi tiết để tránh nhầm lẫn đường đi khi chia nhiều mạng con lẻ. (Đáp án đầy đủ: It prevents automatic classful network summarization at major network boundaries so exact subnet masks are advertised.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. It prevents the router from sending Hello packets to neighbors that are not in the same AS: Lệnh này liên quan đến cách quảng bá mạng (summarization), không ảnh hưởng đến việc gửi gói tin Hello. B. It allows the router to automatically summarize all subnets into a single default route to simplify the routing table: Lệnh 'no auto-summary' có tác dụng ngược lại, nó ngăn chặn việc tóm tắt mạng tự động thay vì cho phép. C. It disables the exchange of routing updates to save bandwidth on slow serial links: Lệnh này không dùng để tắt việc trao đổi cập nhật định tuyến."
      },
      {
        "id": "net200-q50",
        "num": 50,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What are the default EIGRP Hello and Hold timers?",
        "questionVi": "Thời gian Hello và Hold timer mặc định của EIGRP là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "Hello timer is 30 seconds; Hold timer is 180 seconds to match RIP standards"
          },
          {
            "key": "B",
            "text": "Hello timer is 5 seconds; Hold timer is 15 seconds on standard high-speed interfaces"
          },
          {
            "key": "C",
            "text": "Hello timer is 60 seconds; Hold timer is 180 seconds for low-speed NBMA networks"
          },
          {
            "key": "D",
            "text": "Hello timer is 10 seconds; Hold timer is 40 seconds on all interface types"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Hello timer is 5 seconds; Hold timer is 15 seconds on standard high-speed interfaces",
        "explainRight": "Cứ 5 giây gửi tin chào một lần; quá 15 giây không thấy hồi âm thì coi như láng giềng mất kết nối. (Đáp án đầy đủ: Hello timer is 5 seconds; Hold timer is 15 seconds on standard high-speed interfaces.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Hello timer is 30 seconds; Hold timer is 180 seconds to match RIP standards: Giá trị 30s/180s liên quan đến chu kỳ cập nhật của RIP, không phải timer của EIGRP. C. Hello timer is 60 seconds; Hold timer is 180 seconds for low-speed NBMA networks: Mặc dù EIGRP có timer 60s/180s cho mạng chậm, nhưng câu hỏi hỏi về giá trị mặc định tiêu chuẩn (thường là trên interface tốc độ cao). D. Hello timer is 10 seconds; Hold timer is 40 seconds on all interface types: Giá trị 10s/40s là các thông số mặc định của OSPF trên mạng Broadcast, không phải EIGRP."
      },
      {
        "id": "net200-q51",
        "num": 51,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "Define Successor and Feasible Successor in EIGRP?",
        "questionVi": "Định nghĩa Successor và Feasible Successor trong EIGRP?",
        "options": [
          {
            "key": "A",
            "text": "A Successor is the primary best loop-free route; a Feasible Successor is a pre-validated loop-free backup route kept in the topology table for instant failover"
          },
          {
            "key": "B",
            "text": "A Successor is any route in the routing table; a Feasible Successor is a route that meets the split-horizon rule"
          },
          {
            "key": "C",
            "text": "A Successor is the active route in the neighbor table; a Feasible Successor is the route stored in the RIB for load balancing"
          },
          {
            "key": "D",
            "text": "A Successor is the neighbor with the lowest AD; a Feasible Successor is the neighbor with the highest FD"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A Successor is the primary best loop-free route; a Feasible Successor is a pre-validated loop-free backup route kept in the topology table for instant failover",
        "explainRight": "Successor là đường chính tốt nhất, còn Feasible Successor là đường dự phòng sẵn sàng thay thế ngay khi đường chính hỏng. (Đáp án đầy đủ: A Successor is the primary best loop-free route; a Feasible Successor is a pre-validated loop-free backup route kept in the topology table for instant failover.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A Successor is any route in the routing table; a Feasible Successor is a route that meets the split-horizon rule: Successor không phải là bất kỳ tuyến đường nào mà phải là tuyến đường tốt nhất dựa trên metric thấp nhất. C. A Successor is the active route in the neighbor table; a Feasible Successor is the route stored in the RIB for load balancing: Successor và Feasible Successor được lưu trữ trong bảng Topology chứ không phải bảng Neighbor. D. A Successor is the neighbor with the lowest AD; a Feasible Successor is the neighbor with the highest FD: Successor được xác định dựa trên Feasible Distance (FD) thấp nhất chứ không phải Advertised Distance (AD)."
      },
      {
        "id": "net200-q52",
        "num": 52,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is the difference between Feasible Distance (FD) and Advertised/Reported Distance (AD/RD)?",
        "questionVi": "Sự khác nhau giữa Feasible Distance và Advertised Distance là gì?",
        "options": [
          {
            "key": "A",
            "text": "Feasible Distance is the administrative distance of EIGRP; Advertised Distance is the metric calculated by the DUAL algorithm"
          },
          {
            "key": "B",
            "text": "Feasible Distance is the metric reported by the neighbor; Advertised Distance is the total metric including the local link cost"
          },
          {
            "key": "C",
            "text": "Feasible Distance is the total lowest metric from the local router to the destination; Advertised Distance is the metric from the neighbor router to the destination"
          },
          {
            "key": "D",
            "text": "Feasible Distance is the maximum hop count allowed; Advertised Distance is the bandwidth-delay product of the path"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Feasible Distance is the total lowest metric from the local router to the destination; Advertised Distance is the metric from the neighbor router to the destination",
        "explainRight": "FD là tổng chi phí từ mình tới đích, còn AD là chi phí tính từ nhà hàng xóm tới đích. (Đáp án đầy đủ: Feasible Distance is the total lowest metric from the local router to the destination; Advertised Distance is the metric from the neighbor router to the destination.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Feasible Distance is the administrative distance of EIGRP; Advertised Distance is the metric calculated by the DUAL algorithm: Feasible Distance là một giá trị metric cụ thể, không phải là Administrative Distance (mặc định là 90/170). B. Feasible Distance is the metric reported by the neighbor; Advertised Distance is the total metric including the local link cost: Lựa chọn này bị ngược định nghĩa, AD mới là metric do hàng xóm báo cáo. D. Feasible Distance is the maximum hop count allowed; Advertised Distance is the bandwidth-delay product of the path: EIGRP không sử dụng hop count làm metric chính như RIP và AD không phải là tích của băng thông và độ trễ."
      },
      {
        "id": "net200-q53",
        "num": 53,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is the Feasibility Condition in EIGRP?",
        "questionVi": "Điều kiện khả thi (Feasibility Condition) để chọn đường dự phòng trong EIGRP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A neighbor's Advertised Distance (AD) must be strictly less than the current Successor's Feasible Distance (AD < FD) to guarantee a loop-free backup path"
          },
          {
            "key": "B",
            "text": "The Advertised Distance of the backup route must be greater than the Feasible Distance of the primary route (AD > FD)"
          },
          {
            "key": "C",
            "text": "A neighbor's Feasible Distance must be equal to the local router's Advertised Distance to ensure path symmetry"
          },
          {
            "key": "D",
            "text": "The Reported Distance must be less than or equal to the local interface delay to prevent routing loops"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A neighbor's Advertised Distance (AD) must be strictly less than the current Successor's Feasible Distance (AD < FD) to guarantee a loop-free backup path",
        "explainRight": "Khoảng cách từ hàng xóm tới đích phải ngắn hơn tổng đường đi hiện tại của mình để đảm bảo không đi vòng ngược lại. (Đáp án đầy đủ: A neighbor's Advertised Distance (AD) must be strictly less than the current Successor's Feasible Distance (AD < FD) to guarantee a loop-free backup path.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. The Advertised Distance of the backup route must be greater than the Feasible Distance of the primary route (AD > FD): Nếu AD lớn hơn hoặc bằng FD thì có khả năng tuyến đường đó đi vòng qua router hiện tại, không đảm bảo loop-free. C. A neighbor's Feasible Distance must be equal to the local router's Advertised Distance to ensure path symmetry: Điều kiện khả thi không yêu cầu sự đối xứng về metric giữa FD và AD. D. The Reported Distance must be less than or equal to the local interface delay to prevent routing loops: Điều kiện so sánh phải dựa trên FD của Successor hiện tại chứ không phải dựa trên độ trễ của interface local."
      },
      {
        "id": "net200-q54",
        "num": 54,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What authentication methods does EIGRP support?",
        "questionVi": "EIGRP hỗ trợ phương thức xác thực nào?",
        "options": [
          {
            "key": "A",
            "text": "EIGRP uses SSL/TLS certificates to encrypt routing updates between neighbors"
          },
          {
            "key": "B",
            "text": "Classic EIGRP supports MD5 authentication (EIGRP Named Mode also supports HMAC-SHA-256)"
          },
          {
            "key": "C",
            "text": "EIGRP only supports PAP and CHAP authentication similar to PPP links"
          },
          {
            "key": "D",
            "text": "EIGRP supports clear-text passwords and IPsec AH headers for all packet exchanges"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Classic EIGRP supports MD5 authentication (EIGRP Named Mode also supports HMAC-SHA-256)",
        "explainRight": "Dùng mật khẩu mã hóa băm để xác minh đúng router nội bộ mới cho trao đổi định tuyến. (Đáp án đầy đủ: Classic EIGRP supports MD5 authentication (EIGRP Named Mode also supports HMAC- SHA-256).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. EIGRP uses SSL/TLS certificates to encrypt routing updates between neighbors: EIGRP không sử dụng cơ chế chứng chỉ số SSL/TLS để xác thực các router láng giềng. C. EIGRP only supports PAP and CHAP authentication similar to PPP links: PAP và CHAP là các giao thức xác thực lớp Layer 2 dành cho kết nối điểm-điểm, không dùng cho EIGRP. D. EIGRP supports clear-text passwords and IPsec AH headers for all packet exchanges: EIGRP không hỗ trợ xác thực mật khẩu văn bản thuần túy (clear-text) như OSPF v2."
      },
      {
        "id": "net200-q55",
        "num": 55,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is the default EIGRP metric calculation formula?",
        "questionVi": "Công thức tính metric mặc định của EIGRP là gì?",
        "options": [
          {
            "key": "A",
            "text": "Metric = [ (10^8 / bandwidth) + delay ] / 256"
          },
          {
            "key": "B",
            "text": "Metric = [ (Total Bandwidth / 10^7) + (Total Delay / 10) ] × 128"
          },
          {
            "key": "C",
            "text": "Metric = [ (10^7 / least bandwidth in Kbps) + cumulative delay in tens of microseconds ] × 256"
          },
          {
            "key": "D",
            "text": "Metric = [ (10^7 / maximum bandwidth) + (minimum delay * 256) ]"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Metric = [ (10^7 / least bandwidth in Kbps) + cumulative delay in tens of microseconds ] × 256",
        "explainRight": "Lấy nút thắt băng thông nhỏ nhất cộng với tổng độ trễ dọc đường rồi nhân 256 để ra điểm số so sánh. (Đáp án đầy đủ: Metric = [ (10^7 / least bandwidth in Kbps) + cumulative delay in tens of microseconds ] × 256.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Metric = [ (10^8 / bandwidth) + delay ] / 256: Công thức này sai cả hằng số băng thông (10^8) và sai phép tính cuối (chia 256 thay vì nhân 256). B. Metric = [ (Total Bandwidth / 10^7) + (Total Delay / 10) ] × 128: EIGRP sử dụng băng thông nhỏ nhất (bottleneck) chứ không phải tổng băng thông, và hệ số nhân phải là 256. D. Metric = [ (10^7 / maximum bandwidth) + (minimum delay * 256) ]: EIGRP tính toán dựa trên băng thông thấp nhất trên toàn tuyến và độ trễ tích lũy, không phải băng thông lớn nhất."
      },
      {
        "id": "net200-q56",
        "num": 56,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What are the five EIGRP packet types?",
        "questionVi": "Năm loại gói tin của EIGRP là gì?",
        "options": [
          {
            "key": "A",
            "text": "Hello, Keepalive, Database Description, Link State Request, and Update"
          },
          {
            "key": "B",
            "text": "Hello, Acknowledgement, Update, Query, and Reply"
          },
          {
            "key": "C",
            "text": "Hello, Request, Update, Query, and Reply"
          },
          {
            "key": "D",
            "text": "Discovery, Offer, Request, Acknowledge, and Update"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Hello, Request, Update, Query, and Reply",
        "explainRight": "Gồm gói chào hỏi (Hello), yêu cầu thông tin (Request), cập nhật tuyến (Update), hỏi đường cứu viện (Query) và trả lời (Reply). (Đáp án đầy đủ: Hello, Request, Update, Query, and Reply.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Hello, Keepalive, Database Description, Link State Request, and Update: Đây là các loại gói tin thuộc về giao thức OSPF, không phải EIGRP. B. Hello, Acknowledgement, Update, Query, and Reply: Mặc dù có gói ACK nhưng về mặt kỹ thuật nó là một gói Hello không chứa dữ liệu, 5 loại gói tin chính thức bao gồm Request. D. Discovery, Offer, Request, Acknowledge, and Update: Đây là các bước trong tiến trình cấp phát IP của DHCP (DORA), không liên quan đến định tuyến EIGRP."
      },
      {
        "id": "net200-q57",
        "num": 57,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is EIGRP Named Mode?",
        "questionVi": "EIGRP Named Mode là gì?",
        "options": [
          {
            "key": "A",
            "text": "A hierarchical configuration mode under router eigrp <NAME> unifying IPv4 and IPv6 address families and AS configurations in one place"
          },
          {
            "key": "B",
            "text": "A legacy configuration style that requires separate process IDs for every interface"
          },
          {
            "key": "C",
            "text": "A mode that allows EIGRP to use DNS names instead of IP addresses for neighbor peering"
          },
          {
            "key": "D",
            "text": "A security feature that renames the EIGRP process to hide it from unauthorized users"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A hierarchical configuration mode under router eigrp <NAME> unifying IPv4 and IPv6 address families and AS configurations in one place",
        "explainRight": "Cách cấu hình gom gọn toàn bộ thiết lập EIGRP cho cả IPv4 và IPv6 vào chung một khối duy nhất. (Đáp án đầy đủ: A hierarchical configuration mode under router eigrp <NAME> unifying IPv4 and IPv6 address families and AS configurations in one place.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A legacy configuration style that requires separate process IDs for every interface: Named Mode là cách cấu hình hiện đại và mới hơn, không phải là kiểu cấu hình cũ (Classic Mode). C. A mode that allows EIGRP to use DNS names instead of IP addresses for neighbor peering: Named Mode không liên quan đến việc phân giải tên miền DNS cho các router láng giềng. D. A security feature that renames the EIGRP process to hide it from unauthorized users: Việc đặt tên trong Named Mode nhằm mục đích quản lý tập trung chứ không phải là tính năng bảo mật để ẩn tiến trình."
      },
      {
        "id": "net200-q58",
        "num": 58,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What does the passive-interface command do in EIGRP?",
        "questionVi": "Lệnh passive- interface trong EIGRP có tác dụng gì?",
        "options": [
          {
            "key": "A",
            "text": "Stops sending and receiving EIGRP Hellos/updates on an interface while still advertising its connected network prefix"
          },
          {
            "key": "B",
            "text": "Configures the interface to only receive updates but not send any Hello packets"
          },
          {
            "key": "C",
            "text": "Disables the interface completely so no traffic can pass through it"
          },
          {
            "key": "D",
            "text": "Prevents the network prefix of that interface from being advertised to any EIGRP neighbors"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Stops sending and receiving EIGRP Hellos/updates on an interface while still advertising its connected network prefix",
        "explainRight": "Tắt gửi gói tin định tuyến ra cổng nối xuống máy người dùng để tiết kiệm băng thông và tăng bảo mật. (Đáp án đầy đủ: Stops sending and receiving EIGRP Hellos/updates on an interface while still advertising its connected network prefix.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Configures the interface to only receive updates but not send any Hello packets: Trong EIGRP, passive-interface chặn cả hai chiều gửi và nhận gói tin Hello, dẫn đến không thiết lập được neighbor. C. Disables the interface completely so no traffic can pass through it: Lệnh này chỉ tác động đến giao thức định tuyến, không làm tắt (shutdown) cổng vật lý. D. Prevents the network prefix of that interface from being advertised to any EIGRP neighbors: Ngược lại, interface passive vẫn được quảng bá mạng kết nối trực tiếp của nó vào trong EIGRP."
      },
      {
        "id": "net200-q59",
        "num": 59,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is EIGRP Variance and its value range?",
        "questionVi": "Variance trong EIGRP là gì và phạm vi giá trị?",
        "options": [
          {
            "key": "A",
            "text": "A multiplier (range 1–128, default 1) applied to the best metric to allow unequal-cost load balancing across feasible successors"
          },
          {
            "key": "B",
            "text": "A value that determines the maximum number of hops a packet can travel before being dropped"
          },
          {
            "key": "C",
            "text": "A metric offset added to specific routes to influence path selection for primary links"
          },
          {
            "key": "D",
            "text": "A timer that controls how often EIGRP sends update packets to its neighbors"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A multiplier (range 1–128, default 1) applied to the best metric to allow unequal-cost load balancing across feasible successors",
        "explainRight": "Cho phép dùng thêm cả các đường phụ hơi chậm hơn một chút để chia tải lưu lượng cùng đường chính. (Đáp án đầy đủ: A multiplier (range 1–128, default 1) applied to the best metric to allow unequal-cost load balancing across feasible successors.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A value that determines the maximum number of hops a packet can travel before being dropped: Giá trị giới hạn số hop trong EIGRP được cấu hình bằng lệnh 'metric maximum-hops', không phải variance. C. A metric offset added to specific routes to influence path selection for primary links: Variance là hệ số nhân để so sánh metric cho việc chia tải, không phải là giá trị cộng thêm (offset-list) vào metric. D. A timer that controls how often EIGRP sends update packets to its neighbors: Tần suất gửi gói tin được điều khiển bởi Hello và Hold timers, không liên quan đến variance."
      },
      {
        "id": "net200-q60",
        "num": 60,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "How does EIGRP achieve fast convergence?",
        "questionVi": "EIGRP đạt được sự hội tụ nhanh bằng cách nào?",
        "options": [
          {
            "key": "A",
            "text": "By flooding Link State Advertisements (LSAs) to all routers in the area simultaneously"
          },
          {
            "key": "B",
            "text": "By periodically requesting the entire routing table from neighbors every 30 seconds"
          },
          {
            "key": "C",
            "text": "By using a very short Hello timer of 1 second and a Hold timer of 3 seconds on all interfaces"
          },
          {
            "key": "D",
            "text": "By pre-computing and storing loop-free Feasible Successor backup routes in the topology table for immediate switchover without recalculation"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "By pre-computing and storing loop-free Feasible Successor backup routes in the topology table for immediate switchover without recalculation",
        "explainRight": "Nhờ có sẵn đường dự phòng kiểm duyệt từ trước nên chuyển mạch tức thì khi đường chính đứt. (Đáp án đầy đủ: By pre-computing and storing loop-free Feasible Successor backup routes in the topology table for immediate switchover without recalculation.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. By flooding Link State Advertisements (LSAs) to all routers in the area simultaneously: Việc flooding LSA là cơ chế của các giao thức Link-State như OSPF, EIGRP là Distance Vector nâng cao. B. By periodically requesting the entire routing table from neighbors every 30 seconds: EIGRP chỉ gửi cập nhật khi có thay đổi (triggered updates), không gửi toàn bộ bảng định tuyến định kỳ như RIP. C. By using a very short Hello timer of 1 second and a Hold timer of 3 seconds on all interfaces: Timer ngắn giúp phát hiện lỗi nhanh nhưng sự hội tụ nhanh của EIGRP chủ yếu đến từ việc có sẵn đường dự phòng (FS)."
      },
      {
        "id": "net200-q61",
        "num": 61,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is EIGRP Stuck in Active (SIA) and how do you fix it?",
        "questionVi": "Lỗi EIGRP Stuck in Active (SIA) là gì và cách khắc phục?",
        "options": [
          {
            "key": "A",
            "text": "Occurs when a router loses its hello adjacency due to a mismatched hello interval, fixed by disabling authentication"
          },
          {
            "key": "B",
            "text": "Occurs when dual-homed routers drop packets due to MTU mismatches, fixed by enabling jumbo frames on WAN links"
          },
          {
            "key": "C",
            "text": "Occurs when the passive timer expires after 60 seconds without receiving an update, fixed by adjusting bandwidth metrics"
          },
          {
            "key": "D",
            "text": "Occurs when a router sends a Query for a lost route and receives no Reply within the 3- minute (180s) active timer (with SIA-Query at 90s). Fixes: route summarization, stub router configuration, and fixing congested/unidirectional links"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Occurs when a router sends a Query for a lost route and receives no Reply within the 3- minute (180s) active timer (with SIA-Query at 90s). Fixes: route summarization, stub router configuration, and fixing congested/unidirectional links",
        "explainRight": "Xảy ra khi câu hỏi tìm đường mới đi quá xa mà không nhận được hồi âm kịp thời; khắc phục bằng tóm tắt tuyến và cấu hình stub router. (Đáp án đầy đủ: Occurs when a router sends a Query for a lost route and receives no Reply within the 3- minute (180s) active timer (with SIA-Query at 90s). Fixes: route summarization, stub router configuration, and fixing congested/unidirectional links.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Occurs when a router loses its hello adjacency due to a mismatched hello interval, fixed by disabling authentication: Sai vì vấn đề mất láng giềng do lệch hello interval chỉ làm đứt kết nối láng giềng chứ không gây ra trạng thái Stuck in Active (SIA) vốn liên quan đến tiến trình truy vấn tuyến đường. B. Occurs when dual-homed routers drop packets due to MTU mismatches, fixed by enabling jumbo frames on WAN links: Sai vì MTU mismatch và jumbo frames ảnh hưởng đến việc truyền tải dữ liệu lớn, không phải là nguyên nhân gây ra SIA trong tiến trình tính toán định tuyến của EIGRP. C. Occurs when the passive timer expires after 60 seconds without receiving an update, fixed by adjusting bandwidth metrics: Sai vì EIGRP không sử dụng passive timer 60 giây cho tiến trình truy vấn, mà SIA xuất phát từ active timer 3 phút khi không nhận được bản tin Reply."
      },
      {
        "id": "net200-q62",
        "num": 62,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is an EIGRP leak-map?",
        "questionVi": "Leak-map trong EIGRP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A translation table used to convert EIGRP metric weights into OSPF cost values during redistribution"
          },
          {
            "key": "B",
            "text": "A mechanism to block all external routes from entering an EIGRP autonomous system using prefix lists"
          },
          {
            "key": "C",
            "text": "A security feature that drops unauthenticated EIGRP queries received on untrusted transit interfaces"
          },
          {
            "key": "D",
            "text": "A feature allowing a router to advertise a specific more-detailed subnet prefix alongside a summary route"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "A feature allowing a router to advertise a specific more-detailed subnet prefix alongside a summary route",
        "explainRight": "Cho phép \"hé lộ\" riêng một tuyến con cụ thể bên cạnh bản tin gộp chung nhiều mạng. (Đáp án đầy đủ: A feature allowing a router to advertise a specific more-detailed subnet prefix alongside a summary route.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A translation table used to convert EIGRP metric weights into OSPF cost values during redistribution: Sai vì leak-map không thực hiện việc chuyển đổi metric weights giữa các giao thức định tuyến khác nhau. B. A mechanism to block all external routes from entering an EIGRP autonomous system using prefix lists: Sai vì việc chặn toàn bộ external routes bằng prefix list là chức năng của route filtering thông thường chứ không phải leak-map. C. A security feature that drops unauthenticated EIGRP queries received on untrusted transit interfaces: Sai vì leak-map không liên quan đến việc kiểm tra bảo mật hay lọc bản tin query chưa xác thực trên giao diện không tin cậy."
      },
      {
        "id": "net200-q63",
        "num": 63,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is an EIGRP stub router?",
        "questionVi": "EIGRP stub router là gì?",
        "options": [
          {
            "key": "A",
            "text": "A transit router that drops all unicast updates to force the entire topology to rely solely on multicast discovery"
          },
          {
            "key": "B",
            "text": "A branch/spoke router configured to limit route advertisements and prevent upstream routers from sending it Query packets, saving CPU/memory and preventing SIA"
          },
          {
            "key": "C",
            "text": "A backup route reflector designed to eliminate control plane overhead in large Enterprise campus architectures"
          },
          {
            "key": "D",
            "text": "A core router configured to filter all incoming LSAs and suppress Type-5 routing updates across backbone areas"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "A branch/spoke router configured to limit route advertisements and prevent upstream routers from sending it Query packets, saving CPU/memory and preventing SIA",
        "explainRight": "Đánh dấu router chi nhánh là điểm cuối để router trung tâm không gửi câu hỏi tìm đường vòng qua đó. (Đáp án đầy đủ: A branch/spoke router configured to limit route advertisements and prevent upstream routers from sending it Query packets, saving CPU/memory and preventing SIA.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A transit router that drops all unicast updates to force the entire topology to rely solely on multicast discovery: Sai vì EIGRP stub không phải là router chuyển tiếp dùng để ép toàn bộ топология chuyển sang sử dụng multicast. C. A backup route reflector designed to eliminate control plane overhead in large Enterprise campus architectures: Sai vì route reflector là khái niệm cốt lõi trong giao thức BGP, không liên quan đến EIGRP stub router ở chi nhánh. D. A core router configured to filter all incoming LSAs and suppress Type-5 routing updates across backbone areas: Sai vì LSA và Type-5 là các khái niệm thuộc giao thức OSPF chứ không phải cơ chế hoạt động của EIGRP stub router."
      },
      {
        "id": "net200-q64",
        "num": 64,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What is Split Horizon in EIGRP?",
        "questionVi": "Split Horizon trong EIGRP là gì?",
        "options": [
          {
            "key": "A",
            "text": "A failover feature that blocks redundant backup links until the primary interface experiences a complete physical failure"
          },
          {
            "key": "B",
            "text": "A security mechanism that drops packets with matching source and destination IP addresses to prevent IP spoofing"
          },
          {
            "key": "C",
            "text": "A spanning-tree optimization that transitions port states instantly from blocking to forwarding to prevent loops"
          },
          {
            "key": "D",
            "text": "A loop-prevention rule preventing a router from advertising a route back out the same interface from which it was learned"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "A loop-prevention rule preventing a router from advertising a route back out the same interface from which it was learned",
        "explainRight": "Học đường đi từ cổng nào thì không bao giờ quảng bá ngược lại chính cổng đó để tránh lặp vòng. (Đáp án đầy đủ: A loop-prevention rule preventing a router from advertising a route back out the same interface from which it was learned.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A failover feature that blocks redundant backup links until the primary interface experiences a complete physical failure: Sai vì Split Horizon không phải là tính năng chuyển đổi dự phòng đường truyền vật lý. B. A security mechanism that drops packets with matching source and destination IP addresses to prevent IP spoofing: Sai vì việc chống giả mạo IP bằng cách kiểm tra nguồn và đích là tính năng bảo mật (IP Source Guard), không phải quy tắc chống lặp vòng định tuyến. C. A spanning-tree optimization that transitions port states instantly from blocking to forwarding to prevent loops: Sai vì chuyển đổi trạng thái cổng nhanh trong Spanning Tree Protocol (STP) liên quan đến lớp 2 chứ không phải quy tắc định tuyến của EIGRP."
      },
      {
        "id": "net200-q65",
        "num": 65,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "Which multicast address does EIGRP use?",
        "questionVi": "EIGRP sử dụng địa chỉ multicast nào?",
        "options": [
          {
            "key": "A",
            "text": "IPv4 multicast address 224.0.0.9 for exchange of routing updates"
          },
          {
            "key": "B",
            "text": "IPv4 multicast address 224.0.0.10 (and IPv6 FF02::A)"
          },
          {
            "key": "C",
            "text": "IPv4 multicast address 224.0.0.13 for protocol independent multicast traffic"
          },
          {
            "key": "D",
            "text": "IPv4 multicast address 224.0.0.5 and 224.0.0.6 for router communications"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "IPv4 multicast address 224.0.0.10 (and IPv6 FF02::A)",
        "explainRight": "Kênh địa chỉ nhóm dành riêng cho các router chạy EIGRP trao đổi bản tin. (Đáp án đầy đủ: IPv4 multicast address 224.0.0.10 (and IPv6 FF02::A).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. IPv4 multicast address 224.0.0.9 for exchange of routing updates: Sai vì 224.0.0.9 là địa chỉ multicast được sử dụng bởi giao thức RIPv2. C. IPv4 multicast address 224.0.0.13 for protocol independent multicast traffic: Sai vì 224.0.0.13 là địa chỉ multicast được sử dụng bởi giao thức PIM (Protocol Independent Multicast). D. IPv4 multicast address 224.0.0.5 and 224.0.0.6 for router communications: Sai vì 224.0.0.5 và 224.0.0.6 là các địa chỉ multicast dành riêng cho giao thức OSPF."
      },
      {
        "id": "net200-q66",
        "num": 66,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "How do you configure classic EIGRP and EIGRP Named Mode?",
        "questionVi": "Cấu hình EIGRP cổ điển và EIGRP Named Mode như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Classic: router eigrp 100 -> network 172.16.1.0 255.255.255.0 -> passive-interface. Named Mode: router eigrp IBM -> ipv4 unicast -> network 192.168.12.0"
          },
          {
            "key": "B",
            "text": "Classic: router eigrp IBM -> network 172.16.1.0 -> area 0. Named Mode: router eigrp 100 -> address-family ipv6 -> network 192.168.12.0"
          },
          {
            "key": "C",
            "text": "Classic: router eigrp 12 -> network 172.16.1.0 0.0.0.255 -> neighbor. Named Mode: router eigrp 100 -> address-family ipv4 100 -> network 192.168.12.0"
          },
          {
            "key": "D",
            "text": "Classic: router eigrp 100 -> network 172.16.1.0 0.0.0.255 -> no auto-summary. Named Mode: router eigrp IBM -> address-family ipv4 autonomous-system 12 -> network 192.168.12.0"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Classic: router eigrp 100 -> network 172.16.1.0 0.0.0.255 -> no auto-summary. Named Mode: router eigrp IBM -> address-family ipv4 autonomous-system 12 -> network 192.168.12.0",
        "explainRight": "Khai báo tiến trình EIGRP, mã vùng AS và các dải mạng tham gia định tuyến. (Đáp án đầy đủ: Classic: router eigrp 100 -> network 172.16.1.0 0.0.0.255 -> no auto-summary. Named Mode: router eigrp IBM -> address-family ipv4 autonomous-system 12 -> network 192.168.12.0.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Classic: router eigrp 100 -> network 172.16.1.0 255.255.255.0 -> passive-interface. Named Mode: router eigrp IBM -> ipv4 unicast -> network 192.168.12.0: Sai vì cú pháp Classic của EIGRP sử dụng wildcard mask (0.0.0.255) chứ không phải subnet mask chuẩn (255.255.255.0). B. Classic: router eigrp IBM -> network 172.16.1.0 -> area 0. Named Mode: router eigrp 100 -> address-family ipv6 -> network 192.168.12.0: Sai vì cú pháp Classic không dùng từ khóa area 0 vốn thuộc về OSPF, và Named Mode yêu cầu tên chuỗi thay vì số AS ở cấp độ tiến trình chính. C. Classic: router eigrp 12 -> network 172.16.1.0 0.0.0.255 -> neighbor. Named Mode: router eigrp 100 -> address-family ipv4 100 -> network 192.168.12.0: Sai vì cấu trúc Named Mode yêu cầu khai báo address-family ipv4 autonomous-system <AS#> theo chuẩn, không dùng cú pháp lồng nhau sai lệch như vậy."
      },
      {
        "id": "net200-q67",
        "num": 67,
        "section": "Phần 3: Giao Thức Định Tuyến EIGRP (Câu 46–67)",
        "questionEn": "What commands are used to troubleshoot EIGRP?",
        "questionVi": "Các lệnh kiểm tra và gỡ lỗi EIGRP là gì?",
        "options": [
          {
            "key": "A",
            "text": "show ip ospf neighbor, show ip ospf database, show ip ospf interface, and show ip ospf route"
          },
          {
            "key": "B",
            "text": "show ip interface brief, show controllers serial, show running-config interface, and show ip protocols"
          },
          {
            "key": "C",
            "text": "show bgp summary, show ip bgp neighbors, show ip bgp paths, and show bgp ipv4 unicast"
          },
          {
            "key": "D",
            "text": "show ip route, show ip route eigrp, show ip eigrp neighbors, and show ip eigrp topology"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "show ip route, show ip route eigrp, show ip eigrp neighbors, and show ip eigrp topology",
        "explainRight": "Các lệnh xem bảng định tuyến, kiểm tra trạng thái láng giềng và danh sách đường chính/dự phòng. (Đáp án đầy đủ: show ip route, show ip route eigrp, show ip eigrp neighbors, and show ip eigrp topology.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. show ip ospf neighbor, show ip ospf database, show ip ospf interface, and show ip ospf route: Sai vì các lệnh này dùng để kiểm tra giao thức OSPF chứ không phải EIGRP. B. show ip interface brief, show controllers serial, show running-config interface, and show ip protocols: Sai vì đây là các lệnh kiểm tra trạng thái giao diện và cấu hình tổng quát, không chứa các lệnh chuyên dụng cho topology và láng giềng của EIGRP. C. show bgp summary, show ip bgp neighbors, show ip bgp paths, and show bgp ipv4 unicast: Sai vì các lệnh này dùng để kiểm tra giao thức BGP chứ không phải EIGRP."
      },
      {
        "id": "net200-q68",
        "num": 68,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What is the OSPF routing protocol?",
        "questionVi": "Giao thức định tuyến OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "Open Shortest Path First is an open-standard link-state IGP using the SPF (Dijkstra) algorithm, IP protocol 89, AD 110, and multicast addresses 224.0.0.5 (All OSPF routers) and 224.0.0.6 (DR/BDR)"
          },
          {
            "key": "B",
            "text": "Open Shortest Path First is a link-state exterior gateway protocol using Bellman-Ford algorithm, IP protocol 1, AD 120, and broadcast addressing"
          },
          {
            "key": "C",
            "text": "Open Shortest Path First is a proprietary distance-vector IGP using the DUAL algorithm, IP protocol 88, AD 90, and multicast address 224.0.0.10"
          },
          {
            "key": "D",
            "text": "Open Shortest Path First is an open-standard path-vector routing protocol using the best-path selection rules, IP protocol 17, AD 20, and TCP port 179"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Open Shortest Path First is an open-standard link-state IGP using the SPF (Dijkstra) algorithm, IP protocol 89, AD 110, and multicast addresses 224.0.0.5 (All OSPF routers) and 224.0.0.6 (DR/BDR)",
        "explainRight": "Giao thức định tuyến chuẩn mở phổ biến nhất trong doanh nghiệp, tự vẽ bản đồ toàn mạng và tìm đường ngắn nhất. (Đáp án đầy đủ: Open Shortest Path First is an open-standard link-state IGP using the SPF (Dijkstra) algorithm, IP protocol 89, AD 110, and multicast addresses 224.0.0.5 (All OSPF routers) and 224.0.0.6 (DR/BDR).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Open Shortest Path First is a link-state exterior gateway protocol using Bellman-Ford algorithm, IP protocol 1, AD 120, and broadcast addressing: Sai vì Bellman-Ford và AD 120 thuộc về giao thức RIP, trong khi OSPF là giao thức nội vùng (IGP) dùng thuật toán Dijkstra. C. Open Shortest Path First is a proprietary distance-vector IGP using the DUAL algorithm, IP protocol 88, AD 90, and multicast address 224.0.0.10: Sai vì các thông số như thuật toán DUAL, IP protocol 88, AD 90 và multicast 224.0.0.10 đều mô tả giao thức EIGRP chứ không phải OSPF. D. Open Shortest Path First is an open-standard path-vector routing protocol using the best-path selection rules, IP protocol 17, AD 20, and TCP port 179: Sai vì các thông số như TCP port 179, IP protocol 17 và AD 20 mô tả đặc tính của giao thức BGP."
      },
      {
        "id": "net200-q69",
        "num": 69,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What is an OSPF Area and why are areas used?",
        "questionVi": "Area trong OSPF là gì và tại sao phải chia Area?",
        "options": [
          {
            "key": "A",
            "text": "A logical grouping of routers/links sharing an Area ID and identical LSDB. Areas reduce routing table size, lower CPU/memory load, and contain SPF recalculations within local boundaries"
          },
          {
            "key": "B",
            "text": "A hierarchical aggregation of Autonomous Systems used to enforce inter-domain routing policies across global internet backbones"
          },
          {
            "key": "C",
            "text": "A security perimeter created by firewalls to separate internal trusted zones from external untrusted WAN segments"
          },
          {
            "key": "D",
            "text": "A physical division of switches into separate VLANs to isolate broadcast domains and improve layer 2 switching efficiency"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A logical grouping of routers/links sharing an Area ID and identical LSDB. Areas reduce routing table size, lower CPU/memory load, and contain SPF recalculations within local boundaries",
        "explainRight": "Chia mạng lớn thành từng khu vực nhỏ để router tính toán nhẹ nhàng và cô lập sự cố cục bộ. (Đáp án đầy đủ: A logical grouping of routers/links sharing an Area ID and identical LSDB. Areas reduce routing table size, lower CPU/memory load, and contain SPF recalculations within local boundaries.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. A hierarchical aggregation of Autonomous Systems used to enforce inter-domain routing policies across global internet backbones: Sai vì đây là mô tả về phân cấp Autonomous System và định tuyến liên miền trong BGP, không phải Area trong OSPF. C. A security perimeter created by firewalls to separate internal trusted zones from external untrusted WAN segments: Sai vì khu vực Area trong OSPF dùng để tối ưu định tuyến chứ không phải tường lửa phân tách vùng bảo mật mạng. D. A physical division of switches into separate VLANs to isolate broadcast domains and improve layer 2 switching efficiency: Sai vì VLAN là phân đoạn chia mạng lớp 2 để cô lập miền broadcast, không phải là khái niệm chia Area ở tầng định tuyến của OSPF."
      },
      {
        "id": "net200-q70",
        "num": 70,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What is the Backbone Area in OSPF?",
        "questionVi": "Backbone Area trong OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "Area 0 is the core transit backbone of an OSPF network; all non-backbone areas must connect directly (or via a virtual link) to Area 0"
          },
          {
            "key": "B",
            "text": "Area 0 is a stub area used exclusively to block external Type-5 LSAs and inject default routes into remote branch offices"
          },
          {
            "key": "C",
            "text": "Area 0 is the default management domain that processes BGP route redistributions and translates path attributes into OSPF metrics"
          },
          {
            "key": "D",
            "text": "Area 0 is a totally stubby area that blocks summary LSAs, external LSAs, and inter-area routing updates from all routers"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Area 0 is the core transit backbone of an OSPF network; all non-backbone areas must connect directly (or via a virtual link) to Area 0",
        "explainRight": "Khu vực lõi trung tâm kết nối mọi vùng nhánh còn lại với nhau. (Đáp án đầy đủ: Area 0 is the core transit backbone of an OSPF network; all non-backbone areas must connect directly (or via a virtual link) to Area 0.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Area 0 is a stub area used exclusively to block external Type-5 LSAs and inject default routes into remote branch offices: Sai vì Area 0 là vùng xương sống trung tâm (Backbone), không phải là stub area chuyên chặn LSA loại 5. C. Area 0 is the default management domain that processes BGP route redistributions and translates path attributes into OSPF metrics: Sai vì Area 0 không đóng vai trò xử lý việc phân phối lại BGP hay dịch thuộc tính đường đi. D. Area 0 is a totally stubby area that blocks summary LSAs, external LSAs, and inter-area routing updates from all routers: Sai vì Area 0 không thể là totally stubby area vì nó là vùng lõi bắt buộc phải lưu chuyển mọi thông tin định tuyến liên vùng."
      },
      {
        "id": "net200-q71",
        "num": 71,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "Differentiate Intra-area route, ABR, and ASBR?",
        "questionVi": "Phân biệt Intra-area route, ABR và ASBR?",
        "options": [
          {
            "key": "A",
            "text": "Intra-area route stays within a single area; ABR (Area Border Router) connects two or more areas (including Area 0); ASBR (Autonomous System Boundary Router) redistributes external non-OSPF routes into OSPF"
          },
          {
            "key": "B",
            "text": "Intra-area route redistributes external routes; ABR acts as a pure layer 2 switch; ASBR manages default gateway propagation"
          },
          {
            "key": "C",
            "text": "Intra-area route spans across multiple areas; ABR connects only external AS systems; ASBR handles internal stub area translation"
          },
          {
            "key": "D",
            "text": "Intra-area route exists only in Area 0; ABR operates exclusively as a passive interface; ASBR filters inter-area summary LSAs"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Intra-area route stays within a single area; ABR (Area Border Router) connects two or more areas (including Area 0); ASBR (Autonomous System Boundary Router) redistributes external non-OSPF routes into OSPF",
        "explainRight": "ABR là cổng nối giữa các vùng OSPF, còn ASBR là cửa khẩu đưa đường đi từ giao thức bên ngoài vào OSPF. (Đáp án đầy đủ: Intra-area route stays within a single area; ABR (Area Border Router) connects two or more areas (including Area 0); ASBR (Autonomous System Boundary Router) redistributes external non-OSPF routes into OSPF.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Intra-area route redistributes external routes; ABR acts as a pure layer 2 switch; ASBR manages default gateway propagation: ABR không phải chỉ kết nối hệ thống ngoài mà là nối các vùng OSPF với nhau, còn ASBR đưa tuyến ngoài vào OSPF. C. Intra-area route spans across multiple areas; ABR connects only external AS systems; ASBR handles internal stub area translation: Đường đi nội vùng (Intra-area) chỉ nằm trong một vùng duy nhất chứ không trải dài qua nhiều vùng. D. Intra-area route exists only in Area 0; ABR operates exclusively as a passive interface; ASBR filters inter-area summary LSAs: Đường đi nội vùng có thể tồn tại ở bất kỳ vùng nào chứ không bắt buộc phải nằm trong Area 0."
      },
      {
        "id": "net200-q72",
        "num": 72,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What is an OSPF Router ID (RID)?",
        "questionVi": "Router ID (RID) trong OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "A dynamic 16-bit autonomous system number identifying the routing protocol domain"
          },
          {
            "key": "B",
            "text": "A 48-bit MAC address assigned to the physical management interface of the routing device"
          },
          {
            "key": "C",
            "text": "A unique 32-bit identifier (formatted as an IPv4 address) distinguishing each router in an OSPF domain"
          },
          {
            "key": "D",
            "text": "A 128-bit IPv6 address used exclusively for multi-area routing authentication purposes"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A unique 32-bit identifier (formatted as an IPv4 address) distinguishing each router in an OSPF domain",
        "explainRight": "Số căn cước duy nhất của từng router trong hệ thống mạng OSPF. (Đáp án đầy đủ: A unique 32-bit identifier (formatted as an IPv4 address) distinguishing each router in an OSPF domain.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A dynamic 16-bit autonomous system number identifying the routing protocol domain: Định danh Router ID không dùng số hiệu AS (AS number) 16-bit của BGP. B. A 48-bit MAC address assigned to the physical management interface of the routing device: Router ID trong OSPF sử dụng định dạng 32-bit tương tự địa chỉ IPv4 chứ không phải địa chỉ MAC 48-bit. D. A 128-bit IPv6 address used exclusively for multi-area routing authentication purposes: Router ID không phải là địa chỉ IPv6 128-bit dùng cho xác thực."
      },
      {
        "id": "net200-q73",
        "num": 73,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What are the default OSPF Hello and Dead intervals?",
        "questionVi": "Chu kỳ Hello và Dead interval mặc định của OSPF là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "On point-to-point links: Hello is 30 seconds, Dead is 120 seconds by default configuration"
          },
          {
            "key": "B",
            "text": "On broadcast networks: Hello is 5 seconds, Dead is 15 seconds across all interface media types"
          },
          {
            "key": "C",
            "text": "On broadcast and point-to-point networks: Hello is 10 seconds, Dead is 40 seconds (on non-broadcast/NBMA: Hello 30s, Dead 120s)"
          },
          {
            "key": "D",
            "text": "On non-broadcast NBMA networks: Hello is 10 seconds, Dead is 40 seconds universally"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "On broadcast and point-to-point networks: Hello is 10 seconds, Dead is 40 seconds (on non-broadcast/NBMA: Hello 30s, Dead 120s)",
        "explainRight": "Cứ 10 giây gửi tin chào một lần; quá 40 giây không thấy hồi âm thì tuyên bố láng giềng đã ngắt kết nối. (Đáp án đầy đủ: On broadcast and point-to-point networks: Hello is 10 seconds, Dead is 40 seconds (on non-broadcast/NBMA: Hello 30s, Dead 120s).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. On point-to-point links: Hello is 30 seconds, Dead is 120 seconds by default configuration: Liên kết point-to-point sử dụng chu kỳ Hello 10 giây và Dead 40 giây, không phải 30 và 120 giây. B. On broadcast networks: Hello is 5 seconds, Dead is 15 seconds across all interface media types: Chu kỳ Hello mặc định cho mạng broadcast là 10 giây và Dead là 40 giây, không phải 5 và 15 giây. D. On non-broadcast NBMA networks: Hello is 10 seconds, Dead is 40 seconds universally: Mạng NBMA (Non-Broadcast Multi-Access) sử dụng chu kỳ Hello 30 giây và Dead 120 giây chứ không phải 10 và 40 giây."
      },
      {
        "id": "net200-q74",
        "num": 74,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What is OSPF interface priority?",
        "questionVi": "Độ ưu tiên cổng OSPF (interface priority) là gì?",
        "options": [
          {
            "key": "A",
            "text": "A decimal number from 1 to 100 controlling administrative distance; setting it to 0 drops all OSPF updates"
          },
          {
            "key": "B",
            "text": "A binary flag of 0 or 1 used to enable authentication; setting it to 0 disables clear-text passwords"
          },
          {
            "key": "C",
            "text": "A value from 0 to 255 (default 1) used in DR/BDR election; setting priority to 0 prevents the router from becoming DR or BDR"
          },
          {
            "key": "D",
            "text": "A value from 1 to 16 used to metric cost calculation; setting priority to 16 forces maximum bandwidth"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A value from 0 to 255 (default 1) used in DR/BDR election; setting priority to 0 prevents the router from becoming DR or BDR",
        "explainRight": "Điểm bầu cử chọn router đại diện; đặt bằng 0 nghĩa là rút lui không ứng cử. (Đáp án đầy đủ: A value from 0 to 255 (default 1) used in DR/BDR election; setting priority to 0 prevents the router from becoming DR or BDR.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A decimal number from 1 to 100 controlling administrative distance; setting it to 0 drops all OSPF updates: Interface priority không phải là chỉ số administrative distance để quyết định độ tin cậy tuyến đường. B. A binary flag of 0 or 1 used to enable authentication; setting it to 0 disables clear-text passwords: Giá trị priority này không phải là cờ nhị phân dùng để bật tắt tính năng xác thực. D. A value from 1 to 16 used to metric cost calculation; setting priority to 16 forces maximum bandwidth: Độ ưu tiên cổng OSPF dùng cho việc bầu chọn DR/BDR chứ không dùng để tính toán metric cost."
      },
      {
        "id": "net200-q75",
        "num": 75,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What does passive-interface do in OSPF?",
        "questionVi": "Tác dụng của passive-interface trong OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "Disables the physical link state tracking to prevent flapping issues on transit subnets"
          },
          {
            "key": "B",
            "text": "Suppresses OSPF Hello packets and adjacencies on that interface while still advertising its connected subnet into OSPF"
          },
          {
            "key": "C",
            "text": "Drops all incoming traffic and blocks all routing protocols including static and connected routes"
          },
          {
            "key": "D",
            "text": "Forces the interface to operate in promiscuous mode to capture all routing protocol updates"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Suppresses OSPF Hello packets and adjacencies on that interface while still advertising its connected subnet into OSPF",
        "explainRight": "Ngừng gửi gói tin OSPF ra cổng người dùng cuối nhưng vẫn báo cho toàn mạng biết dải IP đó. (Đáp án đầy đủ: Suppresses OSPF Hello packets and adjacencies on that interface while still advertising its connected subnet into OSPF.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Disables the physical link state tracking to prevent flapping issues on transit subnets: Nó không liên quan đến việc tắt theo dõi trạng thái đường truyền vật lý (link state tracking). C. Drops all incoming traffic and blocks all routing protocols including static and connected routes: Tính năng này không chặn toàn bộ traffic hay các tuyến kết nối mà chỉ chặn gói tin OSPF Hello. D. Forces the interface to operate in promiscuous mode to capture all routing protocol updates: Nó không đưa cổng mạng vào chế độ promiscuous mà chỉ ngăn việc thiết lập quan hệ láng giềng OSPF."
      },
      {
        "id": "net200-q76",
        "num": 76,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What are the requirements for OSPF neighbor adjacency?",
        "questionVi": "Các điều kiện để thiết lập quan hệ láng giềng trong OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "Matching routing table size, matching Hop Count limits, matching BGP attributes, and matching VLAN tags"
          },
          {
            "key": "B",
            "text": "Matching Process ID, matching MAC addresses, matching TCP port numbers, and identical interface priorities"
          },
          {
            "key": "C",
            "text": "Matching Autonomous System number, matching metric weights, matching administrative distance, and identical IP addresses"
          },
          {
            "key": "D",
            "text": "Matching Area ID, matching subnet/mask, matching Hello/Dead intervals, matching authentication, matching stub flags, matching interface MTU, and unique Router IDs"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Matching Area ID, matching subnet/mask, matching Hello/Dead intervals, matching authentication, matching stub flags, matching interface MTU, and unique Router IDs",
        "explainRight": "Hai router phải khớp vùng, khớp dải mạng, khớp nhịp đồng hồ Hello/Dead, khớp mật khẩu và kích thước MTU. (Đáp án đầy đủ: Matching Area ID, matching subnet/mask, matching Hello/Dead intervals, matching authentication, matching stub flags, matching interface MTU, and unique Router IDs.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Matching routing table size, matching Hop Count limits, matching BGP attributes, and matching VLAN tags: OSPF không dựa vào giới hạn Hop Count hay các thuộc tính BGP để thiết lập quan hệ láng giềng. B. Matching Process ID, matching MAC addresses, matching TCP port numbers, and identical interface priorities: Process ID của OSPF có ý nghĩa cục bộ trên từng router nên không bắt buộc phải khớp nhau giữa các láng giềng. C. Matching Autonomous System number, matching metric weights, matching administrative distance, and identical IP addresses: OSPF không yêu cầu khớp Autonomous System number hay sử dụng các trọng số metric giống EIGRP."
      },
      {
        "id": "net200-q77",
        "num": 77,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "How do you reset OSPF neighbor adjacencies?",
        "questionVi": "Lệnh khởi động lại tiến trình láng giềng OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "clear ip ospf process (or clear ip ospf neighbor)"
          },
          {
            "key": "B",
            "text": "restart ip routing ospf"
          },
          {
            "key": "C",
            "text": "clear ospf neighbor-table force"
          },
          {
            "key": "D",
            "text": "reset ospf adjacency-database"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "clear ip ospf process (or clear ip ospf neighbor)",
        "explainRight": "Dùng để làm mới phiên OSPF sau khi thay đổi Router ID hoặc cấu hình tham số. (Đáp án đầy đủ: clear ip ospf process (or clear ip ospf neighbor).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. restart ip routing ospf: Lệnh restart ip routing ospf không phải là cú pháp chuẩn để khởi động lại tiến trình OSPF. C. clear ospf neighbor-table force: Lệnh clear ospf neighbor-table force không hợp lệ đối với giao diện dòng lệnh của Cisco. D. reset ospf adjacency-database: Lệnh reset ospf adjacency-database không tồn tại trong hệ điều hành Cisco IOS."
      },
      {
        "id": "net200-q78",
        "num": 78,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What are Designated Router (DR) and Backup Designated Router (BDR) and how are they elected?",
        "questionVi": "DR và BDR là gì và được bầu chọn như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "DR serves as the primary route summarization point, elected automatically based on the highest physical port speed"
          },
          {
            "key": "B",
            "text": "DR functions as an authentication server for the area, elected sequentially using the lowest Router ID first"
          },
          {
            "key": "C",
            "text": "DR acts as the central LSA exchange hub on multiaccess networks to minimize adjacencies, while BDR acts as standby backup. Election picks the highest OSPF interface priority first, then highest Router ID (configured RID -> highest Loopback IP -> highest active physical IP)"
          },
          {
            "key": "D",
            "text": "DR acts as the default gateway for inter-domain routing, elected strictly by lowest metric cost and lowest IP address"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "DR acts as the central LSA exchange hub on multiaccess networks to minimize adjacencies, while BDR acts as standby backup. Election picks the highest OSPF interface priority first, then highest Router ID (configured RID -> highest Loopback IP -> highest active physical IP)",
        "explainRight": "Bầu ra \"lớp trưởng\" DR và \"lớp phó\" BDR để gom và phát thông tin chung thay vì các router nhắn chéo hỗn loạn. (Đáp án đầy đủ: DR acts as the central LSA exchange hub on multiaccess networks to minimize adjacencies, while BDR acts as standby backup. Election picks the highest OSPF interface priority first, then highest Router ID (configured RID -> highest Loopback IP -> highest active physical IP).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. DR serves as the primary route summarization point, elected automatically based on the highest physical port speed: DR không được bầu chọn dựa trên tốc độ cổng vật lý mà dựa vào interface priority và Router ID cao nhất. B. DR functions as an authentication server for the area, elected sequentially using the lowest Router ID first: DR không đóng vai trò server xác thực và quá trình bầu chọn ưu tiên giá trị cao nhất chứ không phải thấp nhất. D. DR acts as the default gateway for inter-domain routing, elected strictly by lowest metric cost and lowest IP address: DR không phải là default gateway cho routing liên miền và việc bầu chọn dựa trên priority cao nhất chứ không phải metric thấp nhất."
      },
      {
        "id": "net200-q79",
        "num": 79,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What are the five OSPF packet types?",
        "questionVi": "Năm loại gói tin của OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "Discovery, Advertisement, Request, Response, and Validation packet types"
          },
          {
            "key": "B",
            "text": "Keepalive, Initialization, Routing-Update, Summary-Adv, and Link-State packets"
          },
          {
            "key": "C",
            "text": "Hello (discovery/keepalive), DBD (Database Description summary), LSR (Link-State Request), LSU (Link-State Update), and LSAck (Link-State Acknowledgement)"
          },
          {
            "key": "D",
            "text": "Query, Reply, Update, Acknowledgement, and Hello packet types used for link-state synchronization"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Hello (discovery/keepalive), DBD (Database Description summary), LSR (Link-State Request), LSU (Link-State Update), and LSAck (Link-State Acknowledgement)",
        "explainRight": "Gói chào hỏi, gói tóm tắt danh mục, gói hỏi xin chi tiết, gói gửi cập nhật và gói xác nhận đã nhận. (Đáp án đầy đủ: Hello (discovery/keepalive), DBD (Database Description summary), LSR (Link-State Request), LSU (Link-State Update), and LSAck (Link-State Acknowledgement).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Discovery, Advertisement, Request, Response, and Validation packet types: Các thuật ngữ Advertisement, Response, Validation không nằm trong danh mục tên gói tin OSPF. B. Keepalive, Initialization, Routing-Update, Summary-Adv, and Link-State packets: Bộ tên gọi này bị nhầm lẫn với các thuật ngữ chung chứ không khớp chính xác với 5 bản tin tiêu chuẩn OSPF. D. Query, Reply, Update, Acknowledgement, and Hello packet types used for link-state synchronization: Các gói tin Query và Reply thuộc về giao thức EIGRP chứ không phải chuẩn 5 loại gói tin của OSPF."
      },
      {
        "id": "net200-q80",
        "num": 80,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "Explain the seven OSPF neighbor states in order?",
        "questionVi": "Giải thích theo thứ tự 7 trạng thái láng giềng của OSPF?",
        "options": [
          {
            "key": "A",
            "text": "1. Down; 2. Init; 3. Two-Way; 4. Loading; 5. Exchange; 6. Full; 7. Established"
          },
          {
            "key": "B",
            "text": "1. Down; 2. Attempt; 3. Init; 4. Two-Way; 5. ExStart; 6. Exchange; 7. Full synchronization state"
          },
          {
            "key": "C",
            "text": "1. Down (no Hello yet); 2. Init (Hello received); 3. 2-Way (bidirectional Hello seen, DR/BDR elected); 4. ExStart (master/slave election & NULL DBD); 5. Exchange (actual DBDs exchanged); 6. Loading (LSR/LSU/LSAck exchange for missing routes); 7. Full (LSDB fully synchronized)"
          },
          {
            "key": "D",
            "text": "1. Idle; 2. Connect; 3. Active; 4. OpenSent; 5. OpenConfirm; 6. Established; 7. Synchronized"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "1. Down (no Hello yet); 2. Init (Hello received); 3. 2-Way (bidirectional Hello seen, DR/BDR elected); 4. ExStart (master/slave election & NULL DBD); 5. Exchange (actual DBDs exchanged); 6. Loading (LSR/LSU/LSAck exchange for missing routes); 7. Full (LSDB fully synchronized)",
        "explainRight": "Quá trình từ lúc chưa nghe thấy nhau cho tới khi chào hỏi hai chiều, đối chiếu mục lục, bổ sung phần thiếu và đồng bộ hoàn tất. (Đáp án đầy đủ: 1. Down (no Hello yet); 2. Init (Hello received); 3. 2-Way (bidirectional Hello seen, DR/BDR elected); 4. ExStart (master/slave election & NULL DBD); 5. Exchange (actual DBDs exchanged); 6. Loading (LSR/LSU/LSAck exchange for missing routes); 7. Full (LSDB fully synchronized).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Down; 2. Init; 3. Two-Way; 4. Loading; 5. Exchange; 6. Full; 7. Established: Thứ tự Loading và Exchange bị đảo ngược; Exchange diễn ra trước Loading trong tiến trình OSPF. B. 1. Down; 2. Attempt; 3. Init; 4. Two-Way; 5. ExStart; 6. Exchange; 7. Full synchronization state: Trạng thái Attempt chỉ xuất hiện trên các mạng NBMA khi cấu hình thủ công chứ không nằm trong chuỗi chuẩn tuần tự 7 trạng thái. D. 1. Idle; 2. Connect; 3. Active; 4. OpenSent; 5. OpenConfirm; 6. Established; 7. Synchronized: Các trạng thái Idle, Connect, Active, OpenSent, OpenConfirm thuộc về giao thức BGP chứ không phải OSPF."
      },
      {
        "id": "net200-q81",
        "num": 81,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What are the five OSPF network types?",
        "questionVi": "Năm loại mạng (network types) của OSPF là gì?",
        "options": [
          {
            "key": "A",
            "text": "Broadcast (Ethernet default, DR/BDR, 10s/40s), Non-broadcast (Frame Relay multipoint default, DR/BDR, 30s/120s), Point-to-point (no DR/BDR, 10s/40s), Point-to-multipoint (no DR/BDR, 30s/120s), and Loopback (advertised as /32 host route)"
          },
          {
            "key": "B",
            "text": "Ethernet, Serial, Fiber, Wireless, and Virtual-link (using standard 30s/120s timers for all interface types)"
          },
          {
            "key": "C",
            "text": "Static, Dynamic, Hybrid, Stub, and Backbone (where DR/BDR is elected based on the interface bandwidth only)"
          },
          {
            "key": "D",
            "text": "Broadcast, Unicast, Multicast, Anycast, and Point-to-point (all requiring DR/BDR election and 10s/40s timers)"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Broadcast (Ethernet default, DR/BDR, 10s/40s), Non-broadcast (Frame Relay multipoint default, DR/BDR, 30s/120s), Point-to-point (no DR/BDR, 10s/40s), Point-to-multipoint (no DR/BDR, 30s/120s), and Loopback (advertised as /32 host route)",
        "explainRight": "Tùy loại hạ tầng đường truyền mà OSPF điều chỉnh việc bầu DR/BDR và chu kỳ Hello/Dead cho phù hợp. (Đáp án đầy đủ: Broadcast (Ethernet default, DR/BDR, 10s/40s), Non-broadcast (Frame Relay multipoint default, DR/BDR, 30s/120s), Point-to-point (no DR/BDR, 10s/40s), Point-to-multipoint (no DR/BDR, 30s/120s), and Loopback (advertised as /32 host route).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Ethernet, Serial, Fiber, Wireless, and Virtual-link (using standard 30s/120s timers for all interface types): Đây là các loại môi trường vật lý, OSPF không phân loại network type dựa trên chất liệu truyền dẫn như Fiber hay Wireless. C. Static, Dynamic, Hybrid, Stub, and Backbone (where DR/BDR is elected based on the interface bandwidth only): Đây là các khái niệm về phương thức định tuyến hoặc phân loại vùng (Area), không phải các kiểu kết nối lớp 2 mà OSPF hỗ trợ. D. Broadcast, Unicast, Multicast, Anycast, and Point-to-point (all requiring DR/BDR election and 10s/40s timers): Đây là các kiểu truyền tin IPv6/IPv4 chứ không phải các loại network type đặc thù của OSPF điều khiển việc bầu DR/BDR."
      },
      {
        "id": "net200-q82",
        "num": 82,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "What authentication types does OSPF support?",
        "questionVi": "OSPF hỗ trợ những kiểu xác thực nào?",
        "options": [
          {
            "key": "A",
            "text": "PAP, CHAP, and MS-CHAPv2 (standard PPP authentication methods used for OSPF neighbor adjacency)"
          },
          {
            "key": "B",
            "text": "WPA2-Enterprise, RADIUS, and TACACS+ (centralized authentication for OSPF routing updates)"
          },
          {
            "key": "C",
            "text": "RSA Signatures, AES-256 Encryption, and Diffie-Hellman Key Exchange (integrated into OSPFv2 core)"
          },
          {
            "key": "D",
            "text": "Null (none), Simple password (plaintext), and MD5 cryptographic authentication (plus SHA in OSPFv3/newer IOS)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Null (none), Simple password (plaintext), and MD5 cryptographic authentication (plus SHA in OSPFv3/newer IOS)",
        "explainRight": "Bảo vệ quá trình trao đổi tuyến đường giữa các router bằng mật khẩu hoặc mã băm xác thực. (Đáp án đầy đủ: Null (none), Simple password (plaintext), and MD5 cryptographic authentication (plus SHA in OSPFv3/newer IOS).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. PAP, CHAP, and MS-CHAPv2 (standard PPP authentication methods used for OSPF neighbor adjacency): Đây là các giao thức xác thực lớp 2 dùng cho kết nối Point-to-Point, không phải các kiểu xác thực tích hợp trong gói tin OSPF. B. WPA2-Enterprise, RADIUS, and TACACS+ (centralized authentication for OSPF routing updates): Đây là các cơ chế xác thực người dùng truy cập thiết bị, không dùng để xác thực các bản tin định tuyến giữa các router. C. RSA Signatures, AES-256 Encryption, and Diffie-Hellman Key Exchange (integrated into OSPFv2 core): Đây là các thuật toán mã hóa và trao đổi khóa dùng trong VPN/IPsec, OSPF nguyên bản chỉ hỗ trợ Plaintext và MD5/SHA."
      },
      {
        "id": "net200-q83",
        "num": 83,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "Explain OSPF LSA Types 1, 2, 3, 4, 5, and 7?",
        "questionVi": "Giải thích các loại bản tin OSPF LSA Type 1, 2, 3, 4, 5 và 7?",
        "options": [
          {
            "key": "A",
            "text": "Type 1 (Intra-area); Type 2 (Inter-area); Type 3 (External); Type 4 (NSSA); Type 5 (Multicast); Type 7 (Broadcast)"
          },
          {
            "key": "B",
            "text": "Type 1 (Network LSA); Type 2 (Router LSA); Type 3 (External LSA); Type 4 (Summary LSA); Type 5 (NSSA LSA); Type 7 (ASBR LSA)"
          },
          {
            "key": "C",
            "text": "Type 1 (Standard LSA); Type 2 (Extended LSA); Type 3 (Internal LSA); Type 4 (External LSA); Type 5 (Stub LSA); Type 7 (Virtual LSA)"
          },
          {
            "key": "D",
            "text": "Type 1 (Router LSA: local router links within area); Type 2 (Network LSA: DR list of segment routers within area); Type 3 (Summary LSA: ABR inter-area routes); Type 4 (ASBR Summary LSA: ABR advertises ASBR location); Type 5 (External LSA: ASBR external redistributed routes); Type 7 (NSSA External LSA: external routes inside NSSA, translated to Type 5 by ABR)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Type 1 (Router LSA: local router links within area); Type 2 (Network LSA: DR list of segment routers within area); Type 3 (Summary LSA: ABR inter-area routes); Type 4 (ASBR Summary LSA: ABR advertises ASBR location); Type 5 (External LSA: ASBR external redistributed routes); Type 7 (NSSA External LSA: external routes inside NSSA, translated to Type 5 by ABR)",
        "explainRight": "Mỗi loại LSA đóng vai trò bản tin thông báo thông tin nội bộ router, đoạn mạng chung, tuyến liên vùng hoặc tuyến từ bên ngoài đưa vào. (Đáp án đầy đủ: Type 1 (Router LSA: local router links within area); Type 2 (Network LSA: DR list of segment routers within area); Type 3 (Summary LSA: ABR inter-area routes); Type 4 (ASBR Summary LSA: ABR advertises ASBR location); Type 5 (External LSA: ASBR external redistributed routes); Type 7 (NSSA External LSA: external routes inside NSSA, translated to Type 5 by ABR).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Type 1 (Intra-area); Type 2 (Inter-area); Type 3 (External); Type 4 (NSSA); Type 5 (Multicast); Type 7 (Broadcast): Đây là cách phân loại dựa trên phạm vi tuyến đường, không phản ánh đúng định nghĩa kỹ thuật của từng loại LSA cụ thể. B. Type 1 (Network LSA); Type 2 (Router LSA); Type 3 (External LSA); Type 4 (Summary LSA); Type 5 (NSSA LSA); Type 7 (ASBR LSA): Lựa chọn này bị hoán đổi sai tên gọi giữa Type 1 (Router) và Type 2 (Network), cũng như sai lệch hoàn toàn các loại từ Type 3 đến Type 7. C. Type 1 (Standard LSA); Type 2 (Extended LSA); Type 3 (Internal LSA); Type 4 (External LSA); Type 5 (Stub LSA); Type 7 (Virtual LSA): Các tên gọi Standard, Extended, Internal không phải là thuật ngữ chuẩn được định nghĩa trong RFC cho các loại OSPF LSA."
      },
      {
        "id": "net200-q84",
        "num": 84,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "Which three tables are maintained by an OSPF router?",
        "questionVi": "Ba bảng dữ liệu mà OSPF duy trì là gì?",
        "options": [
          {
            "key": "A",
            "text": "Neighbor Table, Topology Table (LSDB), and Routing Table"
          },
          {
            "key": "B",
            "text": "RIB (Routing Information Base), FIB (Forwarding Information Base), and LIB (Label Information Base)"
          },
          {
            "key": "C",
            "text": "ARP Table, NAT Table, and Flow Table"
          },
          {
            "key": "D",
            "text": "Adjacency Table, Forwarding Table, and MAC Address Table"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Neighbor Table, Topology Table (LSDB), and Routing Table",
        "explainRight": "Danh bạ láng giềng, bản đồ trạng thái liên kết toàn vùng và bảng đường đi tốt nhất. (Đáp án đầy đủ: Neighbor Table, Topology Table (LSDB), and Routing Table.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. RIB (Routing Information Base), FIB (Forwarding Information Base), and LIB (Label Information Base): LIB là bảng dùng trong MPLS, còn FIB là bảng chuyển tiếp dữ liệu của CEF, không phải bảng đặc thù riêng của OSPF. C. ARP Table, NAT Table, and Flow Table: ARP và NAT là các bảng chức năng hệ thống, không liên quan đến cấu trúc dữ liệu của giao thức OSPF. D. Adjacency Table, Forwarding Table, and MAC Address Table: MAC Address Table thuộc về Switch (Layer 2), không phải là bảng dữ liệu chính mà giao thức định tuyến OSPF duy trì."
      },
      {
        "id": "net200-q85",
        "num": 85,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "Explain OSPF Virtual Link and Stub Area types (Stub, Totally Stubby, NSSA, Totally NSSA)?",
        "questionVi": "Giải thích OSPF Virtual Link và các loại Stub Area?",
        "options": [
          {
            "key": "A",
            "text": "A Virtual Link logically connects a disconnected area's ABR across a transit area back to Area 0. Stub areas filter routes: Stub blocks Type 4 & 5 LSAs (injects default route); Totally Stubby blocks Type 3, 4 & 5; NSSA blocks Type 5 from Area 0 but allows local Type 7 external routes; Totally NSSA blocks Type 3, 4 & 5 while allowing local Type 7 routes"
          },
          {
            "key": "B",
            "text": "Virtual Link is used to bypass the ABR. Stub areas block Type 1 & 2 LSAs to save memory; Totally Stubby areas only allow Type 5 LSAs from external ASBRs"
          },
          {
            "key": "C",
            "text": "Virtual Link connects two non-backbone areas directly. Stub areas allow all LSAs but prioritize internal routes; NSSA converts Type 5 to Type 7 to bypass Area 0 requirements"
          },
          {
            "key": "D",
            "text": "Virtual Link connects an ASBR to the ISP. Stub areas block Type 3 LSAs only; NSSA is used when an area has no ABR and must use a default route for all traffic"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A Virtual Link logically connects a disconnected area's ABR across a transit area back to Area 0. Stub areas filter routes: Stub blocks Type 4 & 5 LSAs (injects default route); Totally Stubby blocks Type 3, 4 & 5; NSSA blocks Type 5 from Area 0 but allows local Type 7 external routes; Totally NSSA blocks Type 3, 4 & 5 while allowing local Type 7 routes",
        "explainRight": "Virtual Link giúp bắc cầu về Area 0, còn các loại Stub Area giúp lọc bớt bản tin bên ngoài để giảm tải cho router nhánh. (Đáp án đầy đủ: A Virtual Link logically connects a disconnected area's ABR across a transit area back to Area 0. Stub areas filter routes: Stub blocks Type 4 & 5 LSAs (injects default route); Totally Stubby blocks Type 3, 4 & 5; NSSA blocks Type 5 from Area 0 but allows local Type 7 external routes; Totally NSSA blocks Type 3, 4 & 5 while allowing local Type 7 routes.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Virtual Link is used to bypass the ABR. Stub areas block Type 1 & 2 LSAs to save memory; Totally Stubby areas only allow Type 5 LSAs from external ASBRs: Stub area không bao giờ chặn Type 1 và Type 2 vì đó là các bản tin cơ bản để hình thành topology trong vùng. C. Virtual Link connects two non-backbone areas directly. Stub areas allow all LSAs but prioritize internal routes; NSSA converts Type 5 to Type 7 to bypass Area 0 requirements: Virtual Link bắt buộc phải kết nối về Area 0 chứ không phải nối hai vùng non-backbone với nhau; NSSA không dùng để bypass Area 0. D. Virtual Link connects an ASBR to the ISP. Stub areas block Type 3 LSAs only; NSSA is used when an area has no ABR and must use a default route for all traffic: Virtual Link không dùng để nối ASBR tới ISP; Stub area chặn Type 4 và 5 chứ không phải chỉ chặn Type 3."
      },
      {
        "id": "net200-q86",
        "num": 86,
        "section": "Phần 4: Giao Thức Định Tuyến OSPF (Câu 68–86)",
        "questionEn": "Can OSPF run over a GRE Tunnel and how is basic OSPF configured?",
        "questionVi": "OSPF có chạy qua GRE Tunnel được không và cấu hình OSPF cơ bản thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Yes, but it requires 'ip ospf network point-to-point' on all physical interfaces and a BGP redistribution command"
          },
          {
            "key": "B",
            "text": "No, OSPF cannot run over GRE because GRE is a Layer 2 protocol and OSPF requires Layer 3 broadcast support"
          },
          {
            "key": "C",
            "text": "Yes, OSPF runs over GRE tunnels because GRE supports multicast. Basic config: router ospf 100 -> network 172.16.1.0 0.0.0.255 area 0"
          },
          {
            "key": "D",
            "text": "No, GRE tunnels only support unicast traffic, so OSPF neighbors will stay in the DOWN state unless static neighbors are configured"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Yes, OSPF runs over GRE tunnels because GRE supports multicast. Basic config: router ospf 100 -> network 172.16.1.0 0.0.0.255 area 0",
        "explainRight": "GRE truyền được gói tin đa hướng nên OSPF hoạt động bình thường qua đường hầm này. (Đáp án đầy đủ: Yes, OSPF runs over GRE tunnels because GRE supports multicast. Basic config: router ospf 100 -> network 172.16.1.0 0.0.0.255 area 0.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Yes, but it requires 'ip ospf network point-to-point' on all physical interfaces and a BGP redistribution command: Cấu hình OSPF cơ bản không bắt buộc phải có lệnh redistribution từ BGP để chạy qua GRE. B. No, OSPF cannot run over GRE because GRE is a Layer 2 protocol and OSPF requires Layer 3 broadcast support: GRE là giao thức đóng gói Layer 3 (IP-in-IP), không phải Layer 2, và OSPF chạy tốt trên đó. D. No, GRE tunnels only support unicast traffic, so OSPF neighbors will stay in the DOWN state unless static neighbors are configured: GRE thực tế hỗ trợ đóng gói cả gói tin Multicast, do đó OSPF (dùng multicast 224.0.0.5/6) hoạt động bình thường."
      },
      {
        "id": "net200-q87",
        "num": 87,
        "section": "Phần 5: Giao Thức Định Tuyến BGP (Câu 87–91)",
        "questionEn": "Explain Border Gateway Protocol (BGP) and its core features?",
        "questionVi": "Giải thích BGP và các đặc điểm cốt lõi của nó?",
        "options": [
          {
            "key": "A",
            "text": "BGP is an open-standard path-vector EGP exchanging routing information between Autonomous Systems over TCP port 179 (eBGP AD 20, iBGP AD 200; Keepalive 60s, Hold 180s), making policy-based routing decisions"
          },
          {
            "key": "B",
            "text": "BGP is a proprietary Cisco protocol that uses DUAL algorithm to ensure loop-free paths between different areas (AD 115, Keepalive 5s)"
          },
          {
            "key": "C",
            "text": "BGP is a link-state IGP that uses UDP port 520 to exchange metrics between routers within a single AS (AD 110, Keepalive 30s)"
          },
          {
            "key": "D",
            "text": "BGP is a distance-vector protocol using the Bellman-Ford algorithm over TCP port 443 to connect branch offices (AD 90, Hold 90s)"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "BGP is an open-standard path-vector EGP exchanging routing information between Autonomous Systems over TCP port 179 (eBGP AD 20, iBGP AD 200; Keepalive 60s, Hold 180s), making policy-based routing decisions",
        "explainRight": "Giao thức định tuyến xương sống của Internet toàn cầu, chọn đường dựa trên chính sách và chạy trên kết nối tin cậy TCP cổng 179. (Đáp án đầy đủ: BGP is an open-standard path-vector EGP exchanging routing information between Autonomous Systems over TCP port 179 (eBGP AD 20, iBGP AD 200; Keepalive 60s, Hold 180s), making policy-based routing decisions.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. BGP is a proprietary Cisco protocol that uses DUAL algorithm to ensure loop-free paths between different areas (AD 115, Keepalive 5s): BGP là chuẩn mở (Open Standard), không phải giao thức độc quyền của Cisco và không sử dụng thuật toán DUAL (của EIGRP). C. BGP is a link-state IGP that uses UDP port 520 to exchange metrics between routers within a single AS (AD 110, Keepalive 30s): BGP là Path-vector EGP chạy trên TCP 179, không phải Link-state IGP chạy trên UDP 520 (đó là đặc điểm của RIP/OSPF). D. BGP is a distance-vector protocol using the Bellman-Ford algorithm over TCP port 443 to connect branch offices (AD 90, Hold 90s): BGP không dùng thuật toán Bellman-Ford và không chạy trên cổng 443 (HTTPS)."
      },
      {
        "id": "net200-q88",
        "num": 88,
        "section": "Phần 5: Giao Thức Định Tuyến BGP (Câu 87–91)",
        "questionEn": "Can routers on different subnets become BGP neighbors, and how do eBGP and iBGP differ?",
        "questionVi": "Hai router khác subnet có thể làm BGP neighbors không, và eBGP khác iBGP thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Yes, but only if they are in the same OSPF area and use the same Process ID to synchronize their databases"
          },
          {
            "key": "B",
            "text": "Yes, because BGP uses unicast TCP sessions rather than Layer 2 multicast. iBGP forms sessions within the same AS (AD 200), while eBGP forms sessions between different ASs (AD 20)"
          },
          {
            "key": "C",
            "text": "No, eBGP requires a direct physical link, while iBGP requires the 'multihop' command to be enabled by default for all sessions"
          },
          {
            "key": "D",
            "text": "No, BGP neighbors must be directly connected on the same subnet because BGP relies on ARP to discover peer MAC addresses"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Yes, because BGP uses unicast TCP sessions rather than Layer 2 multicast. iBGP forms sessions within the same AS (AD 200), while eBGP forms sessions between different ASs (AD 20)",
        "explainRight": "Chỉ cần có đường IP kết nối tới nhau qua TCP 179 là làm láng giềng được; iBGP dùng nội bộ trong một nhà mạng, eBGP dùng giữa hai nhà mạng khác nhau. (Đáp án đầy đủ: Yes, because BGP uses unicast TCP sessions rather than Layer 2 multicast. iBGP forms sessions within the same AS (AD 200), while eBGP forms sessions between different ASs (AD 20).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Yes, but only if they are in the same OSPF area and use the same Process ID to synchronize their databases: BGP hoạt động độc lập với OSPF, không yêu cầu chung OSPF area hay Process ID để thiết lập láng giềng. C. No, eBGP requires a direct physical link, while iBGP requires the 'multihop' command to be enabled by default for all sessions: eBGP mặc định yêu cầu TTL=1 nhưng có thể chỉnh sửa, còn iBGP mặc định cho phép multihop mà không cần lệnh đặc biệt. D. No, BGP neighbors must be directly connected on the same subnet because BGP relies on ARP to discover peer MAC addresses: BGP thiết lập láng giềng qua TCP Unicast nên các router có thể cách nhau nhiều hop, không cần chung subnet hay ARP lớp 2."
      },
      {
        "id": "net200-q89",
        "num": 89,
        "section": "Phần 5: Giao Thức Định Tuyến BGP (Câu 87–91)",
        "questionEn": "Explain the loop-prevention mechanisms in BGP?",
        "questionVi": "Giải thích cơ chế chống lặp vòng trong BGP?",
        "options": [
          {
            "key": "A",
            "text": "1. Feasible Successor check: BGP uses a backup route if the primary fails. 2. STP: BGP uses Spanning Tree to block redundant ports"
          },
          {
            "key": "B",
            "text": "1. Poison Reverse: BGP sets the metric to infinity for looped routes. 2. TTL Security: BGP drops packets with a TTL value greater than 1"
          },
          {
            "key": "C",
            "text": "1. AS_PATH check: an eBGP router drops any route update containing its own AS number in the AS_PATH. 2. iBGP Split Horizon: routes learned from one iBGP peer are not re-advertised to another iBGP peer"
          },
          {
            "key": "D",
            "text": "1. Route Tagging: BGP tags routes with a unique ID to prevent loops. 2. Area ID check: BGP drops routes coming from a different Area 0"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "1. AS_PATH check: an eBGP router drops any route update containing its own AS number in the AS_PATH. 2. iBGP Split Horizon: routes learned from one iBGP peer are not re-advertised to another iBGP peer",
        "explainRight": "Thấy mã AS của chính mình xuất hiện lại trong danh sách đường đi thì loại bỏ ngay để tránh vòng lặp. (Đáp án đầy đủ: 1. AS_PATH check: an eBGP router drops any route update containing its own AS number in the AS_PATH. 2. iBGP Split Horizon: routes learned from one iBGP peer are not re-advertised to another iBGP peer.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Feasible Successor check: BGP uses a backup route if the primary fails. 2. STP: BGP uses Spanning Tree to block redundant ports: Feasible Successor là khái niệm của EIGRP, và STP là giao thức chống lặp ở Layer 2, không liên quan đến cơ chế của BGP. B. 1. Poison Reverse: BGP sets the metric to infinity for looped routes. 2. TTL Security: BGP drops packets with a TTL value greater than 1: Poison Reverse là cơ chế của Distance Vector IGP (như RIP), không phải cơ chế chống lặp chính của BGP. D. 1. Route Tagging: BGP tags routes with a unique ID to prevent loops. 2. Area ID check: BGP drops routes coming from a different Area 0: BGP không sử dụng khái niệm Area ID như OSPF để chống lặp, và Route Tagging không phải cơ chế chống lặp mặc định."
      },
      {
        "id": "net200-q90",
        "num": 90,
        "section": "Phần 5: Giao Thức Định Tuyến BGP (Câu 87–91)",
        "questionEn": "What is the difference between a Hard Reset and a Soft Reset in BGP?",
        "questionVi": "Sự khác nhau giữa Hard Reset và Soft Reset trong BGP là gì?",
        "options": [
          {
            "key": "A",
            "text": "Hard reset only clears the cache; Soft reset reboots the entire router and reloads the configuration file"
          },
          {
            "key": "B",
            "text": "Hard reset (clear ip bgp *) tears down the TCP session and clears the BGP table (disrupting traffic); Soft reset (clear ip bgp * soft) keeps the TCP session active while re- evaluating routing policies"
          },
          {
            "key": "C",
            "text": "Hard reset updates the routing table without dropping neighbors; Soft reset disconnects the physical interface to clear the ARP table"
          },
          {
            "key": "D",
            "text": "Hard reset is used for iBGP sessions only; Soft reset is used exclusively for eBGP sessions to change the AS_PATH"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Hard reset (clear ip bgp *) tears down the TCP session and clears the BGP table (disrupting traffic); Soft reset (clear ip bgp * soft) keeps the TCP session active while re- evaluating routing policies",
        "explainRight": "Hard reset ngắt kết nối làm gián đoạn mạng tạm thời, còn Soft reset chỉ cập nhật lại luật lọc đường đi một cách êm ái. (Đáp án đầy đủ: Hard reset (clear ip bgp *) tears down the TCP session and clears the BGP table (disrupting traffic); Soft reset (clear ip bgp * soft) keeps the TCP session active while re- evaluating routing policies.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Hard reset only clears the cache; Soft reset reboots the entire router and reloads the configuration file: Hard reset trong BGP không phải xóa cache mà là ngắt phiên TCP; Soft reset không hề reboot router. C. Hard reset updates the routing table without dropping neighbors; Soft reset disconnects the physical interface to clear the ARP table: Mô tả bị ngược: Hard reset chắc chắn làm rớt láng giềng (drop neighbors), còn Soft reset không tác động đến interface vật lý hay ARP. D. Hard reset is used for iBGP sessions only; Soft reset is used exclusively for eBGP sessions to change the AS_PATH: Cả Hard và Soft reset đều có thể áp dụng cho cả iBGP và eBGP, không phân biệt loại phiên thiết lập."
      },
      {
        "id": "net200-q91",
        "num": 91,
        "section": "Phần 5: Giao Thức Định Tuyến BGP (Câu 87–91)",
        "questionEn": "What are the four BGP message types and six BGP neighbor states?",
        "questionVi": "Bốn loại bản tin và sáu trạng thái của BGP là gì?",
        "options": [
          {
            "key": "A",
            "text": "Message types: Hello, Update, Query, and Reply. States: Down -> Init -> Two-Way -> ExStart -> Exchange -> Loading -> Full"
          },
          {
            "key": "B",
            "text": "Message types: Open, Keepalive, Update, and Notification. States: Idle -> Connect -> Active -> OpenSent -> OpenConfirm -> Established"
          },
          {
            "key": "C",
            "text": "Message types: Request, Reply, Release, and Inform. States: Listening -> Learning -> Forwarding -> Blocking -> Disabled"
          },
          {
            "key": "D",
            "text": "Message types: SYN, ACK, FIN, and RST. States: Listen -> SYN-Sent -> SYN-Received -> Established -> Close-Wait -> Last-ACK"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Message types: Open, Keepalive, Update, and Notification. States: Idle -> Connect -> Active -> OpenSent -> OpenConfirm -> Established",
        "explainRight": "Quá trình mở kết nối TCP, trao đổi thông số ban đầu, duy trì nhịp sống và gửi cập nhật tuyến đường khi đã đạt trạng thái Established. (Đáp án đầy đủ: Message types: Open, Keepalive, Update, and Notification. States: Idle -> Connect -> Active -> OpenSent -> OpenConfirm -> Established.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Message types: Hello, Update, Query, and Reply. States: Down -> Init -> Two-Way -> ExStart -> Exchange -> Loading -> Full: Đây là các loại bản tin và trạng thái của giao thức định tuyến OSPF, không phải BGP. C. Message types: Request, Reply, Release, and Inform. States: Listening -> Learning -> Forwarding -> Blocking -> Disabled: Đây là các loại bản tin DHCP và trạng thái của giao thức Spanning Tree (STP). D. Message types: SYN, ACK, FIN, and RST. States: Listen -> SYN-Sent -> SYN-Received -> Established -> Close-Wait -> Last-ACK: Đây là các cờ điều khiển và trạng thái của quá trình bắt tay ba bước trong giao thức TCP."
      },
      {
        "id": "net200-q92",
        "num": 92,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "What makes Palo Alto Networks a Next-Generation Firewall (NGFW) and what are its core features?",
        "questionVi": "Điều gì tạo nên tường lửa thế hệ mới Palo Alto NGFW và các tính năng chính của nó?",
        "options": [
          {
            "key": "A",
            "text": "Operates as a traditional proxy server that caches web content and filters URLs based on static blacklists without application-layer awareness"
          },
          {
            "key": "B",
            "text": "Primarily provides signature-based antivirus and local sandbox analysis using only IP addresses and port numbers for traffic classification"
          },
          {
            "key": "C",
            "text": "Focuses on stateful packet filtering, basic port-based access control lists (ACLs), and hardware-accelerated routing without deep packet inspection"
          },
          {
            "key": "D",
            "text": "Integrates network security, threat prevention, and application visibility via App-ID, User-ID, Content-ID, WildFire cloud sandboxing, SSL/TLS Decryption, GlobalProtect VPN, IoT Security, DoS Protection, and High Availability (Active/Passive and Active/Active)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Integrates network security, threat prevention, and application visibility via App-ID, User-ID, Content-ID, WildFire cloud sandboxing, SSL/TLS Decryption, GlobalProtect VPN, IoT Security, DoS Protection, and High Availability (Active/Passive and Active/Active)",
        "explainRight": "Nhận diện chính xác tên ứng dụng và danh tính người dùng bất kể cổng mạng, đồng thời quét mã độc chuyên sâu. (Đáp án đầy đủ: Integrates network security, threat prevention, and application visibility via App-ID, User- ID, Content-ID, WildFire cloud sandboxing, SSL/TLS Decryption, GlobalProtect VPN, IoT Security, DoS Protection, and High Availability (Active/Passive and Active/Active).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Operates as a traditional proxy server that caches web content and filters URLs based on static blacklists without application-layer awareness: Đây là chức năng của một Proxy Server cơ bản, không phải là một hệ thống tường lửa thế hệ mới toàn diện. B. Primarily provides signature-based antivirus and local sandbox analysis using only IP addresses and port numbers for traffic classification: Tường lửa thế hệ mới không chỉ dựa trên chữ ký virus và IP/Port mà còn dùng App-ID và phân tích đám mây WildFire. C. Focuses on stateful packet filtering, basic port-based access control lists (ACLs), and hardware-accelerated routing without deep packet inspection: Đây là đặc điểm của tường lửa truyền thống (Legacy Firewall), thiếu khả năng kiểm soát ứng dụng sâu."
      },
      {
        "id": "net200-q93",
        "num": 93,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "Explain Interfaces, Zones, Objects, Security Policies, and NAT order in Palo Alto Firewall?",
        "questionVi": "Giải thích Interfaces, Zones, Objects, Security Policies và thứ tự xử lý NAT trên Palo Alto?",
        "options": [
          {
            "key": "A",
            "text": "Zones are only for physical interfaces, and Objects cannot be reused. Security Policies are evaluated randomly, and NAT is not required for traffic flow"
          },
          {
            "key": "B",
            "text": "Security Policies are evaluated before NAT in all cases, and the default action is 'Implicit Allow' if no rules match the traffic criteria"
          },
          {
            "key": "C",
            "text": "Interfaces (Layer 3, Layer 2, Virtual Wire, Tap, VLAN, Loopback) are grouped into Zones (trust, untrust, dmz, intrazone). Reusable Objects replace raw IPs/ports. Security Policies evaluate top-to-bottom (First Match Wins) ending with Implicit Deny. In packet flow, NAT (Source, Destination, Static, Dynamic, PAT) is evaluated before Security Policy enforcement"
          },
          {
            "key": "D",
            "text": "Interfaces are assigned directly to Security Policies without Zones. NAT is processed after Security Policies, and policies use a 'Last Match Wins' logic"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Interfaces (Layer 3, Layer 2, Virtual Wire, Tap, VLAN, Loopback) are grouped into Zones (trust, untrust, dmz, intrazone). Reusable Objects replace raw IPs/ports. Security Policies evaluate top-to-bottom (First Match Wins) ending with Implicit Deny. In packet flow, NAT (Source, Destination, Static, Dynamic, PAT) is evaluated before Security Policy enforcement",
        "explainRight": "Gom cổng vào các vùng tin cậy, quản lý IP/dịch vụ bằng Object gọn gàng, kiểm tra luật từ trên xuống dưới và chặn mặc định nếu không khớp. (Đáp án đầy đủ: Interfaces (Layer 3, Layer 2, Virtual Wire, Tap, VLAN, Loopback) are grouped into Zones (trust, untrust, dmz, intrazone). Reusable Objects replace raw IPs/ports. Security Policies evaluate top-to-bottom (First Match Wins) ending with Implicit Deny. In packet flow, NAT (Source, Destination, Static, Dynamic, PAT) is evaluated before Security Policy enforcement.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Zones are only for physical interfaces, and Objects cannot be reused. Security Policies are evaluated randomly, and NAT is not required for traffic flow: Zone có thể chứa cả Interface ảo, Objects được thiết kế để tái sử dụng, và chính sách bảo mật luôn có thứ tự ưu tiên rõ ràng. B. Security Policies are evaluated before NAT in all cases, and the default action is 'Implicit Allow' if no rules match the traffic criteria: Trong luồng xử lý gói tin của Palo Alto, NAT được kiểm tra trước khi áp dụng Security Policy, và mặc định luôn là chặn tất cả (Implicit Deny). D. Interfaces are assigned directly to Security Policies without Zones. NAT is processed after Security Policies, and policies use a 'Last Match Wins' logic: Palo Alto bắt buộc dùng Zone để nhóm Interface, và quy tắc xử lý luôn là 'First Match Wins' (khớp cái đầu tiên là dừng)."
      },
      {
        "id": "net200-q94",
        "num": 94,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "What are the Security Profiles, Logs, and Troubleshooting steps/commands in Palo Alto?",
        "questionVi": "Các Security Profiles, Logs và bước/lệnh xử lý sự cố trên Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "Security Profiles: Antivirus, Anti-Spyware, Vulnerability Protection, URL Filtering, File Blocking. Logs: Traffic, Threat, URL, System. Troubleshooting: check rule order/hit count, block logs, NAT/routing, and run show rulebase, show session all, show log traffic, debug dataplane packet-diag"
          },
          {
            "key": "B",
            "text": "Security Profiles: DHCP, DNS, SNMP, NTP. Logs: Access, Error, Debug. Troubleshooting: update firmware, replace hardware, and run traceroute"
          },
          {
            "key": "C",
            "text": "Security Profiles: VLAN, Trunk, VTP, STP. Logs: Console, Monitor, Buffer. Troubleshooting: check MAC table, run show interface, and clear counters"
          },
          {
            "key": "D",
            "text": "Security Profiles: ACL, NAT, Static Route, OSPF. Logs: Error, Warning, Info. Troubleshooting: restart device, check power cable, and run ping 8.8.8.8"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Security Profiles: Antivirus, Anti-Spyware, Vulnerability Protection, URL Filtering, File Blocking. Logs: Traffic, Threat, URL, System. Troubleshooting: check rule order/hit count, block logs, NAT/routing, and run show rulebase, show session all, show log traffic, debug dataplane packet-diag",
        "explainRight": "Gắn các lớp quét bảo mật chuyên sâu vào luật cho phép, sau đó theo dõi nhật ký và đếm lượt khớp luật để gỡ lỗi nhanh. (Đáp án đầy đủ: Security Profiles: Antivirus, Anti-Spyware, Vulnerability Protection, URL Filtering, File Blocking. Logs: Traffic, Threat, URL, System. Troubleshooting: check rule order/hit count, block logs, NAT/routing, and run show rulebase, show session all, show log traffic, debug dataplane packet-diag.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Security Profiles: DHCP, DNS, SNMP, NTP. Logs: Access, Error, Debug. Troubleshooting: update firmware, replace hardware, and run traceroute: Đây là các dịch vụ hạ tầng mạng và các loại log ứng dụng phổ biến, không liên quan đến Security Profiles trên tường lửa. C. Security Profiles: VLAN, Trunk, VTP, STP. Logs: Console, Monitor, Buffer. Troubleshooting: check MAC table, run show interface, and clear counters: Đây là các giao thức và lệnh kiểm tra dành cho thiết bị Switch lớp 2, không dùng để xử lý sự cố bảo mật trên NGFW. D. Security Profiles: ACL, NAT, Static Route, OSPF. Logs: Error, Warning, Info. Troubleshooting: restart device, check power cable, and run ping 8.8.8.8: Đây là các thành phần cấu hình mạng cơ bản và các mức độ log hệ thống, không phải các lớp bảo mật chuyên sâu của Palo Alto."
      },
      {
        "id": "net200-q95",
        "num": 95,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "What is Zscaler and how does ZIA (Zscaler Internet Access) work under Zero Trust?",
        "questionVi": "Zscaler là gì và ZIA hoạt động ra sao theo mô hình Zero Trust?",
        "options": [
          {
            "key": "A",
            "text": "Zscaler is a hardware-based VPN concentrator that requires on-premises appliances to establish encrypted tunnels for all remote users"
          },
          {
            "key": "B",
            "text": "Zscaler is an open-source routing protocol used to optimize traffic between data centers using BGP and OSPF over private leased lines"
          },
          {
            "key": "C",
            "text": "ZIA is a local firewall software installed on servers to protect internal databases from external SQL injection attacks using signature matching"
          },
          {
            "key": "D",
            "text": "Zscaler is a cloud-native Zero Trust security platform (\"Never Trust, Always Verify\") comprising ZIA (Internet/SaaS security), ZPA (private app access), ZDX (digital experience), and ZCC (client connector). In ZIA, ZCC forwards user traffic to the nearest ZIA Cloud POP for SWG, URL filtering, SSL inspection, DLP, and threat prevention across Forwarding, Transparent, or PAC File modes"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Zscaler is a cloud-native Zero Trust security platform (\"Never Trust, Always Verify\") comprising ZIA (Internet/SaaS security), ZPA (private app access), ZDX (digital experience), and ZCC (client connector). In ZIA, ZCC forwards user traffic to the nearest ZIA Cloud POP for SWG, URL filtering, SSL inspection, DLP, and threat prevention across Forwarding, Transparent, or PAC File modes",
        "explainRight": "Đưa lớp bảo mật lên đám mây để kiểm tra mọi truy cập web/SaaS của nhân viên ở bất cứ đâu mà không cần VPN truyền thống. (Đáp án đầy đủ: Zscaler is a cloud-native Zero Trust security platform (\"Never Trust, Always Verify\") comprising ZIA (Internet/SaaS security), ZPA (private app access), ZDX (digital experience), and ZCC (client connector). In ZIA, ZCC forwards user traffic to the nearest ZIA Cloud POP for SWG, URL filtering, SSL inspection, DLP, and threat prevention across Forwarding, Transparent, or PAC File modes.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Zscaler is a hardware-based VPN concentrator that requires on-premises appliances to establish encrypted tunnels for all remote users: Zscaler là nền tảng thuần đám mây (Cloud-native), không yêu cầu thiết bị phần cứng tại chỗ như VPN truyền thống. B. Zscaler is an open-source routing protocol used to optimize traffic between data centers using BGP and OSPF over private leased lines: Zscaler là một nền tảng bảo mật (Security-as-a-Service), không phải là một giao thức định tuyến mạng. C. ZIA is a local firewall software installed on servers to protect internal databases from external SQL injection attacks using signature matching: ZIA là giải pháp bảo mật truy cập Internet/SaaS từ đám mây, không phải là phần mềm tường lửa cài đặt trên máy chủ nội bộ."
      },
      {
        "id": "net200-q96",
        "num": 96,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "Why is color coding important in structured cabling and what are standard cable color conventions?",
        "questionVi": "Tại sao mã màu quan trọng trong cáp cấu trúc và quy ước màu phổ biến là gì?",
        "options": [
          {
            "key": "A",
            "text": "Mandatory requirement for IEEE 802.3 standards to ensure that electrical grounding is properly distributed across the network rack"
          },
          {
            "key": "B",
            "text": "Reduces electromagnetic interference (EMI) and increases data transmission speed by aligning the physical properties of the cable jacket with the signal frequency"
          },
          {
            "key": "C",
            "text": "Enables fast identification, cleaner organization, higher maintenance efficiency, and fewer patching errors (e.g., Orange: Backbone/Uplink, Black: Servers/Equipment, Yellow: Wi-Fi/PoE, Blue: Network Data, Green: CCTV/Security, White: Telephony/Voice), paired with labeling both ends and proper documentation"
          },
          {
            "key": "D",
            "text": "Used primarily for aesthetic purposes in data centers to match the corporate branding and has no impact on troubleshooting or maintenance"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Enables fast identification, cleaner organization, higher maintenance efficiency, and fewer patching errors (e.g., Orange: Backbone/Uplink, Black: Servers/Equipment, Yellow: Wi-Fi/PoE, Blue: Network Data, Green: CCTV/Security, White: Telephony/Voice), paired with labeling both ends and proper documentation",
        "explainRight": "Phân màu dây mạng giúp nhìn là biết ngay chức năng từng sợi cáp, tránh rút nhầm và sửa sự cố nhanh chóng. (Đáp án đầy đủ: Enables fast identification, cleaner organization, higher maintenance efficiency, and fewer patching errors (e.g., Orange: Backbone/Uplink, Black: Servers/Equipment, Yellow: Wi- Fi/PoE, Blue: Network Data, Green: CCTV/Security, White: Telephony/Voice), paired with labeling both ends and proper documentation.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Mandatory requirement for IEEE 802.3 standards to ensure that electrical grounding is properly distributed across the network rack: Tiêu chuẩn IEEE 802.3 quy định về truyền dẫn điện và dữ liệu, không bắt buộc quy ước màu sắc vỏ cáp cho việc nối đất. B. Reduces electromagnetic interference (EMI) and increases data transmission speed by aligning the physical properties of the cable jacket with the signal frequency: Màu sắc của vỏ cáp chỉ có tác dụng phân loại quản lý, không ảnh hưởng đến tính chất vật lý hay tốc độ truyền dẫn tín hiệu. D. Used primarily for aesthetic purposes in data centers to match the corporate branding and has no impact on troubleshooting or maintenance: Mã màu có vai trò kỹ thuật cực kỳ quan trọng trong việc giảm thiểu sai sót và tăng tốc độ xử lý sự cố, không chỉ đơn thuần là thẩm mỹ."
      },
      {
        "id": "net200-q97",
        "num": 97,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "What are the 7 basic IT Support troubleshooting steps and essential diagnostic commands?",
        "questionVi": "Bảy bước xử lý sự cố cơ bản của IT Support và các lệnh chẩn đoán cần nhớ?",
        "options": [
          {
            "key": "A",
            "text": "Steps: 1. Restart PC; 2. Reinstall OS; 3. Replace hardware; 4. Call vendor. Key commands: format C:, del /f, shutdown /s, cls, exit"
          },
          {
            "key": "B",
            "text": "Steps: 1. Ignore user; 2. Wait for update; 3. Escalate to manager; 4. Close ticket. Key commands: echo, pause, color, title"
          },
          {
            "key": "C",
            "text": "Steps: 1. Check power; 2. Change password; 3. Update BIOS; 4. Buy new laptop. Key commands: help, dir, cd, copy, move"
          },
          {
            "key": "D",
            "text": "Steps: 1. Identify problem; 2. Ask user questions; 3. Check cables/connections; 4. Test issue; 5. Apply solution; 6. Verify fix; 7. Document resolution. Key Windows commands: ipconfig /all, ping, tracert, nslookup, netstat, tasklist, taskkill, sfc /scannow, DISM, chkdsk, gpupdate /force"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Steps: 1. Identify problem; 2. Ask user questions; 3. Check cables/connections; 4. Test issue; 5. Apply solution; 6. Verify fix; 7. Document resolution. Key Windows commands: ipconfig /all, ping, tracert, nslookup, netstat, tasklist, taskkill, sfc /scannow, DISM, chkdsk, gpupdate /force",
        "explainRight": "Luôn kiểm tra từ nguyên nhân cơ bản nhất, xác minh từng bước và ghi chép lại giải pháp sau khi khắc phục xong. (Đáp án đầy đủ: Steps: 1. Identify problem; 2. Ask user questions; 3. Check cables/connections; 4. Test issue; 5. Apply solution; 6. Verify fix; 7. Document resolution. Key Windows commands: ipconfig /all, ping, tracert, nslookup, netstat, tasklist, taskkill, sfc /scannow, DISM, chkdsk, gpupdate /force.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Steps: 1. Restart PC; 2. Reinstall OS; 3. Replace hardware; 4. Call vendor. Key commands: format C:, del /f, shutdown /s, cls, exit: Đây là cách tiếp cận cực đoan và các lệnh phá hủy dữ liệu, không phải quy trình hỗ trợ IT chuyên nghiệp. B. Steps: 1. Ignore user; 2. Wait for update; 3. Escalate to manager; 4. Close ticket. Key commands: echo, pause, color, title: Đây là quy trình làm việc sai lệch về đạo đức nghề nghiệp và các lệnh trang trí giao diện dòng lệnh, không có giá trị kỹ thuật. C. Steps: 1. Check power; 2. Change password; 3. Update BIOS; 4. Buy new laptop. Key commands: help, dir, cd, copy, move: Các bước này mang tính chất đối phó và các lệnh điều hướng thư mục cơ bản, không đủ để chẩn đoán lỗi hệ thống và mạng."
      },
      {
        "id": "net200-q98",
        "num": 98,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "How do common application and infrastructure protocols depend on TLS, TCP, UDP, and IP?",
        "questionVi": "Các giao thức phổ biến phụ thuộc vào TLS, TCP, UDP và IP như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "ICMP and IGMP are Application Layer protocols that depend on TLS for data integrity, while RDP and SSH operate directly over the Data Link layer"
          },
          {
            "key": "B",
            "text": "All secure protocols like HTTPS and SMTPS run directly over UDP to ensure faster encryption speeds without the overhead of TCP handshakes"
          },
          {
            "key": "C",
            "text": "SMTPS, IMAPS, POPS, HTTPS, and LDAPS run over TLS + TCP; SMTP, IMAP, POP, VNC, SSH, BGP, MQTT, LDAP, and RDP run over TCP; DNS, DHCP, SNMP, mDNS, NTP, DTLS, RIP, and SIP run over UDP (HTTP/3 uses QUIC over UDP); OSPF, GRE, IPsec, ICMP, and IGMP operate directly over IPv4/IPv6"
          },
          {
            "key": "D",
            "text": "Routing protocols like OSPF and BGP always require TLS encryption to function, while DNS and DHCP run exclusively over TCP for reliability"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "SMTPS, IMAPS, POPS, HTTPS, and LDAPS run over TLS + TCP; SMTP, IMAP, POP, VNC, SSH, BGP, MQTT, LDAP, and RDP run over TCP; DNS, DHCP, SNMP, mDNS, NTP, DTLS, RIP, and SIP run over UDP (HTTP/3 uses QUIC over UDP); OSPF, GRE, IPsec, ICMP, and IGMP operate directly over IPv4/IPv6",
        "explainRight": "IP lo dẫn đường, TCP/UDP lo cách truyền tải, còn TLS bọc lớp áo mã hóa bảo vệ dữ liệu phía trên. (Đáp án đầy đủ: SMTPS, IMAPS, POPS, HTTPS, and LDAPS run over TLS + TCP; SMTP, IMAP, POP, VNC, SSH, BGP, MQTT, LDAP, and RDP run over TCP; DNS, DHCP, SNMP, mDNS, NTP, DTLS, RIP, and SIP run over UDP (HTTP/3 uses QUIC over UDP); OSPF, GRE, IPsec, ICMP, and IGMP operate directly over IPv4/IPv6.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. ICMP and IGMP are Application Layer protocols that depend on TLS for data integrity, while RDP and SSH operate directly over the Data Link layer: ICMP/IGMP là các giao thức lớp Network (L3) chạy trên IP, không dùng TLS; RDP/SSH là các giao thức lớp ứng dụng chạy trên TCP. B. All secure protocols like HTTPS and SMTPS run directly over UDP to ensure faster encryption speeds without the overhead of TCP handshakes: HTTPS và SMTPS truyền thống chạy trên TCP để đảm bảo độ tin cậy; chỉ có HTTP/3 mới sử dụng QUIC trên nền UDP. D. Routing protocols like OSPF and BGP always require TLS encryption to function, while DNS and DHCP run exclusively over TCP for reliability: OSPF chạy trực tiếp trên IP, BGP chạy trên TCP; DNS và DHCP chủ yếu dùng UDP để tối ưu tốc độ."
      },
      {
        "id": "net200-q99",
        "num": 99,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "Compare the core responsibilities and tools of a System Engineer vs. a Network Engineer?",
        "questionVi": "So sánh nhiệm vụ và công cụ chính của System Engineer và Network Engineer?",
        "options": [
          {
            "key": "A",
            "text": "System Engineer manages the ISP relationships and global BGP routing, while Network Engineer manages the SQL databases and virtual machine snapshots"
          },
          {
            "key": "B",
            "text": "System Engineer only handles hardware repairs for end-user laptops, while Network Engineer is responsible for managing Microsoft 365 licenses and email flow"
          },
          {
            "key": "C",
            "text": "System Engineer manages Windows/Linux servers, Active Directory/GPO, apps, storage/backups, and OS/BSOD issues (taskmgr, services.msc, cleanmgr, sc config). Network Engineer manages LAN/WAN/Wi-Fi, routers/switches, firewalls/VPN, IP/DNS, and packet loss/connectivity issues (ping, ipconfig /all, ipconfig /release /renew, ipconfig /flushdns)"
          },
          {
            "key": "D",
            "text": "System Engineer focuses on physical cabling and rack mounting, while Network Engineer focuses on writing Python code and developing web applications"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "System Engineer manages Windows/Linux servers, Active Directory/GPO, apps, storage/backups, and OS/BSOD issues (taskmgr, services.msc, cleanmgr, sc config). Network Engineer manages LAN/WAN/Wi-Fi, routers/switches, firewalls/VPN, IP/DNS, and packet loss/connectivity issues (ping, ipconfig /all, ipconfig /release /renew, ipconfig /flushdns)",
        "explainRight": "Kỹ sư hệ thống chăm sóc máy chủ, hệ điều hành và dịch vụ bên trong; kỹ sư mạng lo hạ tầng kết nối, định tuyến và tường lửa. (Đáp án đầy đủ: System Engineer manages Windows/Linux servers, Active Directory/GPO, apps, storage/backups, and OS/BSOD issues (taskmgr, services.msc, cleanmgr, sc config). Network Engineer manages LAN/WAN/Wi-Fi, routers/switches, firewalls/VPN, IP/DNS, and packet loss/connectivity issues (ping, ipconfig /all, ipconfig /release /renew, ipconfig /flushdns).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. System Engineer manages the ISP relationships and global BGP routing, while Network Engineer manages the SQL databases and virtual machine snapshots: Quản lý BGP/ISP là nhiệm vụ của Network Engineer, trong khi quản lý Database/VM là nhiệm vụ của System Engineer (bị ngược). B. System Engineer only handles hardware repairs for end-user laptops, while Network Engineer is responsible for managing Microsoft 365 licenses and email flow: Sửa chữa phần cứng là việc của kỹ thuật viên bảo hành; quản trị M365 thường thuộc về System Engineer hoặc M365 Admin. D. System Engineer focuses on physical cabling and rack mounting, while Network Engineer focuses on writing Python code and developing web applications: Việc đi dây cáp thuộc về hạ tầng/kỹ thuật viên, còn lập trình web là công việc của Developer, không phải vai trò chính của System/Network Engineer."
      },
      {
        "id": "net200-q100",
        "num": 100,
        "section": "Phần 6: Palo Alto, Zscaler, Cabling, IT Support & M365 SOP (Câu 92–100)",
        "questionEn": "Summarize the 12 operational domains of the Microsoft 365 Administration SOP?",
        "questionVi": "Tóm tắt 12 mảng vận hành chuẩn trong tài liệu Microsoft 365 Administration SOP?",
        "options": [
          {
            "key": "A",
            "text": "1. User Admin (create, offboard, reset/unlock, licenses, guests); 2. Groups & Access (M365, Distribution, Security groups, Shared Mailboxes, Least Privilege); 3. Exchange Online (mailboxes, mail flow rules, Defender anti-spam/phishing/malware, recovery); 4. Teams; 5. SharePoint & OneDrive; 6. Identity & Access (Entra ID, MFA, Conditional Access, RBAC, SSPR); 7. Security & Compliance (Defender, Purview DLP, Audit, Retention, eDiscovery); 8. Intune Device Management; 9. Licensing & Billing; 10. Monitoring & Reporting; 11. Incident/RCA/Problem Management; 12. Tenant & Global Admin (domains/DNS, org settings, roles)"
          },
          {
            "key": "B",
            "text": "1. Web Design; 2. SQL Querying; 3. Java Programming; 4. Mobile App Dev; 5. UI/UX Testing; 6. SEO Optimization; 7. Content Writing; 8. Social Media; 9. Marketing; 10. Sales; 11. Customer Support; 12. Accounting"
          },
          {
            "key": "C",
            "text": "1. Hardware Repair; 2. OS Installation; 3. Router Config; 4. Switch Port Security; 5. Firewall Rules; 6. VPN Setup; 7. Cabling; 8. Power Management; 9. Cooling; 10. Physical Security; 11. Asset Tagging; 12. Vendor Management"
          },
          {
            "key": "D",
            "text": "1. Linux Kernel; 2. Docker Containers; 3. Kubernetes; 4. AWS S3; 5. Azure VMs; 6. Terraform; 7. Ansible; 8. Jenkins CI/CD; 9. Git; 10. Python Scripts; 11. Bash; 12. Nginx"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "1. User Admin (create, offboard, reset/unlock, licenses, guests); 2. Groups & Access (M365, Distribution, Security groups, Shared Mailboxes, Least Privilege); 3. Exchange Online (mailboxes, mail flow rules, Defender anti-spam/phishing/malware, recovery); 4. Teams; 5. SharePoint & OneDrive; 6. Identity & Access (Entra ID, MFA, Conditional Access, RBAC, SSPR); 7. Security & Compliance (Defender, Purview DLP, Audit, Retention, eDiscovery); 8. Intune Device Management; 9. Licensing & Billing; 10. Monitoring & Reporting; 11. Incident/RCA/Problem Management; 12. Tenant & Global Admin (domains/DNS, org settings, roles)",
        "explainRight": "Quy trình chuẩn toàn diện giúp quản trị viên vận hành tài khoản, email, dữ liệu đám mây, bảo mật danh tính, thiết bị đầu cuối và xử lý sự cố trong hệ sinh thái Microsoft 365. (Đáp án đầy đủ: 1. User Admin (create, offboard, reset/unlock, licenses, guests); 2. Groups & Access (M365, Distribution, Security groups, Shared Mailboxes, Least Privilege); 3. Exchange Online (mailboxes, mail flow rules, Defender anti-spam/phishing/malware, recovery); 4. Teams; 5. SharePoint & OneDrive; 6. Identity & Access (Entra ID, MFA, Conditional Access, RBAC, SSPR); 7. Security & Compliance (Defender, Purview DLP, Audit, Retention, eDiscovery); 8. Intune Device Management; 9. Licensing & Billing; 10. Monitoring & Reporting; 11. Incident/RCA/Problem Management; 12. Tenant & Global Admin (domains/DNS, org settings, roles).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. 1. Web Design; 2. SQL Querying; 3. Java Programming; 4. Mobile App Dev; 5. UI/UX Testing; 6. SEO Optimization; 7. Content Writing; 8. Social Media; 9. Marketing; 10. Sales; 11. Customer Support; 12. Accounting: Đây là các kỹ năng và vị trí thuộc lĩnh vực phát triển phần mềm và kinh doanh, không liên quan đến vận hành hệ thống Microsoft 365. C. 1. Hardware Repair; 2. OS Installation; 3. Router Config; 4. Switch Port Security; 5. Firewall Rules; 6. VPN Setup; 7. Cabling; 8. Power Management; 9. Cooling; 10. Physical Security; 11. Asset Tagging; 12. Vendor Management: Đây là danh sách các công việc liên quan đến hạ tầng vật lý và mạng (Data Center/Network), không phải các mảng quản trị Microsoft 365. D. 1. Linux Kernel; 2. Docker Containers; 3. Kubernetes; 4. AWS S3; 5. Azure VMs; 6. Terraform; 7. Ansible; 8. Jenkins CI/CD; 9. Git; 10. Python Scripts; 11. Bash; 12. Nginx: Đây là các công cụ và khái niệm thuộc lĩnh vực DevOps và quản trị Cloud (AWS/Azure Infrastructure), không phải các dịch vụ SaaS của M365."
      },
      {
        "id": "net200-q101",
        "num": 101,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the three types of Security Policies in Palo Alto Firewall and how do they differ?",
        "questionVi": "Ba loại Security Policies trong Palo Alto Firewall là gì và khác nhau như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "1. Local Policy: restricts loopback traffic; 2. Remote Policy: restricts external management; 3. Static Policy: replaces dynamic routing rules"
          },
          {
            "key": "B",
            "text": "1. Zone-based policy: applies strictly to Layer 2 zones; 2. Global policy: applies only to VPN users; 3. Internal policy: controls database traffic"
          },
          {
            "key": "C",
            "text": "1. Intra-policy: handles WAN-to-WAN traffic; 2. Inter-policy: handles LAN-to-LAN traffic; 3. Global policy: handles explicit user traffic only"
          },
          {
            "key": "D",
            "text": "1. Interzone Policy: controls traffic between different zones (e.g., LAN -> WAN); 2. Intrazone Policy: controls traffic within the same zone (e.g., LAN -> LAN); 3. Universal Policy: applies to traffic regardless of source or destination zones (Any -> Any, e.g., management traffic)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "1. Interzone Policy: controls traffic between different zones (e.g., LAN -> WAN); 2. Intrazone Policy: controls traffic within the same zone (e.g., LAN -> LAN); 3. Universal Policy: applies to traffic regardless of source or destination zones (Any -> Any, e.g., management traffic)",
        "explainRight": "Interzone kiểm soát luồng đi giữa hai vùng khác nhau, Intrazone kiểm soát trong cùng một vùng, còn Universal áp dụng chung cho mọi vùng. (Đáp án đầy đủ: 1. Interzone Policy: controls traffic between different zones (e.g., LAN -> WAN); 2. Intrazone Policy: controls traffic within the same zone (e.g., LAN -> LAN); 3. Universal Policy: applies to traffic regardless of source or destination zones (Any -> Any, e.g., management traffic).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Local Policy: restricts loopback traffic; 2. Remote Policy: restricts external management; 3. Static Policy: replaces dynamic routing rules: Các thuật ngữ Local, Remote và Static không thuộc ba loại Security Policies chính thức trong kiến trúc của Palo Alto. B. 1. Zone-based policy: applies strictly to Layer 2 zones; 2. Global policy: applies only to VPN users; 3. Internal policy: controls database traffic: Sai tên gọi các loại chính sách và giới hạn sai phạm vi áp dụng của tường lửa chỉ cho VPN hoặc database. C. 1. Intra-policy: handles WAN-to-WAN traffic; 2. Inter-policy: handles LAN-to-LAN traffic; 3. Global policy: handles explicit user traffic only: Phân chia loại chính sách không chính xác vì không phân loại lưu lượng theo WAN và LAN như tiêu chuẩn của Palo Alto."
      },
      {
        "id": "net200-q102",
        "num": 102,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What is the default policy behavior for Intrazone and Interzone traffic in Palo Alto?",
        "questionVi": "Hành vi mặc định của chính sách đối với lưu lượng Intrazone và Interzone trong Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "By default, all traffic is allowed across all zones and must be explicitly blocked using drop rules"
          },
          {
            "key": "B",
            "text": "By default, interzone traffic is allowed and intrazone traffic is strictly blocked for security"
          },
          {
            "key": "C",
            "text": "By default, intrazone traffic is allowed and interzone traffic is denied by the bottom Implicit Deny rule (acting as a whitelist firewall)"
          },
          {
            "key": "D",
            "text": "By default, both intrazone and interzone traffic are completely denied until explicit rules are created"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "By default, intrazone traffic is allowed and interzone traffic is denied by the bottom Implicit Deny rule (acting as a whitelist firewall)",
        "explainRight": "Mặc định trong cùng một vùng thì cho phép nói chuyện với nhau, nhưng đi sang vùng khác thì bị chặn hết trừ khi bạn mở luật cho phép. (Đáp án đầy đủ: By default, intrazone traffic is allowed and interzone traffic is denied by the bottom Implicit Deny rule (acting as a whitelist firewall).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. By default, all traffic is allowed across all zones and must be explicitly blocked using drop rules: Sai bản chất tường lửa hướng danh sách trắng (whitelist) vì lưu lượng liên vùng thực tế bị chặn bởi luật ngầm phía dưới. B. By default, interzone traffic is allowed and intrazone traffic is strictly blocked for security: Ngược hoàn toàn với cơ chế bảo mật tiêu chuẩn khi cho phép lưu lượng liên vùng (Interzone) chạy tự do. D. By default, both intrazone and interzone traffic are completely denied until explicit rules are created: Sai hành vi mặc định vì Palo Alto không chặn toàn bộ lưu lượng nội bộ trong cùng một vùng (Intrazone)."
      },
      {
        "id": "net200-q103",
        "num": 103,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the four stages of Policy Evaluation Order in Palo Alto Firewall?",
        "questionVi": "Bốn bước trong thứ tự đánh giá quy tắc (Policy Evaluation Order) của Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Pre-Rulebase Packet Processing; 2. Policy Lookup (Top to Bottom); 3. First Match Wins; 4. Post-Rulebase Packet Processing"
          },
          {
            "key": "B",
            "text": "1. First Match Wins; 2. Route Lookup; 3. Policy Lookup; 4. NAT Evaluation"
          },
          {
            "key": "C",
            "text": "1. Post-Rulebase Processing; 2. First Match Wins; 3. Policy Lookup; 4. Pre-Rulebase Packet Processing"
          },
          {
            "key": "D",
            "text": "1. Policy Lookup; 2. Pre-Rulebase Processing; 3. Post-Rulebase Processing; 4. Last Match Wins"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "1. Pre-Rulebase Packet Processing; 2. Policy Lookup (Top to Bottom); 3. First Match Wins; 4. Post-Rulebase Packet Processing",
        "explainRight": "Tường lửa xử lý gói tin đầu vào, quét danh sách luật từ trên xuống dưới, gặp luật khớp đầu tiên là chốt ngay rồi chuyển sang bước hậu xử lý. (Đáp án đầy đủ: 1. Pre-Rulebase Packet Processing; 2. Policy Lookup (Top to Bottom); 3. First Match Wins; 4. Post-Rulebase Packet Processing.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. 1. First Match Wins; 2. Route Lookup; 3. Policy Lookup; 4. NAT Evaluation: Đưa sai thành phần định tuyến và NAT vào trong bốn bước tuần tự cốt lõi của quy trình đánh giá chính sách. C. 1. Post-Rulebase Processing; 2. First Match Wins; 3. Policy Lookup; 4. Pre-Rulebase Packet Processing: Sai thứ tự thực hiện các bước xử lý gói tin do đảo ngược bước tiền xử lý và hậu xử lý lên đầu. D. 1. Policy Lookup; 2. Pre-Rulebase Processing; 3. Post-Rulebase Processing; 4. Last Match Wins: Sắp xếp sai trình tự các bước đánh giá luật và sử dụng sai cơ chế chọn luật khớp cuối cùng thay vì đầu tiên."
      },
      {
        "id": "net200-q104",
        "num": 104,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "List all components that make up a Security Policy rule in Palo Alto?",
        "questionVi": "Liệt kê các thành phần cấu thành một quy tắc bảo mật (Security Policy rule) trên Palo Alto?",
        "options": [
          {
            "key": "A",
            "text": "Name, Routing Table, Interface ID, IP Address, Port Number, Gateway, Metric, and Status"
          },
          {
            "key": "B",
            "text": "Name, Type (Interzone/Intrazone/Universal), Source Zone, Destination Zone, Source Address, Destination Address, Application, Service (e.g., application-default, web-browsing), Action (Allow/Deny), Profile (Security Profiles), and Log Setting (Log Start/End/None)"
          },
          {
            "key": "C",
            "text": "Rule ID, Packet Size, TTL, Checksum, VLAN ID, MAC Address, and Encryption Key"
          },
          {
            "key": "D",
            "text": "Zone Name, NAT Type, Translation IP, Port Forwarding, Zone Type, and Session Timeout"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Name, Type (Interzone/Intrazone/Universal), Source Zone, Destination Zone, Source Address, Destination Address, Application, Service (e.g., application-default, web-browsing), Action (Allow/Deny), Profile (Security Profiles), and Log Setting (Log Start/End/None)",
        "explainRight": "Một luật đầy đủ cần xác định rõ đi từ đâu tới đâu, ứng dụng gì, cho phép hay chặn, gắn bộ lọc quét mã độc nào và ghi nhật ký ra sao. (Đáp án đầy đủ: Name, Type (Interzone/Intrazone/Universal), Source Zone, Destination Zone, Source Address, Destination Address, Application, Service (e.g., application-default, web-browsing), Action (Allow/Deny), Profile (Security Profiles), and Log Setting (Log Start/End/None).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Name, Routing Table, Interface ID, IP Address, Port Number, Gateway, Metric, and Status: Các thành phần liệt kê thuộc về bảng định tuyến và cấu hình mạng thay vì các trường trong một Security Policy rule. C. Rule ID, Packet Size, TTL, Checksum, VLAN ID, MAC Address, and Encryption Key: Các thông số này thuộc về tiêu đề gói tin lớp 2/lớp 3 chứ không phải thuộc tính cấu hình của luật bảo mật. D. Zone Name, NAT Type, Translation IP, Port Forwarding, Zone Type, and Session Timeout: Các thành phần này thuộc về cấu hình NAT và phân vùng mạng, thiếu các trường quan trọng như Application và Service."
      },
      {
        "id": "net200-q105",
        "num": 105,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the best practices for managing Security Policies in Palo Alto?",
        "questionVi": "Các thực hành tốt nhất (Best Practices) khi quản lý Security Policies trên Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "Set all actions to allow by default, disable security profiles to maximize throughput, and use random rule naming conventions"
          },
          {
            "key": "B",
            "text": "Use single IP addresses instead of groups, keep rule names numeric, place management rules below user rules, and disable least privilege"
          },
          {
            "key": "C",
            "text": "Always place specific rules above general rules, use application and service groups, enable logging for important rules, keep \"any\" rules at the bottom, follow least privilege, and use descriptive rule names"
          },
          {
            "key": "D",
            "text": "Place general rules above specific rules, avoid application groups, disable logging to save CPU, and put 'any' rules at the top"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Always place specific rules above general rules, use application and service groups, enable logging for important rules, keep \"any\" rules at the bottom, follow least privilege, and use descriptive rule names",
        "explainRight": "Đặt luật chi tiết lên trên luật tổng quát để không bị nuốt luật, đặt tên dễ hiểu và bật ghi nhật ký cho các luật quan trọng. (Đáp án đầy đủ: Always place specific rules above general rules, use application and service groups, enable logging for important rules, keep \"any\" rules at the bottom, follow least privilege, and use descriptive rule names.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Set all actions to allow by default, disable security profiles to maximize throughput, and use random rule naming conventions: Làm mất an toàn hệ thống bảo mật khi cho phép tất cả lưu lượng và vô hiệu hóa các bộ lọc quét mã độc. B. Use single IP addresses instead of groups, keep rule names numeric, place management rules below user rules, and disable least privilege: Đi ngược lại các thực hành tối ưu hóa cấu hình như dùng nhóm đối tượng, tên dễ hiểu và nguyên tắc đặc quyền tối thiểu. D. Place general rules above specific rules, avoid application groups, disable logging to save CPU, and put 'any' rules at the top: Vi phạm nghiêm trọng nguyên tắc quản lý luật vì đặt luật tổng quát lên trên sẽ khiến các luật chi tiết bên dưới không bao giờ khớp."
      },
      {
        "id": "net200-q106",
        "num": 106,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What is the Object Hierarchy in Palo Alto Firewall?",
        "questionVi": "Hệ thống phân cấp đối tượng (Object Hierarchy) trong Palo Alto Firewall là gì?",
        "options": [
          {
            "key": "A",
            "text": "Address Groups -> Addresses -> Service Groups -> Services -> Application Groups -> Applications"
          },
          {
            "key": "B",
            "text": "Applications -> Application Groups -> Addresses -> Address Groups -> Services -> Service Groups"
          },
          {
            "key": "C",
            "text": "Addresses (single IP/subnet/FQDN) -> Address Groups -> Services (ports/protocols) -> Service Groups -> Applications -> Application Groups (plus Users/User Groups)"
          },
          {
            "key": "D",
            "text": "Services -> Service Groups -> Addresses -> Address Groups -> Applications -> Zones"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Addresses (single IP/subnet/FQDN) -> Address Groups -> Services (ports/protocols) -> Service Groups -> Applications -> Application Groups (plus Users/User Groups)",
        "explainRight": "Gom từng địa chỉ IP, cổng dịch vụ và ứng dụng đơn lẻ thành các nhóm đối tượng để tái sử dụng gọn gàng trong nhiều quy tắc. (Đáp án đầy đủ: Addresses (single IP/subnet/FQDN) -> Address Groups -> Services (ports/protocols) -> Service Groups -> Applications -> Application Groups (plus Users/User Groups).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Address Groups -> Addresses -> Service Groups -> Services -> Application Groups -> Applications: Đặt nhóm lên trước đối tượng đơn lẻ, điều này không đúng với logic cấu trúc phân cấp từ phần tử cơ bản đến nhóm. B. Applications -> Application Groups -> Addresses -> Address Groups -> Services -> Service Groups: Sắp xếp ngược thứ tự phân cấp đối tượng từ lớp ứng dụng xuống lớp địa chỉ thay vì từ đối tượng chi tiết lên nhóm. D. Services -> Service Groups -> Addresses -> Address Groups -> Applications -> Zones: Tráo đổi sai trật tự giữa các nhóm dịch vụ, địa chỉ và ứng dụng làm sai lệch cấu trúc đối tượng trong hệ thống."
      },
      {
        "id": "net200-q107",
        "num": 107,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "Differentiate between Layer 3, Layer 2, Virtual Wire, and Tap Zone types in Palo Alto?",
        "questionVi": "Phân biệt các loại vùng Layer 3, Layer 2, Virtual Wire và Tap Zone trên Palo Alto?",
        "options": [
          {
            "key": "A",
            "text": "Layer 3 Zone uses routed interfaces with IP addressing; Layer 2 Zone uses bridged switching interfaces without IP addressing; Virtual Wire transparently connects two interfaces (or two firewalls in HA) without MAC/IP changes; Tap Zone is used purely for passive traffic monitoring via SPAN/mirror ports"
          },
          {
            "key": "B",
            "text": "Layer 3 Zone uses bridged switching; Layer 2 Zone uses routed IP; Virtual Wire uses NAT translation; Tap Zone modifies traffic inline"
          },
          {
            "key": "C",
            "text": "Layer 3 Zone is passive; Layer 2 Zone is transparent; Virtual Wire requires IP addresses; Tap Zone performs deep packet inspection inline"
          },
          {
            "key": "D",
            "text": "Layer 3 Zone requires no IP; Layer 2 Zone requires strict routing; Virtual Wire blocks all traffic; Tap Zone routes active traffic"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Layer 3 Zone uses routed interfaces with IP addressing; Layer 2 Zone uses bridged switching interfaces without IP addressing; Virtual Wire transparently connects two interfaces (or two firewalls in HA) without MAC/IP changes; Tap Zone is used purely for passive traffic monitoring via SPAN/mirror ports",
        "explainRight": "Layer 3 định tuyến theo IP, Layer 2 chuyển mạch nội bộ, Virtual Wire nối xuyên suốt không cần sửa cấu trúc mạng, còn Tap chỉ nghe và giám sát thụ động. (Đáp án đầy đủ: Layer 3 Zone uses routed interfaces with IP addressing; Layer 2 Zone uses bridged switching interfaces without IP addressing; Virtual Wire transparently connects two interfaces (or two firewalls in HA) without MAC/IP changes; Tap Zone is used purely for passive traffic monitoring via SPAN/mirror ports.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Layer 3 Zone uses bridged switching; Layer 2 Zone uses routed IP; Virtual Wire uses NAT translation; Tap Zone modifies traffic inline: Nhầm lẫn hoàn toàn các tính chất định tuyến, chuyển mạch và chế độ trong suốt (transparent) giữa các loại vùng. C. Layer 3 Zone is passive; Layer 2 Zone is transparent; Virtual Wire requires IP addresses; Tap Zone performs deep packet inspection inline: Mô tả sai chức năng cơ bản của cổng Tap (chỉ giám sát thụ động) thành kiểm tra gói tin trực tiếp (inline). D. Layer 3 Zone requires no IP; Layer 2 Zone requires strict routing; Virtual Wire blocks all traffic; Tap Zone routes active traffic: Gán sai các yêu cầu về địa chỉ IP và phương thức xử lý gói tin cho từng loại giao diện mạng cụ thể."
      },
      {
        "id": "net200-q108",
        "num": 108,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the 6 steps to configure an Interface in Palo Alto?",
        "questionVi": "Sáu bước cấu hình một Interface trên giao diện Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Go to Policies > Security; 2. Add Interface; 3. Set Zone; 4. Configure NAT; 5. Save and Push"
          },
          {
            "key": "B",
            "text": "1. Go to Network > Zones; 2. Add Physical Port; 3. Set Netmask; 4. Enable Routing; 5. Apply Config"
          },
          {
            "key": "C",
            "text": "1. Go to Device > Setup; 2. Assign IP Address; 3. Select Zone; 4. Create Security Policy; 5. Commit changes"
          },
          {
            "key": "D",
            "text": "1. Go to Network > Interfaces and click Add; 2. Select Interface Type (Physical/VLAN/Loopback); 3. Configure Name, Comment, Enable; 4. Assign Zone; 5. Set IP Address/Netmask; 6. Click OK and Commit"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "1. Go to Network > Interfaces and click Add; 2. Select Interface Type (Physical/VLAN/Loopback); 3. Configure Name, Comment, Enable; 4. Assign Zone; 5. Set IP Address/Netmask; 6. Click OK and Commit",
        "explainRight": "Chọn loại cổng, đặt tên, gán vào vùng tin cậy tương ứng, đặt IP rồi nhấn Commit để áp dụng cấu hình. (Đáp án đầy đủ: 1. Go to Network > Interfaces and click Add; 2. Select Interface Type (Physical/VLAN/Loopback); 3. Configure Name, Comment, Enable; 4. Assign Zone; 5. Set IP Address/Netmask; 6. Click OK and Commit.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Go to Policies > Security; 2. Add Interface; 3. Set Zone; 4. Configure NAT; 5. Save and Push: Nhầm lẫn giữa phần cấu hình giao diện mạng (Network > Interfaces) và phần cấu hình chính sách bảo mật. B. 1. Go to Network > Zones; 2. Add Physical Port; 3. Set Netmask; 4. Enable Routing; 5. Apply Config: Đi đến menu quản lý vùng (Zones) trước khi tạo giao diện, trong khi giao diện phải được tạo độc lập trước khi gán vào vùng. C. 1. Go to Device > Setup; 2. Assign IP Address; 3. Select Zone; 4. Create Security Policy; 5. Commit changes: Sai đường dẫn menu cấu hình ban đầu và bỏ qua bước chọn loại giao diện vật lý hay ảo quan trọng."
      },
      {
        "id": "net200-q109",
        "num": 109,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the 5 steps in the Palo Alto NAT Rule Evaluation Order?",
        "questionVi": "Năm bước trong thứ tự xử lý luật NAT (NAT Rule Order) của Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. NAT Rule Match; 2. Route Lookup; 3. Pre-NAT Lookup; 4. Forward Traffic; 5. Post-NAT Security Policy"
          },
          {
            "key": "B",
            "text": "1. Post-NAT Security Policy; 2. Route Lookup; 3. Pre-NAT Lookup; 4. NAT Rule Match; 5. Forward Traffic"
          },
          {
            "key": "C",
            "text": "1. Pre-NAT Lookup; 2. NAT Rule Match; 3. Post-NAT Security Policy; 4. Route Lookup; 5. Forward Traffic"
          },
          {
            "key": "D",
            "text": "1. Route Lookup; 2. Forward Traffic; 3. Pre-NAT Lookup; 4. NAT Rule Match; 5. Post-NAT Security Policy"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "1. Pre-NAT Lookup; 2. NAT Rule Match; 3. Post-NAT Security Policy; 4. Route Lookup; 5. Forward Traffic",
        "explainRight": "Tường lửa kiểm tra khớp luật NAT trước, sau đó đối chiếu chính sách bảo mật, tra đường định tuyến rồi mới chuyển gói tin đi. (Đáp án đầy đủ: 1. Pre-NAT Lookup; 2. NAT Rule Match; 3. Post-NAT Security Policy; 4. Route Lookup; 5. Forward Traffic.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. NAT Rule Match; 2. Route Lookup; 3. Pre-NAT Lookup; 4. Forward Traffic; 5. Post-NAT Security Policy: Đặt bước tra cứu định tuyến lên trước cả quá trình khớp luật NAT và kiểm tra tiền xử lý. B. 1. Post-NAT Security Policy; 2. Route Lookup; 3. Pre-NAT Lookup; 4. NAT Rule Match; 5. Forward Traffic: Đảo lộn thứ tự thực hiện giữa việc tra cứu trước NAT và chính sách bảo mật sau NAT. D. 1. Route Lookup; 2. Forward Traffic; 3. Pre-NAT Lookup; 4. NAT Rule Match; 5. Post-NAT Security Policy: Thực hiện định tuyến và chuyển tiếp gói tin trước khi hoàn tất việc đối chiếu luật NAT và chính sách bảo mật."
      },
      {
        "id": "net200-q110",
        "num": 110,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the 6 components required for a Site-to-Site IPsec VPN in Palo Alto?",
        "questionVi": "Sáu thành phần cần thiết cho Site-to-Site IPsec VPN trên Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Virtual Router; 2. DNS Server; 3. NTP Configuration; 4. Certificate Authority; 5. SNMP Profile; 6. Syslog Server"
          },
          {
            "key": "B",
            "text": "1. IKE Gateway (Phase 1); 2. IPsec Tunnel (Phase 2); 3. Crypto Profile (encryption/authentication); 4. Tunnel Interface (virtual interface); 5. Security Policy (allow VPN traffic); 6. Routing (to reach remote networks)"
          },
          {
            "key": "C",
            "text": "1. NAT Policy; 2. SSL Decryption; 3. DHCP Server; 4. Loopback Interface; 5. User-ID Agent; 6. Zone Protection"
          },
          {
            "key": "D",
            "text": "1. Application Filter; 2. QoS Profile; 3. URL Filtering; 4. Antivirus Profile; 5. Zone Mapping; 6. Static ARP"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "1. IKE Gateway (Phase 1); 2. IPsec Tunnel (Phase 2); 3. Crypto Profile (encryption/authentication); 4. Tunnel Interface (virtual interface); 5. Security Policy (allow VPN traffic); 6. Routing (to reach remote networks)",
        "explainRight": "Cần thiết lập cổng xác thực ban đầu, đường hầm mã hóa dữ liệu, giao diện ảo, luật cho phép và định tuyến tới mạng chi nhánh bên kia. (Đáp án đầy đủ: 1. IKE Gateway (Phase 1); 2. IPsec Tunnel (Phase 2); 3. Crypto Profile (encryption/authentication); 4. Tunnel Interface (virtual interface); 5. Security Policy (allow VPN traffic); 6. Routing (to reach remote networks).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Virtual Router; 2. DNS Server; 3. NTP Configuration; 4. Certificate Authority; 5. SNMP Profile; 6. Syslog Server: Đưa các dịch vụ hệ thống chung như DNS, NTP và Syslog vào danh sách thành phần cốt lõi của Site-to-Site VPN. C. 1. NAT Policy; 2. SSL Decryption; 3. DHCP Server; 4. Loopback Interface; 5. User-ID Agent; 6. Zone Protection: Liệt kê các tính năng về NAT, DHCP và SSL Decryption không liên quan trực tiếp đến việc thiết lập kết nối IPsec VPN cơ bản. D. 1. Application Filter; 2. QoS Profile; 3. URL Filtering; 4. Antivirus Profile; 5. Zone Mapping; 6. Static ARP: Bao gồm các cấu hình bộ lọc ứng dụng và profile bảo mật nội dung thay vì các thành phần thiết lập đường hầm VPN."
      },
      {
        "id": "net200-q111",
        "num": 111,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "List the five High Availability (HA) states in Palo Alto Firewall?",
        "questionVi": "Liệt kê năm trạng thái High Availability (HA) trên Palo Alto Firewall?",
        "options": [
          {
            "key": "A",
            "text": "Init (initial state), Synchronized (config synced), Active (handling traffic), Passive (standby), and Failed (device issue detected)"
          },
          {
            "key": "B",
            "text": "Standby (initial state), Active (config synced), Ready (handling traffic), Idle (standby), and Error (device issue detected)"
          },
          {
            "key": "C",
            "text": "Offline (initial state), Paired (config synced), Processing (handling traffic), Waiting (standby), and Broken (device issue detected)"
          },
          {
            "key": "D",
            "text": "Booting (initial state), Ready (config synced), Primary (handling traffic), Secondary (standby), and Down (device issue detected)"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Init (initial state), Synchronized (config synced), Active (handling traffic), Passive (standby), and Failed (device issue detected)",
        "explainRight": "Các trạng thái cho biết hai tường lửa dự phòng đang khởi tạo, đã đồng bộ cấu hình, đang chạy chính, đang trực dự phòng hay gặp lỗi. (Đáp án đầy đủ: Init (initial state), Synchronized (config synced), Active (handling traffic), Passive (standby), and Failed (device issue detected).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Standby (initial state), Active (config synced), Ready (handling traffic), Idle (standby), and Error (device issue detected): Các thuật ngữ Standby, Ready, Idle và Error không thuộc tiêu chuẩn tên gọi chính thức của các trạng thái HA trên Palo Alto Networks. C. Offline (initial state), Paired (config synced), Processing (handling traffic), Waiting (standby), and Broken (device issue detected): Thuật ngữ Offline, Paired, Processing, Waiting và Broken là các từ ngữ chung chung, không chính xác theo tài liệu kỹ thuật của Palo Alto. D. Booting (initial state), Ready (config synced), Primary (handling traffic), Secondary (standby), and Down (device issue detected): Hệ thống Palo Alto HA không dùng các từ Booting, Primary, Secondary hay Down để định nghĩa 5 trạng thái vận hành của cụm thiết bị."
      },
      {
        "id": "net200-q112",
        "num": 112,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the useful Palo Alto CLI commands for checking sessions, NAT, VPN, and HA status?",
        "questionVi": "Các lệnh CLI hữu ích trên Palo Alto để kiểm tra sessions, NAT, VPN và trạng thái HA là gì?",
        "options": [
          {
            "key": "A",
            "text": "display system status, show network interfaces, list zones, show security policies, show nat policies, show active sessions, display vpn tunnels, view traffic log, and show ha status"
          },
          {
            "key": "B",
            "text": "print system details, show all interfaces, show security-zone, show policies, show nat, show sessions table, show vpn summary, show system log, and show ha all"
          },
          {
            "key": "C",
            "text": "show system info, show interfaces all, show zone, show rulebase security rules, show rulebase nat rules, show sessions all, show vpn state all, show log traffic, and show system high-availability all"
          },
          {
            "key": "D",
            "text": "get system info, show interface status, show security zones, display rules security, display rules nat, show sessions active, show ipsec vpn, show logs, and get high-availability"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "show system info, show interfaces all, show zone, show rulebase security rules, show rulebase nat rules, show sessions all, show vpn state all, show log traffic, and show system high-availability all",
        "explainRight": "Bộ lệnh kiểm tra nhanh toàn diện tình trạng hoạt động, các phiên kết nối đang mở, đường hầm VPN và cặp dự phòng HA. (Đáp án đầy đủ: show system info, show interfaces all, show zone, show rulebase security rules, show rulebase nat rules, show sessions all, show vpn state all, show log traffic, and show system high-availability all.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. display system status, show network interfaces, list zones, show security policies, show nat policies, show active sessions, display vpn tunnels, view traffic log, and show ha status: Cú pháp lệnh của Palo Alto không sử dụng các từ khóa như display, list, view mà dùng show. B. print system details, show all interfaces, show security-zone, show policies, show nat, show sessions table, show vpn summary, show system log, and show ha all: Cú pháp print hoặc viết tắt tùy tiện các tên câu lệnh sẽ trả về lỗi cú pháp trên tường lửa Palo Alto. D. get system info, show interface status, show security zones, display rules security, display rules nat, show sessions active, show ipsec vpn, show logs, and get high-availability: Các lệnh bắt đầu bằng get hoặc display không tồn tại trong cấu trúc CLI tiêu chuẩn của hệ điều hành PAN-OS."
      },
      {
        "id": "net200-q113",
        "num": 113,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"Traffic Blocked\", \"VPN Not Working\", \"High CPU\", and \"App Not Identified\" on Palo Alto?",
        "questionVi": "Xử lý 4 lỗi thường gặp trên Palo Alto như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Traffic Blocked -> update firmware; VPN Not Working -> clear browser cache; High CPU Usage -> add more RAM; App Not Identified -> check cable connection"
          },
          {
            "key": "B",
            "text": "Traffic Blocked -> check rule order and hit count; VPN Not Working -> verify IKE/IPsec configuration; High CPU Usage -> check active sessions and logs; App Not Identified -> update App-ID signatures"
          },
          {
            "key": "C",
            "text": "Traffic Blocked -> restart device; VPN Not Working -> change ISP; High CPU Usage -> disable firewall; App Not Identified -> reinstall OS"
          },
          {
            "key": "D",
            "text": "Traffic Blocked -> disable security profiles; VPN Not Working -> reset routing table; High CPU Usage -> flush DNS; App Not Identified -> disable App-ID"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Traffic Blocked -> check rule order and hit count; VPN Not Working -> verify IKE/IPsec configuration; High CPU Usage -> check active sessions and logs; App Not Identified -> update App-ID signatures",
        "explainRight": "Đối chiếu đúng nguyên nhân từng lỗi từ thứ tự quy tắc, thông số mã hóa đường hầm, lượng phiên kết nối quá tải cho tới bộ nhận diện ứng dụng. (Đáp án đầy đủ: Traffic Blocked -> check rule order and hit count; VPN Not Working -> verify IKE/IPsec configuration; High CPU Usage -> check active sessions and logs; App Not Identified -> update App-ID signatures.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Traffic Blocked -> update firmware; VPN Not Working -> clear browser cache; High CPU Usage -> add more RAM; App Not Identified -> check cable connection: Cập nhật firmware hay xóa cache không phải là phương pháp chuẩn để khắc phục lỗi cấu hình VPN hay App-ID. C. Traffic Blocked -> restart device; VPN Not Working -> change ISP; High CPU Usage -> disable firewall; App Not Identified -> reinstall OS: Khởi động lại thiết bị hoặc đổi ISP không giải quyết được vấn đề thứ tự rule hoặc cấu hình VPN cụ thể. D. Traffic Blocked -> disable security profiles; VPN Not Working -> reset routing table; High CPU Usage -> flush DNS; App Not Identified -> disable App-ID: Tắt profile bảo mật hoặc vô hiệu hóa tính năng App-ID làm mất tính năng bảo mật chứ không xử lý đúng nguyên nhân kỹ thuật."
      },
      {
        "id": "net200-q114",
        "num": 114,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What are the four core products in the Zscaler Product Suite?",
        "questionVi": "Bốn sản phẩm cốt lõi trong bộ giải pháp Zscaler Product Suite là gì?",
        "options": [
          {
            "key": "A",
            "text": "ZWEB (Zscaler Web Gateway), ZAPP (Zscaler Application), ZMON (Zscaler Monitor), and ZAGENT (Zscaler Endpoint Agent)"
          },
          {
            "key": "B",
            "text": "ZFW (Zscaler Firewall), ZVPN (Zscaler Virtual Private Network), ZDM (Zscaler Device Management), and ZAG (Zscaler Agent)"
          },
          {
            "key": "C",
            "text": "ZIA (Zscaler Internet Access - secure web/SaaS access), ZPA (Zscaler Private Access - Zero Trust access to internal apps), ZDX (Zscaler Digital Experience - end-to-end performance monitoring), and ZCC (Zscaler Client Connector - endpoint agent)"
          },
          {
            "key": "D",
            "text": "ZCS (Zscaler Cloud Security), ZSNA (Zscaler Network Access), ZEM (Zscaler Endpoint Monitor), and ZCA (Zscaler Client App)"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "ZIA (Zscaler Internet Access - secure web/SaaS access), ZPA (Zscaler Private Access - Zero Trust access to internal apps), ZDX (Zscaler Digital Experience - end-to-end performance monitoring), and ZCC (Zscaler Client Connector - endpoint agent)",
        "explainRight": "ZIA bảo vệ khi ra Internet, ZPA bảo vệ khi vào ứng dụng nội bộ, ZDX đo độ mượt trải nghiệm và ZCC là phần mềm cài trên máy người dùng. (Đáp án đầy đủ: ZIA (Zscaler Internet Access - secure web/SaaS access), ZPA (Zscaler Private Access - Zero Trust access to internal apps), ZDX (Zscaler Digital Experience - end-to-end performance monitoring), and ZCC (Zscaler Client Connector - endpoint agent).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. ZWEB (Zscaler Web Gateway), ZAPP (Zscaler Application), ZMON (Zscaler Monitor), and ZAGENT (Zscaler Endpoint Agent): ZWEB, ZAPP, ZMON và ZAGENT dùng các thuật ngữ chung chung thay vì tên viết tắt thương mại chuẩn của hãng Zscaler. B. ZFW (Zscaler Firewall), ZVPN (Zscaler Virtual Private Network), ZDM (Zscaler Device Management), and ZAG (Zscaler Agent): Các tên gọi ZFW, ZVPN, ZDM và ZAG không phải là tên các sản phẩm cốt lõi trong danh mục chính thức của Zscaler. D. ZCS (Zscaler Cloud Security), ZSNA (Zscaler Network Access), ZEM (Zscaler Endpoint Monitor), and ZCA (Zscaler Client App): ZCS, ZSNA, ZEM và ZCA là những từ viết tắt bịa đặt, không nằm trong bộ giải pháp Zscaler Product Suite."
      },
      {
        "id": "net200-q115",
        "num": 115,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "Trace the 7-step ZIA Traffic Flow when a user opens a website?",
        "questionVi": "Trình bày luồng đi 7 bước của lưu lượng ZIA khi người dùng mở một trang web?",
        "options": [
          {
            "key": "A",
            "text": "1. User opens website; 2. ZIA Cloud initiates request; 3. Traffic captured by ZCC; 4. Sent to local gateway; 5. Inspected by proxy; 6. Response to local cache; 7. Sent to user"
          },
          {
            "key": "B",
            "text": "1. User opens website; 2. Traffic sent directly to ISP; 3. ISP inspects traffic; 4. Forwarded to ZIA Cloud; 5. Sent to destination; 6. Response returns to user directly; 7. ZIA logs the session"
          },
          {
            "key": "C",
            "text": "1. User opens website; 2. Traffic captured by Zscaler Client Connector; 3. Sent securely to ZIA Cloud; 4. ZIA Cloud inspects traffic (URL, SSL, Threats, DLP); 5. If allowed, forwarded to destination; 6. Response returns from Internet to ZIA Cloud; 7. ZIA Cloud sends response back to user"
          },
          {
            "key": "D",
            "text": "1. User opens website; 2. Traffic captured by local firewall; 3. Sent to corporate VPN; 4. Inspected by ZPA Cloud; 5. Forwarded to web server; 6. Response back to VPN; 7. Back to user"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "1. User opens website; 2. Traffic captured by Zscaler Client Connector; 3. Sent securely to ZIA Cloud; 4. ZIA Cloud inspects traffic (URL, SSL, Threats, DLP); 5. If allowed, forwarded to destination; 6. Response returns from Internet to ZIA Cloud; 7. ZIA Cloud sends response back to user",
        "explainRight": "Mọi yêu cầu và phản hồi web đều đi qua trạm kiểm tra an ninh ZIA trên đám mây trước khi tới tay người dùng. (Đáp án đầy đủ: 1. User opens website; 2. Traffic captured by Zscaler Client Connector; 3. Sent securely to ZIA Cloud; 4. ZIA Cloud inspects traffic (URL, SSL, Threats, DLP); 5. If allowed, forwarded to destination; 6. Response returns from Internet to ZIA Cloud; 7. ZIA Cloud sends response back to user.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. User opens website; 2. ZIA Cloud initiates request; 3. Traffic captured by ZCC; 4. Sent to local gateway; 5. Inspected by proxy; 6. Response to local cache; 7. Sent to user: Thứ tự các bước bị đảo lộn khi cho rằng ZIA Cloud khởi tạo yêu cầu trước khi ZCC bắt lưu lượng của người dùng. B. 1. User opens website; 2. Traffic sent directly to ISP; 3. ISP inspects traffic; 4. Forwarded to ZIA Cloud; 5. Sent to destination; 6. Response returns to user directly; 7. ZIA logs the session: Lưu lượng trong mô hình ZIA phải qua Zscaler Client Connector và ZIA Cloud trước, không đi thẳng qua ISP rồi mới tới đám mây ZIA. D. 1. User opens website; 2. Traffic captured by local firewall; 3. Sent to corporate VPN; 4. Inspected by ZPA Cloud; 5. Forwarded to web server; 6. Response back to VPN; 7. Back to user: Truy cập web thông qua ZIA không đi qua ZPA Cloud vì ZPA dành cho ứng dụng nội bộ doanh nghiệp."
      },
      {
        "id": "net200-q116",
        "num": 116,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What is a ZIA POP (Point of Presence) and why is it important?",
        "questionVi": "ZIA POP (Point of Presence) là gì và tại sao nó quan trọng?",
        "options": [
          {
            "key": "A",
            "text": "ZIA POPs are virtual private servers managed by customers; users connect to them to host internal web applications securely"
          },
          {
            "key": "B",
            "text": "ZIA POPs are local hardware firewalls installed at branch offices; users connect to them via physical cables for local network routing"
          },
          {
            "key": "C",
            "text": "ZIA POPs are backup proxy servers in corporate datacenters; users connect to them only when the primary internet connection fails"
          },
          {
            "key": "D",
            "text": "ZIA POPs are globally distributed Zscaler cloud data centers; users automatically connect to the nearest POP to ensure low latency, high speed, and high availability"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "ZIA POPs are globally distributed Zscaler cloud data centers; users automatically connect to the nearest POP to ensure low latency, high speed, and high availability",
        "explainRight": "Các trạm dữ liệu Zscaler đặt rải rác toàn cầu giúp người dùng ở quốc gia nào cũng kết nối tới điểm gần nhất để mạng luôn nhanh. (Đáp án đầy đủ: ZIA POPs are globally distributed Zscaler cloud data centers; users automatically connect to the nearest POP to ensure low latency, high speed, and high availability.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. ZIA POPs are virtual private servers managed by customers; users connect to them to host internal web applications securely: ZIA POPs không phải là máy chủ ảo do khách hàng tự quản lý để chạy ứng dụng nội bộ. B. ZIA POPs are local hardware firewalls installed at branch offices; users connect to them via physical cables for local network routing: ZIA POP không phải là thiết bị tường lửa phần cứng đặt tại chi nhánh mà là các trung tâm dữ liệu đám mây phân phối toàn cầu của Zscaler. C. ZIA POPs are backup proxy servers in corporate datacenters; users connect to them only when the primary internet connection fails: ZIA POPs không phải là máy chủ proxy dự phòng tại chỗ mà là điểm hiện diện đám mây công cộng phục vụ toàn cầu."
      },
      {
        "id": "net200-q117",
        "num": 117,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "Compare Forwarding Mode, Transparent Mode, and PAC File Mode in ZIA?",
        "questionVi": "So sánh Forwarding Mode, Transparent Mode và PAC File Mode trong ZIA?",
        "options": [
          {
            "key": "A",
            "text": "Forwarding Mode forwards all traffic directly to ZIA Cloud (typically via ZCC/tunnel); Transparent Mode routes traffic to ZIA without manual client configuration; PAC File Mode uses a Proxy Auto-Config script to direct browser/app traffic to ZIA"
          },
          {
            "key": "B",
            "text": "Forwarding Mode routes via MPLS; Transparent Mode uses static routes; PAC File Mode configures BGP peering"
          },
          {
            "key": "C",
            "text": "Forwarding Mode blocks all traffic; Transparent Mode inspects packets locally; PAC File Mode manages user authentication"
          },
          {
            "key": "D",
            "text": "Forwarding Mode uses manual proxy settings; Transparent Mode uses ZCC tunnels; PAC File Mode drops unencrypted packets"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Forwarding Mode forwards all traffic directly to ZIA Cloud (typically via ZCC/tunnel); Transparent Mode routes traffic to ZIA without manual client configuration; PAC File Mode uses a Proxy Auto-Config script to direct browser/app traffic to ZIA",
        "explainRight": "Ba cách đưa lưu lượng lên đám mây Zscaler: chuyển thẳng toàn bộ, định tuyến ngầm tự động hoặc dùng tệp kịch bản định hướng trình duyệt. (Đáp án đầy đủ: Forwarding Mode forwards all traffic directly to ZIA Cloud (typically via ZCC/tunnel); Transparent Mode routes traffic to ZIA without manual client configuration; PAC File Mode uses a Proxy Auto-Config script to direct browser/app traffic to ZIA.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Forwarding Mode routes via MPLS; Transparent Mode uses static routes; PAC File Mode configures BGP peering: Forwarding Mode không định tuyến qua MPLS và PAC File Mode hoàn toàn không liên quan đến việc cấu hình giao thức định tuyến BGP. C. Forwarding Mode blocks all traffic; Transparent Mode inspects packets locally; PAC File Mode manages user authentication: Forwarding Mode không chặn toàn bộ lưu lượng và Transparent Mode không chỉ kiểm tra gói tin cục bộ mà định tuyến lên ZIA. D. Forwarding Mode uses manual proxy settings; Transparent Mode uses ZCC tunnels; PAC File Mode drops unencrypted packets: Forwarding Mode thực tế thường dùng ZCC tunnel thay vì bắt buộc cài đặt proxy thủ công cho mọi ứng dụng."
      },
      {
        "id": "net200-q118",
        "num": 118,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What is the first step in IT Support when a computer is not turning on?",
        "questionVi": "Các bước kiểm tra khi máy tính không bật nguồn (Computer Not Turning On) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Reinstall operating system, update BIOS, flush DNS, check network cables, replace RAM, and format hard drive"
          },
          {
            "key": "B",
            "text": "Change IP address, restart Print Spooler, check Wi-Fi signal, update group policy, replace keyboard, and reboot switch"
          },
          {
            "key": "C",
            "text": "Check internet connection, reset router, update antivirus, clear browser cache, reinstall drivers, and run disk cleanup"
          },
          {
            "key": "D",
            "text": "Check power cable, check power outlet, check power button, check SMPS/charger, remove external devices, restart PC, and escalate hardware failure if unresolved"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Check power cable, check power outlet, check power button, check SMPS/charger, remove external devices, restart PC, and escalate hardware failure if unresolved",
        "explainRight": "Kiểm tra từ nguồn điện ngoài vào trong: ổ cắm, dây nguồn, bộ sạc, rút thiết bị ngoại vi rồi mới kết luận lỗi phần cứng. (Đáp án đầy đủ: Check power cable, check power outlet, check power button, check SMPS/charger, remove external devices, restart PC, and escalate hardware failure if unresolved.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Reinstall operating system, update BIOS, flush DNS, check network cables, replace RAM, and format hard drive: Cài lại hệ điều hành hay cập nhật BIOS không giải quyết được vấn đề máy tính hoàn toàn không lên nguồn (liên quan đến điện và phần cứng cơ bản). B. Change IP address, restart Print Spooler, check Wi-Fi signal, update group policy, replace keyboard, and reboot switch: Đổi địa chỉ IP hay khởi động dịch vụ máy in không giúp máy tính bật nguồn được. C. Check internet connection, reset router, update antivirus, clear browser cache, reinstall drivers, and run disk cleanup: Kiểm tra kết nối internet hay quét virus không liên quan đến việc máy tính không có nguồn điện bật lên."
      },
      {
        "id": "net200-q119",
        "num": 119,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"No Internet Connection\" in IT Support?",
        "questionVi": "Các bước xử lý lỗi mất kết nối Internet (No Internet Connection) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Reinstall printer drivers, clear print queue, check toner levels, restart Spooler service, and replace USB cable"
          },
          {
            "key": "B",
            "text": "Check network cable/Wi-Fi, run ipconfig, ping default gateway, ping Google DNS (8.8.8.8), restart network adapter, restart router, and contact the network team if needed"
          },
          {
            "key": "C",
            "text": "Replace power supply, check monitor cable, update BIOS, clean CPU fan, reinstall Windows, and check thermal paste"
          },
          {
            "key": "D",
            "text": "Clear browser cache, update Microsoft Office, change user password, check Outlook profile, and run disk defragmentation"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Check network cable/Wi-Fi, run ipconfig, ping default gateway, ping Google DNS (8.8.8.8), restart network adapter, restart router, and contact the network team if needed",
        "explainRight": "Kiểm tra từ kết nối vật lý tới cấp phát IP nội bộ, ping cổng ra rồi ping ra Internet để khoanh vùng điểm đứt. (Đáp án đầy đủ: Check network cable/Wi-Fi, run ipconfig, ping default gateway, ping Google DNS (8.8.8.8), restart network adapter, restart router, and contact the network team if needed.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Reinstall printer drivers, clear print queue, check toner levels, restart Spooler service, and replace USB cable: Cài lại driver máy in hay xóa hàng đợi máy in chỉ dùng cho lỗi thiết bị in ấn. C. Replace power supply, check monitor cable, update BIOS, clean CPU fan, reinstall Windows, and check thermal paste: Thay nguồn, cáp màn hình hay quạt CPU là các thao tác xử lý sự cố phần cứng máy tính, không liên quan đến lỗi mất kết nối mạng. D. Clear browser cache, update Microsoft Office, change user password, check Outlook profile, and run disk defragmentation: Xóa cache trình duyệt hay cập nhật Office không khắc phục được vấn đề mất kết nối Internet tầng mạng."
      },
      {
        "id": "net200-q120",
        "num": 120,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"Printer Not Printing\"?",
        "questionVi": "Các bước xử lý lỗi máy in không in được (Printer Not Printing) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Replace computer motherboard, update BIOS, check RAM modules, format hard drive, and reinstall operating system"
          },
          {
            "key": "B",
            "text": "Check power, check USB/network cable, check paper and toner, clear the print queue, restart the Print Spooler service, and reinstall the printer driver if needed"
          },
          {
            "key": "C",
            "text": "Change user account password, update Microsoft 365 apps, clear browser cookies, restart Outlook, and check VPN tunnel"
          },
          {
            "key": "D",
            "text": "Check internet connection, ping Google DNS, run ipconfig, update router firmware, and restart default gateway"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Check power, check USB/network cable, check paper and toner, clear the print queue, restart the Print Spooler service, and reinstall the printer driver if needed",
        "explainRight": "Kiểm tra điện, cáp, giấy/mực trước, sau đó xóa hàng đợi lệnh in bị kẹt và khởi động lại dịch vụ Print Spooler. (Đáp án đầy đủ: Check power, check USB/network cable, check paper and toner, clear the print queue, restart the Print Spooler service, and reinstall the printer driver if needed.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Replace computer motherboard, update BIOS, check RAM modules, format hard drive, and reinstall operating system: Thay bo mạch chủ hay cài lại hệ điều hành là quá mức cần thiết và không trúng đích cho lỗi máy in. C. Change user account password, update Microsoft 365 apps, clear browser cookies, restart Outlook, and check VPN tunnel: Đổi mật khẩu hay cập nhật ứng dụng M365 hoàn toàn không liên quan đến cơ chế hoạt động của máy in và Print Spooler. D. Check internet connection, ping Google DNS, run ipconfig, update router firmware, and restart default gateway: Kiểm tra internet hay ping DNS dùng để xử lý sự cố mạng, không giải quyết việc máy in không in được tài liệu."
      },
      {
        "id": "net200-q121",
        "num": 121,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"Computer Running Slow\"?",
        "questionVi": "Các bước xử lý máy tính chạy chậm (Computer Running Slow) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Clear the browser cache and flush the DNS resolver cache using the command prompt"
          },
          {
            "key": "B",
            "text": "Open Task Manager, check CPU/RAM/Disk usage, close unwanted programs, disable unnecessary startup apps, scan for viruses, restart computer, and upgrade RAM/SSD if needed"
          },
          {
            "key": "C",
            "text": "Modify the BIOS settings to overclock the processor and disable all security software permanently"
          },
          {
            "key": "D",
            "text": "Reinstall the operating system immediately, format all drives, and replace the motherboard without checking resource usage"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Open Task Manager, check CPU/RAM/Disk usage, close unwanted programs, disable unnecessary startup apps, scan for viruses, restart computer, and upgrade RAM/SSD if needed",
        "explainRight": "Kiểm tra xem ứng dụng nào đang ngốn tài nguyên CPU/RAM/ổ đĩa, tắt bớt chương trình khởi động cùng Windows và quét virus. (Đáp án đầy đủ: Open Task Manager, check CPU/RAM/Disk usage, close unwanted programs, disable unnecessary startup apps, scan for viruses, restart computer, and upgrade RAM/SSD if needed.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Clear the browser cache and flush the DNS resolver cache using the command prompt: Xóa bộ nhớ đệm trình duyệt hay xóa DNS chỉ giúp khắc phục các vấn đề liên quan đến mạng và web, không giải quyết vấn đề nghẽn phần cứng hoặc ứng dụng ngốn RAM/CPU. C. Modify the BIOS settings to overclock the processor and disable all security software permanently: Ép xung bộ xử lý hoặc tắt vĩnh viễn phần mềm bảo mật sẽ làm hệ thống mất ổn định và rủi ro bảo mật cao hơn chứ không khắc phục được máy chạy chậm. D. Reinstall the operating system immediately, format all drives, and replace the motherboard without checking resource usage: Cài lại hệ điều hành và thay bo mạch chủ là giải pháp quá mức cần thiết khi chưa xác định được tiến trình gây ngốn tài nguyên."
      },
      {
        "id": "net200-q122",
        "num": 122,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What is the secure procedure when a user forgets their Windows password?",
        "questionVi": "Quy trình xử lý khi người dùng quên mật khẩu Windows (Forgot Windows Password) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Disable password policies globally in Group Policy and let the user access the system without authentication"
          },
          {
            "key": "B",
            "text": "Share the administrator master password with the user so they can log in immediately"
          },
          {
            "key": "C",
            "text": "Verify user identity first, reset password in Active Directory (or Entra ID), require the user to create a new password on next sign-in, and confirm login works"
          },
          {
            "key": "D",
            "text": "Delete the user account entirely from the domain controller and create a new mailbox without backing up data"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Verify user identity first, reset password in Active Directory (or Entra ID), require the user to create a new password on next sign-in, and confirm login works",
        "explainRight": "Luôn xác minh đúng danh tính nhân viên trước khi cấp mật khẩu tạm và bắt buộc đổi lại ngay lần đăng nhập đầu tiên. (Đáp án đầy đủ: Verify user identity first, reset password in Active Directory (or Entra ID), require the user to create a new password on next sign-in, and confirm login works.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Disable password policies globally in Group Policy and let the user access the system without authentication: Tắt toàn bộ chính sách mật khẩu và bỏ xác thực làm lộ lọt hệ thống trước các truy cập trái phép. B. Share the administrator master password with the user so they can log in immediately: Chia sẻ mật khẩu quản trị viên vi phạm nghiêm trọng chính sách bảo mật và nguyên tắc định danh người dùng. D. Delete the user account entirely from the domain controller and create a new mailbox without backing up data: Xóa tài khoản và mất toàn bộ dữ liệu hộp thư là hành động phá hoại, không phải quy trình hỗ trợ đặt lại mật khẩu an toàn."
      },
      {
        "id": "net200-q123",
        "num": 123,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot a Blue Screen of Death (BSOD)?",
        "questionVi": "Các bước xử lý lỗi màn hình xanh (BSOD) trên Windows là gì?",
        "options": [
          {
            "key": "A",
            "text": "Disconnect the power cable abruptly every time a BSOD appears and bypass checking hardware health"
          },
          {
            "key": "B",
            "text": "Format the system drive immediately without recording the stop code or inspecting system logs"
          },
          {
            "key": "C",
            "text": "Disable the page file entirely and increase the CPU voltage via BIOS settings"
          },
          {
            "key": "D",
            "text": "Note the stop/error code, boot into Safe Mode, update/roll back drivers, run sfc /scannow, check RAM and hard disk health, and restore Windows if needed"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Note the stop/error code, boot into Safe Mode, update/roll back drivers, run sfc /scannow, check RAM and hard disk health, and restore Windows if needed",
        "explainRight": "Ghi lại mã lỗi hiển thị, khởi động vào chế độ an toàn Safe Mode để cập nhật driver, sửa tệp hệ thống và kiểm tra RAM/ổ cứng. (Đáp án đầy đủ: Note the stop/error code, boot into Safe Mode, update/roll back drivers, run sfc /scannow, check RAM and hard disk health, and restore Windows if needed.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Disconnect the power cable abruptly every time a BSOD appears and bypass checking hardware health: Ngắt nguồn điện đột ngột có thể làm hỏng thêm tệp hệ thống và ổ đĩa thay vì chuẩn đoán lỗi. B. Format the system drive immediately without recording the stop code or inspecting system logs: Format ngay lập tức khiến mất cơ hội phân tích mã dừng (stop code) để tìm nguyên nhân gốc rễ của driver hay phần cứng. C. Disable the page file entirely and increase the CPU voltage via BIOS settings: Tắt tệp trang (page file) hoặc tăng điện áp CPU không liên quan đến việc sửa lỗi màn hình xanh do driver hoặc phần cứng gây ra."
      },
      {
        "id": "net200-q124",
        "num": 124,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"Outlook Not Working\"?",
        "questionVi": "Các bước xử lý khi ứng dụng Outlook gặp lỗi không hoạt động?",
        "options": [
          {
            "key": "A",
            "text": "Change the computer hostname and switch the user to a local workgroup environment"
          },
          {
            "key": "B",
            "text": "Reinstall the local network switch and reconfigure the core router BGP routing tables"
          },
          {
            "key": "C",
            "text": "Delete all emails in the server database and restart the domain controller services"
          },
          {
            "key": "D",
            "text": "Check Internet connectivity, restart Outlook, check mailbox storage size/quota, repair Outlook profile, test access via Webmail (OWA), and verify mail server status"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Check Internet connectivity, restart Outlook, check mailbox storage size/quota, repair Outlook profile, test access via Webmail (OWA), and verify mail server status",
        "explainRight": "Thử mở hộp thư trên trình duyệt web để biết lỗi do máy chủ hay do ứng dụng Outlook trên máy đang đầy dung lượng hoặc hỏng cấu hình. (Đáp án đầy đủ: Check Internet connectivity, restart Outlook, check mailbox storage size/quota, repair Outlook profile, test access via Webmail (OWA), and verify mail server status.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Change the computer hostname and switch the user to a local workgroup environment: Đổi tên máy tính và đưa về workgroup làm mất kết nối với hệ thống thư điện tử doanh nghiệp Active Directory/Exchange. B. Reinstall the local network switch and reconfigure the core router BGP routing tables: Cấu hình lại switch mạng hay bảng định tuyến BGP là thao tác hạ tầng mạng diện rộng, không xử lý lỗi ứng dụng email cá nhân. C. Delete all emails in the server database and restart the domain controller services: Xóa toàn bộ email trên máy chủ là hành vi làm mất dữ liệu quan trọng của người dùng."
      },
      {
        "id": "net200-q125",
        "num": 125,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"Shared Folder Access Denied\"?",
        "questionVi": "Các bước xử lý lỗi bị từ chối truy cập thư mục chia sẻ (Shared Folder Access Denied)?",
        "options": [
          {
            "key": "A",
            "text": "Format the shared storage volume and convert it from NTFS to FAT32"
          },
          {
            "key": "B",
            "text": "Check network reachability, verify NTFS and share permissions, check user security group memberships, verify file server availability, and test with another authorized account"
          },
          {
            "key": "C",
            "text": "Disable the local firewall on all enterprise client computers permanently"
          },
          {
            "key": "D",
            "text": "Promote the client workstation to function as a primary domain controller"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Check network reachability, verify NTFS and share permissions, check user security group memberships, verify file server availability, and test with another authorized account",
        "explainRight": "Kiểm tra xem tài khoản người dùng đã được thêm vào đúng nhóm phân quyền của thư mục và máy chủ lưu trữ còn hoạt động không. (Đáp án đầy đủ: Check network reachability, verify NTFS and share permissions, check user security group memberships, verify file server availability, and test with another authorized account.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Format the shared storage volume and convert it from NTFS to FAT32: Chuyển định dạng từ NTFS sang FAT32 làm mất toàn bộ tính năng phân quyền bảo mật cấp tập tin. C. Disable the local firewall on all enterprise client computers permanently: Tắt tường lửa của toàn bộ máy trạm làm mất an toàn mạng và không giải quyết đúng vấn đề phân quyền thư mục. D. Promote the client workstation to function as a primary domain controller: Nâng cấp máy trạm thành máy chủ miền là thao tác sai lệch hoàn toàn về mô hình kiến trúc hệ thống."
      },
      {
        "id": "net200-q126",
        "num": 126,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"Wi-Fi Not Connecting\"?",
        "questionVi": "Các bước xử lý khi thiết bị không kết nối được Wi-Fi?",
        "options": [
          {
            "key": "A",
            "text": "Reinstall the operating system kernel and flash the motherboard UEFI firmware"
          },
          {
            "key": "B",
            "text": "Disable DHCP snooping and port security on the core distribution switches"
          },
          {
            "key": "C",
            "text": "Change the global IP routing protocol from OSPF to EIGRP on the corporate gateway"
          },
          {
            "key": "D",
            "text": "Ensure Wi-Fi is turned ON, restart the wireless adapter, forget and reconnect to the network (re-entering password), update Wi-Fi driver, restart router/AP, and test with another device"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Ensure Wi-Fi is turned ON, restart the wireless adapter, forget and reconnect to the network (re-entering password), update Wi-Fi driver, restart router/AP, and test with another device",
        "explainRight": "Quên mạng Wi-Fi cũ để nhập lại mật khẩu mới, khởi động lại card mạng và thử trên thiết bị khác để biết lỗi do máy hay do bộ phát. (Đáp án đầy đủ: Ensure Wi-Fi is turned ON, restart the wireless adapter, forget and reconnect to the network (re-entering password), update Wi-Fi driver, restart router/AP, and test with another device.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Reinstall the operating system kernel and flash the motherboard UEFI firmware: Cài lại nhân hệ điều hành và cập nhật UEFI là biện pháp quá nặng nề cho một lỗi kết nối Wi-Fi thông thường. B. Disable DHCP snooping and port security on the core distribution switches: Tắt DHCP snooping hay port security không giải quyết được việc thiết bị cá nhân không bắt được sóng hoặc sai mật khẩu Wi-Fi. C. Change the global IP routing protocol from OSPF to EIGRP on the corporate gateway: Thay đổi giao thức định tuyến OSPF/EIGRP thuộc tầng lõi mạng, không liên quan đến kết nối Wi-Fi cục bộ của thiết bị đầu cuối."
      },
      {
        "id": "net200-q127",
        "num": 127,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "How do you troubleshoot \"Computer Frozen\"?",
        "questionVi": "Các bước xử lý khi máy tính bị treo đứng hình (Computer Frozen)?",
        "options": [
          {
            "key": "A",
            "text": "Unplug the internal hard drive while the operating system is actively running"
          },
          {
            "key": "B",
            "text": "Perform a hard reset by holding the physical power button immediately every time a minor lag occurs"
          },
          {
            "key": "C",
            "text": "Run a complete disk defragmentation on an NVMe SSD to unfreeze the active window"
          },
          {
            "key": "D",
            "text": "Wait a few seconds for background tasks to clear, press Ctrl + Shift + Esc to open Task Manager, end the frozen application, restart the PC if unresponsive, and check Event Viewer for crash logs"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Wait a few seconds for background tasks to clear, press Ctrl + Shift + Esc to open Task Manager, end the frozen application, restart the PC if unresponsive, and check Event Viewer for crash logs",
        "explainRight": "Dùng tổ hợp phím mở Task Manager để đóng riêng ứng dụng đang bị treo thay vì tắt nóng nguồn máy ngay lập tức. (Đáp án đầy đủ: Wait a few seconds for background tasks to clear, press Ctrl + Shift + Esc to open Task Manager, end the frozen application, restart the PC if unresponsive, and check Event Viewer for crash logs.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Unplug the internal hard drive while the operating system is actively running: Rút ổ cứng khi hệ điều hành đang chạy sẽ gây lỗi mất dữ liệu nghiêm trọng và hỏng file hệ thống. B. Perform a hard reset by holding the physical power button immediately every time a minor lag occurs: Tắt nóng bằng nút nguồn liên tục dễ gây hỏng tệp hệ thống thay vì thử dùng Task Manager đóng ứng dụng trước. C. Run a complete disk defragmentation on an NVMe SSD to unfreeze the active window: Chống phân mảnh ổ cứng SSD không có tác dụng giải quyết hiện tượng treo ứng dụng và còn làm giảm tuổi thọ ổ SSD."
      },
      {
        "id": "net200-q128",
        "num": 128,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "Explain the Windows diagnostic commands: sfc /scannow, DISM, chkdsk, and gpupdate /force?",
        "questionVi": "Giải thích chức năng của các lệnh sửa lỗi Windows: sfc /scannow, DISM, chkdsk và gpupdate /force?",
        "options": [
          {
            "key": "A",
            "text": "sfc /scannow scans and repairs corrupted Windows system files; DISM repairs the underlying Windows system image; chkdsk checks and fixes disk/file-system errors; gpupdate /force immediately refreshes Group Policy settings"
          },
          {
            "key": "B",
            "text": "sfc /scannow creates a restore point; DISM backs up the registry; chkdsk resets TCP/IP stack; gpupdate /force disables the firewall"
          },
          {
            "key": "C",
            "text": "sfc /scannow clears browser history; DISM installs Windows updates; chkdsk tests internet speed; gpupdate /force changes the user password"
          },
          {
            "key": "D",
            "text": "sfc /scannow formats the hard drive; DISM updates the BIOS; chkdsk flushes the DNS cache; gpupdate /force restarts the network adapter"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "sfc /scannow scans and repairs corrupted Windows system files; DISM repairs the underlying Windows system image; chkdsk checks and fixes disk/file-system errors; gpupdate /force immediately refreshes Group Policy settings",
        "explainRight": "Đây là bộ bốn lệnh dòng lệnh giúp sửa tệp hệ điều hành bị hỏng, kiểm tra lỗi ổ đĩa và cập nhật chính sách quản trị ngay lập tức. (Đáp án đầy đủ: sfc /scannow scans and repairs corrupted Windows system files; DISM repairs the underlying Windows system image; chkdsk checks and fixes disk/file-system errors; gpupdate /force immediately refreshes Group Policy settings.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. sfc /scannow creates a restore point; DISM backs up the registry; chkdsk resets TCP/IP stack; gpupdate /force disables the firewall: Gán nhầm các lệnh sửa lỗi hệ thống thành các thao tác quản lý điểm khôi phục hoặc thiết lập mạng cơ bản. C. sfc /scannow clears browser history; DISM installs Windows updates; chkdsk tests internet speed; gpupdate /force changes the user password: Nhầm lẫn các lệnh hệ thống với thao tác ứng dụng như xóa lịch sử duyệt web hay kiểm tra tốc độ mạng. D. sfc /scannow formats the hard drive; DISM updates the BIOS; chkdsk flushes the DNS cache; gpupdate /force restarts the network adapter: Mô tả các lệnh này bị gán sai chức năng cơ bản (như sfc định dạng ổ đĩa hay DISM cập nhật BIOS), hoàn toàn sai lệch kỹ thuật."
      },
      {
        "id": "net200-q129",
        "num": 129,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "What protocols use QUIC, DTLS, SCTP, and GRE in the Network Protocol Dependencies diagram?",
        "questionVi": "Các giao thức nào sử dụng QUIC, DTLS, SCTP và GRE trong sơ đồ phụ thuộc giao thức?",
        "options": [
          {
            "key": "A",
            "text": "HTTP/3 runs over SCTP; DTLS runs over TCP; SCTP is used for DNS zone transfers; GRE is a transport layer protocol"
          },
          {
            "key": "B",
            "text": "HTTP/3 runs over TCP; DTLS provides security over TCP; SCTP transports HTTP traffic; GRE encapsulates data over Layer 2 Ethernet frames"
          },
          {
            "key": "C",
            "text": "HTTP/3 runs over ICMP; DTLS encrypts ARP packets; SCTP replaces BGP routing; GRE works exclusively at the application layer"
          },
          {
            "key": "D",
            "text": "HTTP/3 runs over QUIC (which runs over UDP); DTLS provides TLS-like security over UDP; SCTP transports signaling protocols like SIP over IP; GRE encapsulates protocols directly over IPv4/IPv6"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "HTTP/3 runs over QUIC (which runs over UDP); DTLS provides TLS-like security over UDP; SCTP transports signaling protocols like SIP over IP; GRE encapsulates protocols directly over IPv4/IPv6",
        "explainRight": "QUIC giúp web HTTP/3 tải cực nhanh qua UDP, DTLS mã hóa dữ liệu thời gian thực qua UDP, còn GRE tạo đường hầm đóng gói gói tin qua IP. (Đáp án đầy đủ: HTTP/3 runs over QUIC (which runs over UDP); DTLS provides TLS-like security over UDP; SCTP transports signaling protocols like SIP over IP; GRE encapsulates protocols directly over IPv4/IPv6.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. HTTP/3 runs over SCTP; DTLS runs over TCP; SCTP is used for DNS zone transfers; GRE is a transport layer protocol: Xáo trộn sai lệch hoàn toàn mối quan hệ giữa các giao thức (như coi GRE là giao thức tầng transport hay DTLS chạy trên TCP). B. HTTP/3 runs over TCP; DTLS provides security over TCP; SCTP transports HTTP traffic; GRE encapsulates data over Layer 2 Ethernet frames: Khẳng định HTTP/3 chạy trên TCP hoặc GRE đóng gói khung Ethernet tầng 2 là sai vì HTTP/3 dùng QUIC trên UDP và GRE là giao thức tầng 3 đóng gói trên IP. C. HTTP/3 runs over ICMP; DTLS encrypts ARP packets; SCTP replaces BGP routing; GRE works exclusively at the application layer: Gán sai giao thức nền tảng như cho rằng HTTP/3 dùng ICMP hoặc DTLS mã hóa gói ARP."
      },
      {
        "id": "net200-q130",
        "num": 130,
        "section": "Phần 7: Palo Alto NGFW, Zscaler & IT Support (Câu 101–130)",
        "questionEn": "Which IPv6 control and multicast protocols replace ICMP and IGMP from IPv4?",
        "questionVi": "Các giao thức điều khiển và đa hướng nào của IPv6 thay thế ICMP và IGMP ở IPv4?",
        "options": [
          {
            "key": "A",
            "text": "NAT64 replaces ICMP for diagnostics, while DNS replaces IGMP for multicast tracking"
          },
          {
            "key": "B",
            "text": "DHCPv6 replaces ICMP for diagnostics, while ARP replaces IGMP for multicast management"
          },
          {
            "key": "C",
            "text": "ICMPv6 replaces ICMP for diagnostics and Neighbor Discovery, while MLD (Multicast Listener Discovery) replaces IGMP for IPv6 multicast group management"
          },
          {
            "key": "D",
            "text": "TCP replaces ICMP for error reporting, while OSPF replaces IGMP for group membership"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "ICMPv6 replaces ICMP for diagnostics and Neighbor Discovery, while MLD (Multicast Listener Discovery) replaces IGMP for IPv6 multicast group management",
        "explainRight": "Trên mạng IPv6 hiện đại, ICMPv6 đảm nhiệm kiểm tra mạng và tìm láng giềng, còn MLD quản lý các nhóm nhận tin multicast. (Đáp án đầy đủ: ICMPv6 replaces ICMP for diagnostics and Neighbor Discovery, while MLD (Multicast Listener Discovery) replaces IGMP for IPv6 multicast group management.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. NAT64 replaces ICMP for diagnostics, while DNS replaces IGMP for multicast tracking: NAT64 và DNS giải quyết việc biên dịch địa chỉ và phân giải tên miền, không phải giao thức quản lý đa hướng hay chẩn đoán mạng IPv6. B. DHCPv6 replaces ICMP for diagnostics, while ARP replaces IGMP for multicast management: DHCPv6 dùng để cấp phát IP chứ không thay thế ICMPv6 trong việc chuẩn đoán lỗi và tìm láng giềng (Neighbor Discovery), còn ARP không tồn tại trên IPv6. D. TCP replaces ICMP for error reporting, while OSPF replaces IGMP for group membership: TCP và OSPF đảm nhận định tuyến và vận chuyển dữ liệu, hoàn toàn không thay thế chức năng của ICMPv6 và IGMP/MLD."
      },
      {
        "id": "net200-q131",
        "num": 131,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the 8 steps to create a new user in Microsoft 365 Admin Center?",
        "questionVi": "Tám bước tạo người dùng mới trong Microsoft 365 Admin Center là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Access Exchange Admin Center; 2. Navigate to Recipients; 3. Create Shared Mailbox; 4. Enter email address; 5. Assign permissions; 6. Share password publicly"
          },
          {
            "key": "B",
            "text": "1. Login to Azure Portal; 2. Go to Azure Active Directory; 3. Click New User; 4. Enter credentials; 5. Assign Global Administrator; 6. Review and save immediately without licenses"
          },
          {
            "key": "C",
            "text": "1. Login to M365 Admin Center; 2. Go to Users > Active Users; 3. Click Add User; 4. Enter Name, Username, Location; 5. Assign license; 6. Assign required admin roles (if applicable); 7. Review and create; 8. Share credentials securely per policy"
          },
          {
            "key": "D",
            "text": "1. Open Microsoft Teams Admin Center; 2. Go to Users; 3. Add external guest; 4. Skip license assignment; 5. Save and finish directly"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "1. Login to M365 Admin Center; 2. Go to Users > Active Users; 3. Click Add User; 4. Enter Name, Username, Location; 5. Assign license; 6. Assign required admin roles (if applicable); 7. Review and create; 8. Share credentials securely per policy",
        "explainRight": "Khai báo thông tin nhân viên mới, gắn gói bản quyền phần mềm phù hợp và gửi mật khẩu tạm một cách bảo mật. (Đáp án đầy đủ: 1. Login to M365 Admin Center; 2. Go to Users > Active Users; 3. Click Add User; 4. Enter Name, Username, Location; 5. Assign license; 6. Assign required admin roles (if applicable); 7. Review and create; 8. Share credentials securely per policy.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Access Exchange Admin Center; 2. Navigate to Recipients; 3. Create Shared Mailbox; 4. Enter email address; 5. Assign permissions; 6. Share password publicly: Thực hiện qua Exchange Admin Center để tạo hộp thư dùng chung thay vì tạo tài khoản người dùng chuẩn trong M365 Admin Center. B. 1. Login to Azure Portal; 2. Go to Azure Active Directory; 3. Click New User; 4. Enter credentials; 5. Assign Global Administrator; 6. Review and save immediately without licenses: Sử dụng Azure Portal thay vì M365 Admin Center và cấu hình sai quyền quản trị viên toàn cầu mà không cấp bản quyền ứng dụng. D. 1. Open Microsoft Teams Admin Center; 2. Go to Users; 3. Add external guest; 4. Skip license assignment; 5. Save and finish directly: Thực hiện qua Teams Admin Center để thêm khách thay vì tạo người dùng nội bộ mới đầy đủ các bước khai báo."
      },
      {
        "id": "net200-q132",
        "num": 132,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the 8 steps for secure User Offboarding in Microsoft 365?",
        "questionVi": "Tám bước thu hồi tài khoản khi nhân viên nghỉ việc (User Offboarding) trong Microsoft 365 là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Block sign-in; 2. Keep licenses assigned indefinitely; 3. Leave mailbox data untouched; 4. Do not transfer OneDrive ownership"
          },
          {
            "key": "B",
            "text": "1. Navigate to Active Users; 2. Select user account; 3. Block sign-in immediately; 4. Remove M365 licenses; 5. Export or transfer mailbox data; 6. Transfer OneDrive ownership to manager; 7. Remove group memberships and permissions; 8. Delete or archive account per retention policy"
          },
          {
            "key": "C",
            "text": "1. Delete user account immediately; 2. Remove all licenses; 3. Purge mailbox data permanently without backup; 4. Leave OneDrive accessible to the public"
          },
          {
            "key": "D",
            "text": "1. Export mailbox data; 2. Leave account active for future use; 3. Remove admin roles only; 4. Ignore OneDrive files"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "1. Navigate to Active Users; 2. Select user account; 3. Block sign-in immediately; 4. Remove M365 licenses; 5. Export or transfer mailbox data; 6. Transfer OneDrive ownership to manager; 7. Remove group memberships and permissions; 8. Delete or archive account per retention policy",
        "explainRight": "Khóa đăng nhập ngay lập tức, chuyển giao dữ liệu email và OneDrive cho quản lý, thu hồi bản quyền rồi mới lưu trữ hoặc xóa tài khoản. (Đáp án đầy đủ: 1. Navigate to Active Users; 2. Select user account; 3. Block sign-in immediately; 4. Remove M365 licenses; 5. Export or transfer mailbox data; 6. Transfer OneDrive ownership to manager; 7. Remove group memberships and permissions; 8. Delete or archive account per retention policy.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Block sign-in; 2. Keep licenses assigned indefinitely; 3. Leave mailbox data untouched; 4. Do not transfer OneDrive ownership: Khóa đăng nhập nhưng vẫn giữ lại bản quyền và không chuyển giao dữ liệu sẽ gây lãng phí chi phí và thất thoát tài sản. C. 1. Delete user account immediately; 2. Remove all licenses; 3. Purge mailbox data permanently without backup; 4. Leave OneDrive accessible to the public: Xóa tài khoản ngay lập tức và xóa vĩnh viễn dữ liệu hộp thư mà không sao lưu hay chuyển giao là vi phạm quy trình bảo mật. D. 1. Export mailbox data; 2. Leave account active for future use; 3. Remove admin roles only; 4. Ignore OneDrive files: Xuất dữ liệu nhưng vẫn để tài khoản hoạt động và bỏ quên việc thu hồi quyền truy cập OneDrive tạo ra lỗ hổng bảo mật."
      },
      {
        "id": "net200-q133",
        "num": 133,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How do you perform a secure Password Reset for a user in Microsoft 365?",
        "questionVi": "Quy trình đặt lại mật khẩu (Password Reset) an toàn cho người dùng trong Microsoft 365 là gì?",
        "options": [
          {
            "key": "A",
            "text": "Open Exchange Admin Center -> Reset mailbox password -> Apply changes globally to all users without notification"
          },
          {
            "key": "B",
            "text": "Select user in Active Users -> Click Delete -> Create a new user account with a fixed password -> Send password via unencrypted email"
          },
          {
            "key": "C",
            "text": "Select user in Active Users -> Click Reset Password -> Generate automatic/custom password -> Enable Require password change at next sign-in -> Communicate temporary password securely"
          },
          {
            "key": "D",
            "text": "Go to Azure AD -> Select user -> Edit profile -> Type a permanent password -> Disable password expiration"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Select user in Active Users -> Click Reset Password -> Generate automatic/custom password -> Enable Require password change at next sign-in -> Communicate temporary password securely",
        "explainRight": "Cấp mật khẩu tạm thời và bắt buộc người dùng tự đặt mật khẩu mới ngay khi đăng nhập lại. (Đáp án đầy đủ: Select user in Active Users -> Click Reset Password -> Generate automatic/custom password -> Enable Require password change at next sign-in -> Communicate temporary password securely.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Open Exchange Admin Center -> Reset mailbox password -> Apply changes globally to all users without notification: Đặt lại mật khẩu qua Exchange Admin Center và áp dụng toàn cục cho tất cả người dùng là sai phạm quy trình quản trị. B. Select user in Active Users -> Click Delete -> Create a new user account with a fixed password -> Send password via unencrypted email: Xóa và tạo lại tài khoản thay vì đặt lại mật khẩu sẽ làm mất lịch sử và cấu hình liên kết của người dùng cũ. D. Go to Azure AD -> Select user -> Edit profile -> Type a permanent password -> Disable password expiration: Cố định mật khẩu vĩnh viễn và tắt tính năng hết hạn mật khẩu vi phạm nghiêm trọng chính sách bảo mật danh tính."
      },
      {
        "id": "net200-q134",
        "num": 134,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the 6 steps to unlock a locked user account in Microsoft Entra Admin Center?",
        "questionVi": "Sáu bước mở khóa tài khoản bị khóa trong Microsoft Entra Admin Center là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Open Entra Admin Center; 2. Go to Users > All Users; 3. Verify account status; 4. Reset password if locked due to failed sign-in attempts; 5. Confirm MFA status; 6. Test user sign- in after unlock"
          },
          {
            "key": "B",
            "text": "1. Open Exchange Admin Center; 2. Delete mailbox; 3. Recreate user; 4. Bypass MFA verification"
          },
          {
            "key": "C",
            "text": "1. Open M365 Admin Center; 2. Disable user account permanently; 3. Change license type; 4. Skip testing"
          },
          {
            "key": "D",
            "text": "1. Open Security Center; 2. Delete sign-in logs; 3. Unlock via firewall rules; 4. Ignore user verification"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "1. Open Entra Admin Center; 2. Go to Users > All Users; 3. Verify account status; 4. Reset password if locked due to failed sign-in attempts; 5. Confirm MFA status; 6. Test user sign- in after unlock",
        "explainRight": "Kiểm tra trạng thái khóa, đặt lại mật khẩu nếu bị khóa do nhập sai nhiều lần, kiểm tra xác thực MFA và xác nhận đăng nhập thành công. (Đáp án đầy đủ: 1. Open Entra Admin Center; 2. Go to Users > All Users; 3. Verify account status; 4. Reset password if locked due to failed sign-in attempts; 5. Confirm MFA status; 6. Test user sign- in after unlock.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. 1. Open Exchange Admin Center; 2. Delete mailbox; 3. Recreate user; 4. Bypass MFA verification: Xóa và tạo lại hộp thư trong Exchange không giải quyết được vấn đề khóa tài khoản trên Entra ID. C. 1. Open M365 Admin Center; 2. Disable user account permanently; 3. Change license type; 4. Skip testing: Vô hiệu hóa vĩnh viễn tài khoản thay vì mở khóa và bỏ qua bước kiểm tra đăng nhập. D. 1. Open Security Center; 2. Delete sign-in logs; 3. Unlock via firewall rules; 4. Ignore user verification: Xóa nhật ký đăng nhập và mở khóa bằng quy tắc tường lửa không liên quan gì đến cơ chế mở khóa tài khoản người dùng."
      },
      {
        "id": "net200-q135",
        "num": 135,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How do you assign or remove licenses in Microsoft 365?",
        "questionVi": "Quy trình cấp phát hoặc thu hồi bản quyền (License Assignment & Removal) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Go to Billing > Products -> Select product -> Delete license pool -> Reassign to all company users automatically"
          },
          {
            "key": "B",
            "text": "Open Exchange Admin Center -> Mailbox settings -> Enable license features manually via PowerShell without checking user properties"
          },
          {
            "key": "C",
            "text": "Open Azure AD > Groups -> Assign license to security group -> Remove individual user check -> Ignore service status"
          },
          {
            "key": "D",
            "text": "Go to Users > Active Users -> Select user -> Open Licenses and Apps -> Check/uncheck required licenses -> Save changes -> Verify service activation status"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Go to Users > Active Users -> Select user -> Open Licenses and Apps -> Check/uncheck required licenses -> Save changes -> Verify service activation status",
        "explainRight": "Mở mục Licenses and Apps của từng tài khoản để bật hoặc tắt gói dịch vụ tương ứng với vai trò công việc. (Đáp án đầy đủ: Go to Users > Active Users -> Select user -> Open Licenses and Apps -> Check/uncheck required licenses -> Save changes -> Verify service activation status.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Go to Billing > Products -> Select product -> Delete license pool -> Reassign to all company users automatically: Xóa nhóm bản quyền trong phần thanh toán thay vì quản lý trực tiếp trên thuộc tính của người dùng. B. Open Exchange Admin Center -> Mailbox settings -> Enable license features manually via PowerShell without checking user properties: Sử dụng PowerShell qua Exchange Admin Center thay vì giao diện quản lý bản quyền chuẩn của người dùng M365. C. Open Azure AD > Groups -> Assign license to security group -> Remove individual user check -> Ignore service status: Chỉ dựa vào gán nhóm mà bỏ qua việc kiểm tra trạng thái kích hoạt dịch vụ thực tế của từng tài khoản."
      },
      {
        "id": "net200-q136",
        "num": 136,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the best practices and steps for Guest User Management in Microsoft Entra ID?",
        "questionVi": "Các bước và nguyên tắc quản lý tài khoản khách (Guest User Management) trong Entra ID là gì?",
        "options": [
          {
            "key": "A",
            "text": "Open Exchange Admin Center -> Create external contact -> Assign full mailbox delegation -> Skip invitation process"
          },
          {
            "key": "B",
            "text": "Open M365 Admin Center -> Add user -> Select internal employee type -> Grant Global Administrator role immediately without review"
          },
          {
            "key": "C",
            "text": "Open Entra Admin Center -> Users > New Guest User -> Enter guest email and send invitation -> Assign required group memberships -> Grant minimum necessary permissions (Least Privilege) -> Review guest access periodically"
          },
          {
            "key": "D",
            "text": "Open SharePoint Admin Center -> Make all folders public -> Invite guest without email verification -> Never review access"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Open Entra Admin Center -> Users > New Guest User -> Enter guest email and send invitation -> Assign required group memberships -> Grant minimum necessary permissions (Least Privilege) -> Review guest access periodically",
        "explainRight": "Chỉ cấp quyền tối thiểu cần thiết cho đối tác bên ngoài và rà soát định kỳ để thu hồi khi hết dự án. (Đáp án đầy đủ: Open Entra Admin Center -> Users > New Guest User -> Enter guest email and send invitation -> Assign required group memberships -> Grant minimum necessary permissions (Least Privilege) -> Review guest access periodically.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Open Exchange Admin Center -> Create external contact -> Assign full mailbox delegation -> Skip invitation process: Tạo liên hệ ngoài trong Exchange và cấp toàn quyền hộp thư mà không cần qua quy trình mời tài khoản khách của Entra ID. B. Open M365 Admin Center -> Add user -> Select internal employee type -> Grant Global Administrator role immediately without review: Thêm khách dưới dạng nhân viên nội bộ và cấp quyền quản trị toàn cục vi phạm nguyên tắc đặc quyền tối thiểu. D. Open SharePoint Admin Center -> Make all folders public -> Invite guest without email verification -> Never review access: Cấu hình thư mục chia sẻ thành công khai cho mọi người và không bao giờ rà soát lại quyền của khách."
      },
      {
        "id": "net200-q137",
        "num": 137,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Compare Microsoft 365 Groups, Distribution Lists, and Security Groups?",
        "questionVi": "So sánh Microsoft 365 Groups, Distribution Lists và Security Groups?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft 365 Groups provide shared workspace collaboration (Teams, SharePoint, shared mailbox/calendar); Distribution Lists are used purely for broadcasting emails to multiple recipients; Security Groups are used to assign access permissions to resources and policies"
          },
          {
            "key": "B",
            "text": "Microsoft 365 Groups are used only for emailing; Distribution Lists provide shared Teams workspace; Security Groups manage calendar sharing"
          },
          {
            "key": "C",
            "text": "Microsoft 365 Groups store user passwords; Distribution Lists handle device compliance; Security Groups send mass company emails"
          },
          {
            "key": "D",
            "text": "Microsoft 365 Groups manage firewall policies; Distribution Lists assign SharePoint permissions; Security Groups broadcast newsletters"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Microsoft 365 Groups provide shared workspace collaboration (Teams, SharePoint, shared mailbox/calendar); Distribution Lists are used purely for broadcasting emails to multiple recipients; Security Groups are used to assign access permissions to resources and policies",
        "explainRight": "M365 Group dùng để làm việc nhóm toàn diện, Distribution List chỉ dùng để gửi email hàng loạt, còn Security Group dùng để phân quyền truy cập. (Đáp án đầy đủ: Microsoft 365 Groups provide shared workspace collaboration (Teams, SharePoint, shared mailbox/calendar); Distribution Lists are used purely for broadcasting emails to multiple recipients; Security Groups are used to assign access permissions to resources and policies.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Microsoft 365 Groups are used only for emailing; Distribution Lists provide shared Teams workspace; Security Groups manage calendar sharing: Hoán đổi nhầm lẫn chức năng cốt lõi giữa M365 Groups và Distribution Lists. C. Microsoft 365 Groups store user passwords; Distribution Lists handle device compliance; Security Groups send mass company emails: Gán sai các nhóm vào nhiệm vụ lưu trữ mật khẩu hoặc quản lý tuân thủ thiết bị. D. Microsoft 365 Groups manage firewall policies; Distribution Lists assign SharePoint permissions; Security Groups broadcast newsletters: Gán nhầm các nhóm vào các nhiệm vụ bảo mật mạng hoặc phân quyền không đúng bản chất kỹ thuật."
      },
      {
        "id": "net200-q138",
        "num": 138,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the three delegation permissions for a Shared Mailbox in Exchange Online?",
        "questionVi": "Ba quyền ủy quyền (delegation permissions) cho hộp thư dùng chung (Shared Mailbox) là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Read Only; 2. Delete Mailbox; 3. Manage Domain"
          },
          {
            "key": "B",
            "text": "1. Forwarding Only; 2. Archive Access; 3. License Assignment"
          },
          {
            "key": "C",
            "text": "1. Full Access (open and view mailbox contents); 2. Send As (send emails appearing directly from the shared mailbox address); 3. Send on Behalf (send emails showing \"User on behalf of Shared Mailbox\")"
          },
          {
            "key": "D",
            "text": "1. Global Admin; 2. User Admin; 3. Password Admin"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "1. Full Access (open and view mailbox contents); 2. Send As (send emails appearing directly from the shared mailbox address); 3. Send on Behalf (send emails showing \"User on behalf of Shared Mailbox\")",
        "explainRight": "Cho phép nhân viên xem hộp thư chung, gửi thư dưới danh nghĩa hộp thư chung hoặc gửi thay mặt hộp thư chung. (Đáp án đầy đủ: 1. Full Access (open and view mailbox contents); 2. Send As (send emails appearing directly from the shared mailbox address); 3. Send on Behalf (send emails showing \"User on behalf of Shared Mailbox\").)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Read Only; 2. Delete Mailbox; 3. Manage Domain: Các quyền như đọc thuần túy hay xóa hộp thư không phải là ba quyền ủy quyền chính thức của Shared Mailbox. B. 1. Forwarding Only; 2. Archive Access; 3. License Assignment: Chuyển tiếp hoặc lưu trữ không phải là nhóm quyền ủy quyền truy cập và gửi thư của Shared Mailbox. D. 1. Global Admin; 2. User Admin; 3. Password Admin: Các vai trò quản trị hệ thống M365 không liên quan đến ba quyền ủy quyền hộp thư dùng chung."
      },
      {
        "id": "net200-q139",
        "num": 139,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How do you manage Access & Permissions across M365 workloads securely?",
        "questionVi": "Quy trình quản lý truy cập và phân quyền an toàn trên các dịch vụ M365 là gì?",
        "options": [
          {
            "key": "A",
            "text": "Grant Global Admin to all users -> Give full access to all SharePoint sites -> Disable permission reviews to save time"
          },
          {
            "key": "B",
            "text": "Delete all existing permissions -> Assign random access tokens -> Skip validation and documentation steps"
          },
          {
            "key": "C",
            "text": "Use personal user credentials to modify permissions -> Share administrator password with staff -> Ignore governance policies"
          },
          {
            "key": "D",
            "text": "Identify the resource (Mailbox, SharePoint, Team, OneDrive) -> Open appropriate Admin Portal -> Review existing permissions -> Add/remove users or groups applying Least Privilege -> Save, validate user access, and document changes per IT governance"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Identify the resource (Mailbox, SharePoint, Team, OneDrive) -> Open appropriate Admin Portal -> Review existing permissions -> Add/remove users or groups applying Least Privilege -> Save, validate user access, and document changes per IT governance",
        "explainRight": "Luôn rà soát quyền hiện tại, chỉ cấp đúng mức tối thiểu cần dùng và ghi chép lại thay đổi để kiểm toán. (Đáp án đầy đủ: Identify the resource (Mailbox, SharePoint, Team, OneDrive) -> Open appropriate Admin Portal -> Review existing permissions -> Add/remove users or groups applying Least Privilege -> Save, validate user access, and document changes per IT governance.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Grant Global Admin to all users -> Give full access to all SharePoint sites -> Disable permission reviews to save time: Cấp quyền quản trị toàn cục cho tất cả mọi người và bỏ qua rà soát vi phạm nguyên tắc bảo mật. B. Delete all existing permissions -> Assign random access tokens -> Skip validation and documentation steps: Xóa sạch quyền hiện có và gán mã thông báo ngẫu nhiên mà không kiểm tra hay ghi chép lại. C. Use personal user credentials to modify permissions -> Share administrator password with staff -> Ignore governance policies: Dùng tài khoản cá nhân thay đổi quyền, chia sẻ mật khẩu quản trị và phớt lờ chính sách quản trị CNTT."
      },
      {
        "id": "net200-q140",
        "num": 140,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What administrative tasks are performed in Exchange Online Mailbox Management?",
        "questionVi": "Các tác vụ quản trị hộp thư (Mailbox Management) trong Exchange Online là gì?",
        "options": [
          {
            "key": "A",
            "text": "In M365 Billing Center, admins configure firewall rules, reset Azure AD user passwords, and assign software licenses"
          },
          {
            "key": "B",
            "text": "In SharePoint Admin Center, admins update user mailbox quotas, enable archive mailboxes, and manage Exchange delegation permissions"
          },
          {
            "key": "C",
            "text": "In Exchange Admin Center (Recipients > Mailboxes), admins update user info, manage mailbox storage quotas, configure email forwarding, enable/disable archive mailboxes, and manage delegation permissions"
          },
          {
            "key": "D",
            "text": "In Entra ID Admin Center, admins manage mailbox storage quotas, set email forwarding rules, and configure shared mailbox delegations"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "In Exchange Admin Center (Recipients > Mailboxes), admins update user info, manage mailbox storage quotas, configure email forwarding, enable/disable archive mailboxes, and manage delegation permissions",
        "explainRight": "Quản lý dung lượng lưu trữ, chuyển tiếp thư tự động, bật hộp thư lưu trữ dài hạn và phân quyền truy cập hộp thư. (Đáp án đầy đủ: In Exchange Admin Center (Recipients > Mailboxes), admins update user info, manage mailbox storage quotas, configure email forwarding, enable/disable archive mailboxes, and manage delegation permissions.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. In M365 Billing Center, admins configure firewall rules, reset Azure AD user passwords, and assign software licenses: Cấu hình tường lửa và quản lý thanh toán thuộc về cổng thông tin thanh toán/bảo mật chứ không phải quản lý hộp thư Exchange. B. In SharePoint Admin Center, admins update user mailbox quotas, enable archive mailboxes, and manage Exchange delegation permissions: Quản lý hộp thư Exchange thực hiện trong Exchange Admin Center chứ không phải SharePoint Admin Center. D. In Entra ID Admin Center, admins manage mailbox storage quotas, set email forwarding rules, and configure shared mailbox delegations: Quản lý hạn mức hộp thư và chuyển tiếp email thực hiện ở Exchange Admin Center chứ không phải Entra ID Admin Center."
      },
      {
        "id": "net200-q141",
        "num": 141,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How do you configure and validate Mail Flow Rules (Transport Rules) in Exchange Online?",
        "questionVi": "Quy trình tạo và kiểm tra quy tắc luồng thư (Mail Flow Rules) trong Exchange Online là gì?",
        "options": [
          {
            "key": "A",
            "text": "Navigate to Microsoft Purview -> Data Loss Prevention -> New Rule -> Configure Block Action -> Enable immediately"
          },
          {
            "key": "B",
            "text": "Access Microsoft 365 Admin Center -> Settings > Mail Flow -> Create Transport Policy -> Apply to all domains without conditions"
          },
          {
            "key": "C",
            "text": "Open Exchange Admin Center -> Security > Alerts -> Create Rule -> Set Recipients and Actions -> Save without testing"
          },
          {
            "key": "D",
            "text": "Open EAC -> Mail Flow > Rules -> Add Rule -> Define Name, Conditions, Actions, and Exceptions -> Enable and save -> Test mail flow and monitor Message Trace results"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Open EAC -> Mail Flow > Rules -> Add Rule -> Define Name, Conditions, Actions, and Exceptions -> Enable and save -> Test mail flow and monitor Message Trace results",
        "explainRight": "Thiết lập điều kiện tự động chặn, chuyển hướng hoặc gắn cảnh báo cho email, sau đó dùng công cụ Message Trace để kiểm tra kết quả. (Đáp án đầy đủ: Open EAC -> Mail Flow > Rules -> Add Rule -> Define Name, Conditions, Actions, and Exceptions -> Enable and save -> Test mail flow and monitor Message Trace results.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Navigate to Microsoft Purview -> Data Loss Prevention -> New Rule -> Configure Block Action -> Enable immediately: Microsoft Purview DLP tập trung vào kiểm soát dữ liệu nhạy cảm và chống rò rỉ, không phải giao diện cấu hình Transport Rules cốt lõi của Exchange. B. Access Microsoft 365 Admin Center -> Settings > Mail Flow -> Create Transport Policy -> Apply to all domains without conditions: M365 Admin Center chung chung không cung cấp đầy đủ các tùy chọn chi tiết về điều kiện và ngoại lệ (Conditions/Exceptions) cho Mail Flow Rules. C. Open Exchange Admin Center -> Security > Alerts -> Create Rule -> Set Recipients and Actions -> Save without testing: Khu vực Security & Compliance Alerts dùng để cấu hình cảnh báo bảo mật chứ không phải nơi quản lý quy tắc luồng thư Exchange."
      },
      {
        "id": "net200-q142",
        "num": 142,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What five core Email Security policies are configured in Microsoft Defender Portal?",
        "questionVi": "Năm chính sách bảo mật email cốt lõi được cấu hình trong Microsoft Defender Portal là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Data Loss Prevention; 2. Retention Labels; 3. Sensitivity Labels; 4. eDiscovery Cases; 5. Audit Log Search"
          },
          {
            "key": "B",
            "text": "1. Azure AD Connect; 2. Conditional Access; 3. Multi-Factor Authentication; 4. Password Protection; 5. Privileged Identity Management"
          },
          {
            "key": "C",
            "text": "1. Firewall Rules; 2. VPN Gateways; 3. IPsec Tunnels; 4. SSL Decryption; 5. Packet Inspection"
          },
          {
            "key": "D",
            "text": "1. Anti-Spam Policies; 2. Anti-Phishing Policies; 3. Anti-Malware Policies; 4. Safe Links (time-of-click URL scanning); 5. Safe Attachments (sandbox scanning of email attachments)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "1. Anti-Spam Policies; 2. Anti-Phishing Policies; 3. Anti-Malware Policies; 4. Safe Links (time-of-click URL scanning); 5. Safe Attachments (sandbox scanning of email attachments)",
        "explainRight": "Bộ lá chắn 5 lớp giúp lọc thư rác, chống giả mạo lừa đảo, chặn mã độc và kiểm tra an toàn đường link cùng tệp đính kèm. (Đáp án đầy đủ: 1. Anti-Spam Policies; 2. Anti-Phishing Policies; 3. Anti-Malware Policies; 4. Safe Links (time-of-click URL scanning); 5. Safe Attachments (sandbox scanning of email attachments).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Data Loss Prevention; 2. Retention Labels; 3. Sensitivity Labels; 4. eDiscovery Cases; 5. Audit Log Search: Đây là các công cụ quản trị vòng đời dữ liệu và bảo mật thông tin trong Microsoft Purview, không phải 5 chính sách cốt lõi lọc email. B. 1. Azure AD Connect; 2. Conditional Access; 3. Multi-Factor Authentication; 4. Password Protection; 5. Privileged Identity Management: Đây là các tính năng quản lý danh tính và truy cập (IAM) trong Microsoft Entra ID, không phải bộ chính sách lọc email Defender. C. 1. Firewall Rules; 2. VPN Gateways; 3. IPsec Tunnels; 4. SSL Decryption; 5. Packet Inspection: Đây là các thành phần bảo mật mạng lớp biên và tường lửa, không liên quan đến cấu hình chính sách bảo mật email trong Microsoft Defender."
      },
      {
        "id": "net200-q143",
        "num": 143,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How do you restore a deleted mailbox versus deleted emails in Exchange Online?",
        "questionVi": "Cách khôi phục một hộp thư đã xóa khác với khôi phục các email đã xóa trong Exchange Online như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "For a deleted mailbox: empty the recoverable items folder. For deleted emails: reset the user password in Entra ID"
          },
          {
            "key": "B",
            "text": "For a deleted mailbox: restore the deleted Microsoft 365 user account and reassign the Exchange license. For deleted emails: use Recover Deleted Items in the mailbox or run Content Search/eDiscovery if purged past standard retention"
          },
          {
            "key": "C",
            "text": "For a deleted mailbox: run a compliance search. For deleted emails: reinstall the Exchange Online hybrid server from scratch"
          },
          {
            "key": "D",
            "text": "For a deleted mailbox: restore the Azure AD tenant. For deleted emails: clear the local browser cache and restart Outlook"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "For a deleted mailbox: restore the deleted Microsoft 365 user account and reassign the Exchange license. For deleted emails: use Recover Deleted Items in the mailbox or run Content Search/eDiscovery if purged past standard retention",
        "explainRight": "Hộp thư bị xóa cần khôi phục tài khoản người dùng và gắn lại bản quyền, còn email lẻ bị xóa thì dùng tính năng Recover Deleted Items hoặc eDiscovery. (Đáp án đầy đủ: For a deleted mailbox: restore the deleted Microsoft 365 user account and reassign the Exchange license. For deleted emails: use Recover Deleted Items in the mailbox or run Content Search/eDiscovery if purged past standard retention.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. For a deleted mailbox: empty the recoverable items folder. For deleted emails: reset the user password in Entra ID: Làm sạch thư mục Recoverable Items sẽ làm mất thêm dữ liệu thay vì khôi phục, còn đổi mật khẩu không giúp lấy lại email đã xóa. C. For a deleted mailbox: run a compliance search. For deleted emails: reinstall the Exchange Online hybrid server from scratch: Compliance search chỉ tìm kiếm nội dung chứ không khôi phục được tài khoản hộp thư đã xóa vĩnh viễn, và không cần cài lại hybrid server. D. For a deleted mailbox: restore the Azure AD tenant. For deleted emails: clear the local browser cache and restart Outlook: Khôi phục cả tenant Azure AD là hành động quá mức và không cần thiết chỉ để lấy lại một hộp thư đơn lẻ."
      },
      {
        "id": "net200-q144",
        "num": 144,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What settings are managed under Microsoft Teams Administration?",
        "questionVi": "Các hạng mục chính trong quản trị Microsoft Teams (Teams Administration) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Team Creation & Privacy (Public/Private), Teams Policies (channel creation, messaging features, app permissions), Meeting & Calling Policies (emergency calling, audio conferencing), Guest Access controls, and Teams App permission policies"
          },
          {
            "key": "B",
            "text": "SharePoint site quotas, OneDrive external sharing links, site collection administrators, and document library permissions"
          },
          {
            "key": "C",
            "text": "Exchange transport rules, mailbox database limits, shared mailbox aliases, and Outlook Web Access configurations"
          },
          {
            "key": "D",
            "text": "Entra ID conditional access baselines, multi-factor authentication methods, self-service password reset, and user risk policies"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Team Creation & Privacy (Public/Private), Teams Policies (channel creation, messaging features, app permissions), Meeting & Calling Policies (emergency calling, audio conferencing), Guest Access controls, and Teams App permission policies",
        "explainRight": "Kiểm soát quyền tạo nhóm họp, tính năng nhắn tin, gọi điện thoại, mời khách bên ngoài và danh sách ứng dụng được phép cài vào Teams. (Đáp án đầy đủ: Team Creation & Privacy (Public/Private), Teams Policies (channel creation, messaging features, app permissions), Meeting & Calling Policies (emergency calling, audio conferencing), Guest Access controls, and Teams App permission policies.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. SharePoint site quotas, OneDrive external sharing links, site collection administrators, and document library permissions: Đây là các thiết lập quản lý lưu trữ và chia sẻ file thuộc về SharePoint và OneDrive, không cấu hình trong Teams Admin. C. Exchange transport rules, mailbox database limits, shared mailbox aliases, and Outlook Web Access configurations: Đây là các thiết lập quản trị thuộc về Exchange Online, không liên quan đến nền tảng cộng tác Microsoft Teams. D. Entra ID conditional access baselines, multi-factor authentication methods, self-service password reset, and user risk policies: Đây là các chính sách bảo mật danh tính và xác thực trong Microsoft Entra ID, không quản lý các tính năng họp và nhắn tin của Teams."
      },
      {
        "id": "net200-q145",
        "num": 145,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What controls are configured in SharePoint & OneDrive Administration?",
        "questionVi": "Các thiết lập kiểm soát trong quản trị SharePoint & OneDrive là gì?",
        "options": [
          {
            "key": "A",
            "text": "Exchange Online anti-malware policies, transport rules, mail flow connectors, and mailbox delegation permissions"
          },
          {
            "key": "B",
            "text": "Microsoft Entra ID device compliance policies, app registration secrets, enterprise applications, and role assignments"
          },
          {
            "key": "C",
            "text": "Microsoft Defender safe attachments, phishing thresholds, quarantine policies, and threat tracker configurations"
          },
          {
            "key": "D",
            "text": "Active site collection creation and storage quotas, site permission levels, External Sharing controls (sharing level, guest sharing, domain restrictions), and OneDrive storage limits, sharing settings, and retention periods"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Active site collection creation and storage quotas, site permission levels, External Sharing controls (sharing level, guest sharing, domain restrictions), and OneDrive storage limits, sharing settings, and retention periods",
        "explainRight": "Quản lý dung lượng lưu trữ dữ liệu đám mây, phân quyền truy cập trang nội bộ và giới hạn chia sẻ tệp tin ra bên ngoài công ty. (Đáp án đầy đủ: Active site collection creation and storage quotas, site permission levels, External Sharing controls (sharing level, guest sharing, domain restrictions), and OneDrive storage limits, sharing settings, and retention periods.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Exchange Online anti-malware policies, transport rules, mail flow connectors, and mailbox delegation permissions: Đây là các cấu hình luồng thư và hộp thư trong Exchange Online, không phải quản trị dung lượng hay chia sẻ của SharePoint/OneDrive. B. Microsoft Entra ID device compliance policies, app registration secrets, enterprise applications, and role assignments: Đây là các tính năng quản lý thiết bị, ứng dụng và phân quyền quản trị trong Microsoft Entra ID, không liên quan đến site SharePoint. C. Microsoft Defender safe attachments, phishing thresholds, quarantine policies, and threat tracker configurations: Đây là các thiết lập bảo mật email nâng cao trong Microsoft Defender Portal, không quản lý site collection hay dung lượng OneDrive."
      },
      {
        "id": "net200-q146",
        "num": 146,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is Multi-Factor Authentication (MFA) setup workflow in Microsoft Entra ID?",
        "questionVi": "Quy trình kích hoạt xác thực đa yếu tố (MFA) trong Microsoft Entra ID là gì?",
        "options": [
          {
            "key": "A",
            "text": "Access SharePoint Admin Center -> Policies > Access Control -> Enable MFA -> Apply to site collections"
          },
          {
            "key": "B",
            "text": "Open Exchange Admin Center -> Mail Flow > Security -> Enable Multi-Factor Authentication -> Assign to all mailboxes -> Test OWA login"
          },
          {
            "key": "C",
            "text": "Navigate to Microsoft Purview -> Information Protection -> Authentication -> Turn on MFA settings -> Force policy update"
          },
          {
            "key": "D",
            "text": "Open Entra Admin Center -> Protection > Authentication Methods -> Enable MFA policies for target users/groups -> Configure allowed methods (Authenticator app, FIDO2, SMS/Voice) -> Save and verify user MFA registration"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Open Entra Admin Center -> Protection > Authentication Methods -> Enable MFA policies for target users/groups -> Configure allowed methods (Authenticator app, FIDO2, SMS/Voice) -> Save and verify user MFA registration",
        "explainRight": "Bật yêu cầu xác thực bước hai qua ứng dụng Authenticator hoặc khóa bảo mật để bảo vệ tài khoản khỏi lộ mật khẩu. (Đáp án đầy đủ: Open Entra Admin Center -> Protection > Authentication Methods -> Enable MFA policies for target users/groups -> Configure allowed methods (Authenticator app, FIDO2, SMS/Voice) -> Save and verify user MFA registration.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Access SharePoint Admin Center -> Policies > Access Control -> Enable MFA -> Apply to site collections: SharePoint Admin Center chỉ quản lý quyền truy cập trang web, không chứa cấu hình chính sách phương thức xác thực MFA cốt lõi của Entra ID. B. Open Exchange Admin Center -> Mail Flow > Security -> Enable Multi-Factor Authentication -> Assign to all mailboxes -> Test OWA login: Exchange Admin Center không phải là nơi cấu hình phương thức xác thực MFA tổng thể cho toàn bộ tài khoản người dùng trong hệ thống. C. Navigate to Microsoft Purview -> Information Protection -> Authentication -> Turn on MFA settings -> Force policy update: Microsoft Purview tập trung vào bảo mật dữ liệu và tuân thủ, không quản lý các phương thức xác thực danh tính như MFA."
      },
      {
        "id": "net200-q147",
        "num": 147,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What four components make up a Conditional Access Policy in Microsoft Entra ID?",
        "questionVi": "Bốn thành phần cấu thành chính sách Conditional Access trong Microsoft Entra ID là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Users/Groups (who); 2. Cloud Apps/Actions (what); 3. Conditions (sign-in risk, device platform, location/IP); 4. Access Controls (Grant with MFA/compliant device, or Block access)"
          },
          {
            "key": "B",
            "text": "1. Site Collection URL; 2. Guest User; 3. Sharing Link; 4. Expiration Date"
          },
          {
            "key": "C",
            "text": "1. Source IP; 2. Destination Port; 3. Protocol; 4. Action (Allow/Deny)"
          },
          {
            "key": "D",
            "text": "1. Mailbox ID; 2. Transport Rule; 3. Spam Confidence Level; 4. Quarantine Action"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "1. Users/Groups (who); 2. Cloud Apps/Actions (what); 3. Conditions (sign-in risk, device platform, location/IP); 4. Access Controls (Grant with MFA/compliant device, or Block access)",
        "explainRight": "Đặt điều kiện thông minh kiểu \"Nếu đăng nhập từ vị trí lạ hoặc thiết bị chưa đạt chuẩn thì bắt buộc xác thực MFA hoặc chặn lại\". (Đáp án đầy đủ: 1. Users/Groups (who); 2. Cloud Apps/Actions (what); 3. Conditions (sign-in risk, device platform, location/IP); 4. Access Controls (Grant with MFA/compliant device, or Block access).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. 1. Site Collection URL; 2. Guest User; 3. Sharing Link; 4. Expiration Date: Đây là các thông số chia sẻ file và trang web trong SharePoint/OneDrive, không cấu hình trong Conditional Access của Entra ID. C. 1. Source IP; 2. Destination Port; 3. Protocol; 4. Action (Allow/Deny): Đây là các thành phần cơ bản của một quy tắc tường lửa mạng truyền thống (Network Firewall Rule), không phải Conditional Access Policy. D. 1. Mailbox ID; 2. Transport Rule; 3. Spam Confidence Level; 4. Quarantine Action: Đây là cấu trúc của một quy tắc lọc thư hoặc Mail Flow Rule trong Exchange Online, không phải chính sách điều kiện danh tính."
      },
      {
        "id": "net200-q148",
        "num": 148,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are Role-Based Access Control (RBAC) and Self-Service Password Reset (SSPR) in Entra ID?",
        "questionVi": "RBAC và SSPR trong Microsoft Entra ID là gì?",
        "options": [
          {
            "key": "A",
            "text": "RBAC blocks external file sharing automatically. SSPR encrypts all user emails at rest using customer managed keys"
          },
          {
            "key": "B",
            "text": "RBAC enforces multi-factor authentication for all logins. SSPR scans outgoing attachments for malware and data leakage"
          },
          {
            "key": "C",
            "text": "RBAC manages site collection quotas and permissions. SSPR restores deleted mailboxes from the recoverable items folder"
          },
          {
            "key": "D",
            "text": "RBAC assigns granular built-in or custom admin roles (e.g., Exchange Admin, User Admin) instead of Global Admin. SSPR allows end-users to reset their own forgotten passwords securely after verifying registered authentication methods"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "RBAC assigns granular built-in or custom admin roles (e.g., Exchange Admin, User Admin) instead of Global Admin. SSPR allows end-users to reset their own forgotten passwords securely after verifying registered authentication methods",
        "explainRight": "RBAC giúp chia nhỏ quyền quản trị đúng người đúng việc, còn SSPR giúp nhân viên tự đặt lại mật khẩu khi quên mà không cần gọi IT. (Đáp án đầy đủ: RBAC assigns granular built-in or custom admin roles (e.g., Exchange Admin, User Admin) instead of Global Admin. SSPR allows end-users to reset their own forgotten passwords securely after verifying registered authentication methods.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. RBAC blocks external file sharing automatically. SSPR encrypts all user emails at rest using customer managed keys: Chặn chia sẻ file và mã hóa email không phải là chức năng của RBAC hay SSPR mà thuộc về Purview/SharePoint. B. RBAC enforces multi-factor authentication for all logins. SSPR scans outgoing attachments for malware and data leakage: Ép buộc MFA hay quét mã độc là nhiệm vụ của Conditional Access và Defender, không phải bản chất của phân quyền RBAC hay đặt lại mật khẩu SSPR. C. RBAC manages site collection quotas and permissions. SSPR restores deleted mailboxes from the recoverable items folder: Quản lý hạn mức SharePoint hay khôi phục hộp thư Exchange không liên quan đến phân quyền quản trị RBAC và tự phục hồi mật khẩu SSPR trong Entra ID."
      },
      {
        "id": "net200-q149",
        "num": 149,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How do Data Loss Prevention (DLP) policies work in Microsoft Purview?",
        "questionVi": "Chính sách chống thất thoát dữ liệu (DLP) hoạt động như thế nào trong Microsoft Purview?",
        "options": [
          {
            "key": "A",
            "text": "Admins deploy firewall policies in Palo Alto to inspect SSL traffic and drop malicious packets based on threat signatures"
          },
          {
            "key": "B",
            "text": "Admins configure transport rules in Exchange to rewrite sender headers and route emails through external smarthosts"
          },
          {
            "key": "C",
            "text": "Admins create DLP policies in Purview Portal selecting target locations (Exchange, SharePoint, OneDrive, Teams) and rules to detect, warn, encrypt, or block sharing of sensitive information (e.g., credit cards, ID numbers)"
          },
          {
            "key": "D",
            "text": "Admins set conditional access policies in Entra ID to block sign-ins from unmanaged devices and risky IP locations"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Admins create DLP policies in Purview Portal selecting target locations (Exchange, SharePoint, OneDrive, Teams) and rules to detect, warn, encrypt, or block sharing of sensitive information (e.g., credit cards, ID numbers)",
        "explainRight": "Tự động quét phát hiện dữ liệu nhạy cảm (số thẻ, căn cước, tài liệu mật) và ngăn chặn hành vi gửi nhầm hoặc rò rỉ ra ngoài. (Đáp án đầy đủ: Admins create DLP policies in Purview Portal selecting target locations (Exchange, SharePoint, OneDrive, Teams) and rules to detect, warn, encrypt, or block sharing of sensitive information (e.g., credit cards, ID numbers).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Admins deploy firewall policies in Palo Alto to inspect SSL traffic and drop malicious packets based on threat signatures: Kiểm tra lưu lượng SSL và loại bỏ gói tin độc hại là chức năng bảo mật mạng của tường lửa thế hệ mới (NGFW), không phải DLP trên đám mây. B. Admins configure transport rules in Exchange to rewrite sender headers and route emails through external smarthosts: Viết lại tiêu đề người gửi và định tuyến qua smarthost là tính năng của Mail Flow trong Exchange, không phải tính năng quét dữ liệu nhạy cảm của DLP. D. Admins set conditional access policies in Entra ID to block sign-ins from unmanaged devices and risky IP locations: Chặn đăng nhập từ thiết bị không quản lý là nhiệm vụ của Conditional Access, không chuyên trách phát hiện dữ liệu nhạy cảm như DLP Purview."
      },
      {
        "id": "net200-q150",
        "num": 150,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How are Audit Log Review, Retention Policies, and eDiscovery used in Microsoft Purview?",
        "questionVi": "Audit Log Review, Retention Policies và eDiscovery trong Microsoft Purview dùng để làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Audit Log Review scans inbound emails for spam; Retention Policies block external guest access; eDiscovery creates multi-factor authentication baselines"
          },
          {
            "key": "B",
            "text": "Audit Log Review monitors network bandwidth usage; Retention Policies configure firewall routing tables; eDiscovery patches tenant security updates"
          },
          {
            "key": "C",
            "text": "Audit Log Review resets forgotten user passwords; Retention Policies manage Teams meeting policies; eDiscovery issues admin role assignments"
          },
          {
            "key": "D",
            "text": "Audit Log Review searches user/admin activities by user, date range, and workload for security investigations; Retention Policies enforce how long data is kept or deleted under Data Lifecycle Management; eDiscovery creates legal hold cases, assigns custodians, and exports content searches"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Audit Log Review searches user/admin activities by user, date range, and workload for security investigations; Retention Policies enforce how long data is kept or deleted under Data Lifecycle Management; eDiscovery creates legal hold cases, assigns custodians, and exports content searches",
        "explainRight": "Audit giúp truy vết lịch sử thao tác, Retention quy định thời gian lưu giữ/xóa dữ liệu tự động, còn eDiscovery phục vụ tìm kiếm trích xuất bằng chứng pháp lý. (Đáp án đầy đủ: Audit Log Review searches user/admin activities by user, date range, and workload for security investigations; Retention Policies enforce how long data is kept or deleted under Data Lifecycle Management; eDiscovery creates legal hold cases, assigns custodians, and exports content searches.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Audit Log Review scans inbound emails for spam; Retention Policies block external guest access; eDiscovery creates multi-factor authentication baselines: Quét spam, chặn guest hay tạo MFA không phải là chức năng của Audit, Retention hay eDiscovery trong Purview. B. Audit Log Review monitors network bandwidth usage; Retention Policies configure firewall routing tables; eDiscovery patches tenant security updates: Theo dõi băng thông mạng, cấu hình bảng định tuyến hay vá lỗi hệ thống là công việc của quản trị mạng và quản trị hệ thống, không phải công cụ tuân thủ Purview. C. Audit Log Review resets forgotten user passwords; Retention Policies manage Teams meeting policies; eDiscovery issues admin role assignments: Đặt lại mật khẩu, quản lý chính sách Teams hay cấp quyền admin thuộc về Entra ID và Teams Admin, không liên quan đến quản lý nhật ký và lưu giữ dữ liệu Purview."
      },
      {
        "id": "net200-q151",
        "num": 151,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the five core capabilities of Microsoft Intune Device Management?",
        "questionVi": "Năm chức năng cốt lõi của quản lý thiết bị Microsoft Intune là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Active Directory Replication; 2. Group Policy Objects; 3. Software Center; 4. WSUS Updates; 5. Domain Controller Promotion"
          },
          {
            "key": "B",
            "text": "1. Network Provisioning; 2. Firewall Rules; 3. DHCP Scope; 4. VLAN Assignment; 5. Access Control Lists"
          },
          {
            "key": "C",
            "text": "1. Azure VM Creation; 2. Storage Account; 3. Key Vault; 4. Virtual Network; 5. Load Balancer Configuration"
          },
          {
            "key": "D",
            "text": "1. Device Enrollment; 2. Compliance Policies; 3. Configuration Profiles; 4. Application Deployment; 5. Endpoint Security"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "1. Device Enrollment; 2. Compliance Policies; 3. Configuration Profiles; 4. Application Deployment; 5. Endpoint Security",
        "explainRight": "Quản lý tập trung điện thoại và laptop nhân viên từ xa: kiểm tra đạt chuẩn an toàn, tự cài phần mềm, bật mã hóa ổ cứng và tường lửa. (Đáp án đầy đủ: 1. Device Enrollment (registering corporate/BYOD devices); 2. Compliance Policies (checking OS version, encryption, jailbreak status); 3. Configuration Profiles (pushing Wi-Fi, VPN, email, restriction settings); 4. Application Deployment; 5. Endpoint Security (Antivirus, Firewall, Disk Encryption/BitLocker, Attack Surface Reduction).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Active Directory Replication; 2. Group Policy Objects; 3. Software Center; 4. WSUS Updates; 5. Domain Controller Promotion: Đây là các thành phần quản lý hạ tầng truyền thống của Active Directory On-Premises chứ không phải chức năng cốt lõi của Microsoft Intune. B. 1. Network Provisioning; 2. Firewall Rules; 3. DHCP Scope; 4. VLAN Assignment; 5. Access Control Lists: Đây là các tính năng quản lý mạng và thiết bị mạng cấp độ hạ tầng chứ không liên quan đến quản lý thiết bị đầu cuối di động trên Intune. C. 1. Azure VM Creation; 2. Storage Account; 3. Key Vault; 4. Virtual Network; 5. Load Balancer Configuration: Đây là các dịch vụ hạ tầng đám mây tính toán (IaaS) trong Azure thay vì các tính năng quản lý thiết bị người dùng cuối."
      },
      {
        "id": "net200-q152",
        "num": 152,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How do License Optimization and Invoice Review work in M365 Billing Administration?",
        "questionVi": "Tối ưu hóa bản quyền (License Optimization) và kiểm tra hóa đơn (Invoice Review) được thực hiện ra sao?",
        "options": [
          {
            "key": "A",
            "text": "License Optimization purchases additional storage quotas, and Invoice Review audits employee salary distribution reports"
          },
          {
            "key": "B",
            "text": "License Optimization assigns global administrator permissions, while Invoice Review monitors domain name registration renewals"
          },
          {
            "key": "C",
            "text": "License Optimization reviews consumption reports to reassign unused licenses, and Invoice Review checks Bills & Payments to verify charges"
          },
          {
            "key": "D",
            "text": "License Optimization automatically renews expired enterprise agreements, while Invoice Review processes credit card payments directly"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "License Optimization reviews consumption reports to reassign unused licenses, and Invoice Review checks Bills & Payments to verify charges",
        "explainRight": "Rà soát các gói bản quyền mua dư hoặc gắn cho tài khoản không hoạt động để thu hồi tiết kiệm chi phí, đồng thời đối chiếu hóa đơn thanh toán định kỳ. (Đáp án đầy đủ: License Optimization reviews consumption reports under Billing > Licenses to identify unused or inactive licenses and reassign/remove them to save cost. Invoice Review checks Billing > Bills & Payments to verify charges, download audit invoices, and escalate discrepancies.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. License Optimization purchases additional storage quotas, and Invoice Review audits employee salary distribution reports: Quản lý bản quyền không liên quan đến việc mua dung lượng lưu trữ phụ hay kiểm toán bảng lương nhân sự của công ty. B. License Optimization assigns global administrator permissions, while Invoice Review monitors domain name registration renewals: Giao diện quản lý hóa đơn và bản quyền không can thiệp vào việc phân quyền quản trị viên toàn cục hay đăng ký tên miền. D. License Optimization automatically renews expired enterprise agreements, while Invoice Review processes credit card payments directly: Việc tự động gia hạn hợp đồng và thanh toán thẻ tín dụng không thuộc chức năng rà soát và tối ưu bản quyền thủ công."
      },
      {
        "id": "net200-q153",
        "num": 153,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What reports are tracked under M365 Monitoring & Reporting?",
        "questionVi": "Những báo cáo nào được theo dõi trong mảng Monitoring & Reporting của Microsoft 365?",
        "options": [
          {
            "key": "A",
            "text": "Active Directory replication status, Domain Controller health, Group Policy processing times, and DNS root hint performance"
          },
          {
            "key": "B",
            "text": "Service Health status, Workload Usage & Adoption reports, Defender Security & Incident reports, and License utilization"
          },
          {
            "key": "C",
            "text": "Exchange transport queue lengths, database availability group replication lag, and client access server CPU usage"
          },
          {
            "key": "D",
            "text": "Azure Virtual Machine CPU throttling, disk IOPS limits, storage redundancy metrics, and ExpressRoute circuit latency"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Service Health status, Workload Usage & Adoption reports, Defender Security & Incident reports, and License utilization",
        "explainRight": "Theo dõi xem dịch vụ Microsoft có đang gặp sự cố diện rộng không, mức độ sử dụng phần mềm của nhân viên và xu hướng cảnh báo bảo mật. (Đáp án đầy đủ: Service Health status and outage advisories (Health > Service Health), Workload Usage & Adoption reports (Reports > Usage), Defender Security & Incident reports, License utilization reports, and Performance metrics.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Active Directory replication status, Domain Controller health, Group Policy processing times, and DNS root hint performance: Các thông số này thuộc về công cụ quản trị hạ tầng Active Directory On-Premises chứ không phải trung tâm báo cáo trực tuyến của M365. C. Exchange transport queue lengths, database availability group replication lag, and client access server CPU usage: Đây là các thông số chẩn đoán kỹ thuật sâu dành riêng cho máy chủ Exchange Server tại chỗ, không phản ánh tổng quan báo cáo M365. D. Azure Virtual Machine CPU throttling, disk IOPS limits, storage redundancy metrics, and ExpressRoute circuit latency: Đây là các số liệu giám sát hạ tầng máy chủ ảo hóa trên Microsoft Azure (IaaS), không phải báo cáo dịch vụ SaaS của M365."
      },
      {
        "id": "net200-q154",
        "num": 154,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Differentiate Incident Management, Service Requests, Escalation, RCA, and Problem Management?",
        "questionVi": "Phân biệt Incident, Service Request, Escalation, RCA và Problem Management?",
        "options": [
          {
            "key": "A",
            "text": "Incident manages user permissions; Service Requests handle security alerts; Escalation deploys software updates; RCA resets passwords; Problem Management handles billing"
          },
          {
            "key": "B",
            "text": "Incident restores service quickly; Service Requests fulfill approved standard requests; Escalation transfers issues; RCA investigates root cause; Problem Management eliminates recurring causes"
          },
          {
            "key": "C",
            "text": "Incident blocks malicious IP addresses; Service Requests configure firewalls; Escalation provisions new VMs; RCA audits licenses; Problem Management updates DNS"
          },
          {
            "key": "D",
            "text": "Incident updates operating systems; Service Requests deploy patches; Escalation monitors network traffic; RCA configures MFA; Problem Management resets tokens"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Incident restores service quickly; Service Requests fulfill approved standard requests; Escalation transfers issues; RCA investigates root cause; Problem Management eliminates recurring causes",
        "explainRight": "Incident là khôi phục nhanh khi dịch vụ bị hỏng, Service Request là đáp ứng yêu cầu cấp mới, RCA là tìm nguyên nhân gốc, còn Problem Management là xử lý triệt để để lỗi không lặp lại. (Đáp án đầy đủ: Incident Management restores disrupted service quickly and confirms with the user; Service Requests fulfill approved standard requests (e.g., new access/mailbox); Escalation transfers unresolved issues to higher support tiers; Root Cause Analysis (RCA) investigates why a major incident happened; Problem Management eliminates underlying causes of recurring incidents permanently.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Incident manages user permissions; Service Requests handle security alerts; Escalation deploys software updates; RCA resets passwords; Problem Management handles billing: Việc quản lý quyền người dùng và cảnh báo bảo mật không đúng với định nghĩa của quy trình xử lý sự cố và yêu cầu dịch vụ ITIL. C. Incident blocks malicious IP addresses; Service Requests configure firewalls; Escalation provisions new VMs; RCA audits licenses; Problem Management updates DNS: Các tác vụ cấu hình tường lửa hay triển khai máy chủ ảo thuộc về vận hành hạ tầng kỹ thuật chứ không phải quản lý sự cố và nguyên nhân gốc. D. Incident updates operating systems; Service Requests deploy patches; Escalation monitors network traffic; RCA configures MFA; Problem Management resets tokens: Việc cập nhật hệ điều hành hay vá lỗi liên quan đến quản lý cấu hình và bản vá, không phải quy trình quản lý sự cố chuẩn ITIL."
      },
      {
        "id": "net200-q155",
        "num": 155,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What tasks belong to Tenant & Global Administration in Microsoft 365?",
        "questionVi": "Các tác vụ thuộc mảng Tenant & Global Administration trong Microsoft 365 là gì?",
        "options": [
          {
            "key": "A",
            "text": "Creating virtual machines, configuring Azure Load Balancers, setting up Virtual Networks, and managing Network Security Groups"
          },
          {
            "key": "B",
            "text": "Deploying Endpoint Protection policies, configuring BitLocker encryption, pushing Wi-Fi profiles, and enforcing compliance rules"
          },
          {
            "key": "C",
            "text": "Configuring local Group Policies, managing Active Directory sites, setting up Trust relationships, and promoting Domain Controllers"
          },
          {
            "key": "D",
            "text": "Domain Management (adding custom domains and verifying DNS records), Organization Settings, and Administrative Role assignments"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Domain Management (adding custom domains and verifying DNS records), Organization Settings, and Administrative Role assignments",
        "explainRight": "Thiết lập tên miền riêng của công ty, cấu hình bảo mật mặc định toàn hệ thống và phân công các vai trò quản trị cấp cao. (Đáp án đầy đủ: Domain Management (adding custom domains and verifying DNS records like TXT/MX), Organization Settings (Org Profile, Security Defaults, Release Preferences, Service configurations), and Administrative Role assignments.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Creating virtual machines, configuring Azure Load Balancers, setting up Virtual Networks, and managing Network Security Groups: Đây là các tác vụ quản trị tài nguyên hạ tầng điện toán đám mây trên Microsoft Azure, không phải cấu hình tenant M365. B. Deploying Endpoint Protection policies, configuring BitLocker encryption, pushing Wi-Fi profiles, and enforcing compliance rules: Đây là các tác vụ chuyên biệt thuộc về quản lý thiết bị đầu cuối với Microsoft Intune thay vì quản lý Tenant chung. C. Configuring local Group Policies, managing Active Directory sites, setting up Trust relationships, and promoting Domain Controllers: Các công việc liên quan đến Domain Controller và Active Directory truyền thống thuộc hạ tầng On-Premises."
      },
      {
        "id": "net200-q156",
        "num": 156,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why should Global Administrator accounts be minimized and protected with MFA?",
        "questionVi": "Tại sao cần giới hạn số lượng tài khoản Global Administrator và bảo vệ bằng MFA?",
        "options": [
          {
            "key": "A",
            "text": "Global Admin manages local printer queues; enforcing MFA ensures faster password recovery for standard employees"
          },
          {
            "key": "B",
            "text": "Global Admin can only read user profiles; minimizing accounts prevents network bandwidth congestion during peak hours"
          },
          {
            "key": "C",
            "text": "Global Admin is responsible for software licensing costs; minimizing assignments helps reduce monthly subscription bills"
          },
          {
            "key": "D",
            "text": "Global Admin has unrestricted control over every setting and data; minimizing assignments and enforcing MFA drastically reduces tenant takeover risk"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Global Admin has unrestricted control over every setting and data; minimizing assignments and enforcing MFA drastically reduces tenant takeover risk",
        "explainRight": "Global Admin nắm giữ chìa khóa vạn năng toàn bộ công ty nên chỉ cấp cho rất ít người và bắt buộc bảo vệ hai lớp. (Đáp án đầy đủ: Global Admin has unrestricted control over every setting, user, and data repository in the tenant; minimizing assignments (Principle of Least Privilege) and enforcing MFA drastically reduces tenant takeover risk.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Global Admin manages local printer queues; enforcing MFA ensures faster password recovery for standard employees: Global Admin không quản lý máy in cục bộ, và MFA bảo vệ chống chiếm đoạt tài khoản chứ không dùng để phục hồi mật khẩu nhân viên. B. Global Admin can only read user profiles; minimizing accounts prevents network bandwidth congestion during peak hours: Global Admin có quyền lực tối cao chứ không chỉ có quyền đọc hồ sơ, và việc giới hạn tài khoản không nhằm giải quyết vấn đề băng thông. C. Global Admin is responsible for software licensing costs; minimizing assignments helps reduce monthly subscription bills: Vai trò quản trị viên toàn cục không liên quan trực tiếp đến việc tính toán hay giảm thiểu chi phí bản quyền hàng tháng."
      },
      {
        "id": "net200-q157",
        "num": 157,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What DNS records are typically verified when adding a custom domain to Microsoft 365?",
        "questionVi": "Những bản ghi DNS nào thường được xác minh khi thêm tên miền riêng vào Microsoft 365?",
        "options": [
          {
            "key": "A",
            "text": "NS record for root nameservers, SOA record for zone serial numbers, and CAA record for certificate authority authorization"
          },
          {
            "key": "B",
            "text": "A record for local IIS web server, PTR record for reverse DNS lookup, and SRV record for Active Directory domain discovery"
          },
          {
            "key": "C",
            "text": "TXT record (to prove domain ownership and configure SPF), MX record (to route incoming mail), and CNAME records (for Autodiscover and MDM)"
          },
          {
            "key": "D",
            "text": "RP record for responsible person, LOC record for geographical coordinates, and HINFO record for hardware information"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "TXT record (to prove domain ownership and configure SPF), MX record (to route incoming mail), and CNAME records (for Autodiscover and MDM)",
        "explainRight": "Khai báo bản ghi xác nhận chủ sở hữu tên miền, chỉ đường nhận email về Microsoft và cấu hình chống giả mạo thư. (Đáp án đầy đủ: TXT record (to prove domain ownership and configure SPF), MX record (to route incoming mail to Exchange Online), and CNAME records (for Autodiscover, DKIM, and MDM/Intune).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. NS record for root nameservers, SOA record for zone serial numbers, and CAA record for certificate authority authorization: Bản ghi NS và SOA là bản ghi quản trị hệ thống phân giải tên miền chung, không phải các bản ghi đặc thù để xác thực dịch vụ M365. B. A record for local IIS web server, PTR record for reverse DNS lookup, and SRV record for Active Directory domain discovery: Các bản ghi PTR và SRV phục vụ cho hạ tầng mạng và định danh Active Directory truyền thống thay vì xác thực tên miền M365. D. RP record for responsible person, LOC record for geographical coordinates, and HINFO record for hardware information: Các bản ghi thông tin vị trí và phần cứng này đã lỗi thời và hoàn toàn không được sử dụng khi cấu hình tên miền trên Microsoft 365."
      },
      {
        "id": "net200-q158",
        "num": 158,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between \"Security Defaults\" and \"Conditional Access\" in Entra ID?",
        "questionVi": "Sự khác nhau giữa Security Defaults và Conditional Access trong Entra ID là gì?",
        "options": [
          {
            "key": "A",
            "text": "Security Defaults blocks all incoming email traffic, whereas Conditional Access only filters outgoing SMTP connections"
          },
          {
            "key": "B",
            "text": "Security Defaults requires Azure AD P2 licenses, whereas Conditional Access is enabled by default for all free tenants"
          },
          {
            "key": "C",
            "text": "Security Defaults manages user Exchange mailboxes, whereas Conditional Access exclusively controls SharePoint storage limits"
          },
          {
            "key": "D",
            "text": "Security Defaults provides free, pre-configured baseline security, whereas Conditional Access allows granular, rule-based policies by location and risk level"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Security Defaults provides free, pre-configured baseline security, whereas Conditional Access allows granular, rule-based policies by location and risk level",
        "explainRight": "Security Defaults là gói bảo mật cơ bản bật sẵn miễn phí cho mọi người, còn Conditional Access cho phép tùy biến điều kiện chi tiết theo từng ngữ cảnh. (Đáp án đầy đủ: Security Defaults provides free, pre-configured baseline security (requiring MFA for all users and blocking legacy authentication), whereas Conditional Access (Entra ID P1/P2) allows granular, rule-based policies by location, device compliance, and risk level.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Security Defaults blocks all incoming email traffic, whereas Conditional Access only filters outgoing SMTP connections: Security Defaults là tính năng bảo mật xác thực danh tính chứ không chặn luồng email đến của hệ thống. B. Security Defaults requires Azure AD P2 licenses, whereas Conditional Access is enabled by default for all free tenants: Thực tế ngược lại hoàn toàn: Security Defaults hoàn toàn miễn phí cho tenant cơ bản, còn Conditional Access yêu cầu giấy phép Entra ID P1 hoặc P2. C. Security Defaults manages user Exchange mailboxes, whereas Conditional Access exclusively controls SharePoint storage limits: Cả hai tính năng này đều quản lý việc truy cập và bảo mật danh tính, không liên quan đến việc quản lý hộp thư hay giới hạn lưu trữ SharePoint."
      },
      {
        "id": "net200-q159",
        "num": 159,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why is disabling legacy authentication protocols (like basic auth POP/IMAP/SMTP) critical in M365?",
        "questionVi": "Tại sao việc tắt các giao thức xác thực cũ (Legacy Authentication) lại quan trọng trong M365?",
        "options": [
          {
            "key": "A",
            "text": "Legacy authentication protocols consume excessive network bandwidth, causing high latency for Microsoft Teams video calls"
          },
          {
            "key": "B",
            "text": "Legacy authentication protocols automatically delete user mailboxes after 30 days of inactivity"
          },
          {
            "key": "C",
            "text": "Legacy authentication protocols require expensive Azure AD Premium P2 licenses to function properly"
          },
          {
            "key": "D",
            "text": "Legacy authentication protocols do not support Multi-Factor Authentication, making them a primary target for password spray and credential stuffing attacks"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Legacy authentication protocols do not support Multi-Factor Authentication, making them a primary target for password spray and credential stuffing attacks",
        "explainRight": "Các giao thức cũ không hỗ trợ xác thực hai bước nên kẻ xấu có thể vượt qua lớp bảo vệ MFA nếu vẫn để mở. (Đáp án đầy đủ: Legacy authentication protocols do not support Multi-Factor Authentication (MFA), making them a primary target for password spray and credential stuffing attacks.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Legacy authentication protocols consume excessive network bandwidth, causing high latency for Microsoft Teams video calls: Các giao thức xác thực cũ sử dụng rất ít băng thông, vấn đề chính của chúng nằm ở lỗ hổng bảo mật do thiếu MFA chứ không phải độ trễ mạng. B. Legacy authentication protocols automatically delete user mailboxes after 30 days of inactivity: Việc tự động xóa hộp thư là do chính sách giữ lại dữ liệu (Retention Policy), không liên quan đến phương thức xác thực cũ hay mới. C. Legacy authentication protocols require expensive Azure AD Premium P2 licenses to function properly: Xác thực cũ không yêu cầu giấy phép cao cấp mà thực tế các tổ chức phải chủ động tắt chúng để nâng cao mức độ an toàn."
      },
      {
        "id": "net200-q160",
        "num": 160,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between an Archive Mailbox and a Retention Policy in Exchange Online?",
        "questionVi": "Sự khác nhau giữa Archive Mailbox và Retention Policy trong Exchange Online là gì?",
        "options": [
          {
            "key": "A",
            "text": "An Archive Mailbox converts incoming emails to PDF format, whereas a Retention Policy blocks external phishing attachments"
          },
          {
            "key": "B",
            "text": "An Archive Mailbox provides secondary storage space for older emails, whereas a Retention Policy governs lifecycle rules for how long items must be preserved or deleted"
          },
          {
            "key": "C",
            "text": "An Archive Mailbox restricts user sending limits, whereas a Retention Policy automatically creates new user accounts"
          },
          {
            "key": "D",
            "text": "An Archive Mailbox deletes emails immediately upon receipt, whereas a Retention Policy increases primary mailbox storage capacity"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "An Archive Mailbox provides secondary storage space for older emails, whereas a Retention Policy governs lifecycle rules for how long items must be preserved or deleted",
        "explainRight": "Archive là kho lưu trữ mở rộng giúp hộp thư chính không bị đầy, còn Retention quy định thời hạn giữ lại hoặc tự động hủy dữ liệu theo quy định pháp lý. (Đáp án đầy đủ: An Archive Mailbox provides additional secondary storage space for older emails to keep the primary mailbox lightweight, whereas a Retention Policy governs lifecycle rules for how long items must be preserved or automatically deleted for compliance.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. An Archive Mailbox converts incoming emails to PDF format, whereas a Retention Policy blocks external phishing attachments: Hộp thư lưu trữ không thực hiện việc chuyển đổi định dạng tệp tin sang PDF, và chính sách lưu trữ không chịu trách nhiệm chặn tệp đính kèm lừa đảo. C. An Archive Mailbox restricts user sending limits, whereas a Retention Policy automatically creates new user accounts: Archive không làm nhiệm vụ giới hạn gửi thư của người dùng, cũng như Retention Policy không có chức năng tạo tài khoản mới. D. An Archive Mailbox deletes emails immediately upon receipt, whereas a Retention Policy increases primary mailbox storage capacity: Kho lưu trữ (Archive) dùng để lưu trữ lâu dài chứ không xóa email ngay lập tức, và chính sách lưu trữ không làm tăng dung lượng hộp thư chính."
      },
      {
        "id": "net200-q161",
        "num": 161,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is Safe Links vs. Safe Attachments in Microsoft Defender for Office 365?",
        "questionVi": "Safe Links và Safe Attachments trong Microsoft Defender khác nhau như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Safe Links scans email attachments in a virtual sandbox, while Safe Attachments rewrites URLs in real time upon user clicks"
          },
          {
            "key": "B",
            "text": "Safe Links and Safe Attachments both block malicious attachments and URLs at the mail gateway before the message hits the mailbox"
          },
          {
            "key": "C",
            "text": "Safe Links deletes malicious emails permanently, whereas Safe Attachments quarantines only outbound messages containing zero-day threats"
          },
          {
            "key": "D",
            "text": "Safe Links rewrites and scans URLs in real time at the moment a user clicks them to block malicious websites; Safe Attachments opens email attachments in an isolated virtual sandbox environment before delivery to detect zero-day malware"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Safe Links rewrites and scans URLs in real time at the moment a user clicks them to block malicious websites; Safe Attachments opens email attachments in an isolated virtual sandbox environment before delivery to detect zero-day malware",
        "explainRight": "Safe Links kiểm tra trang web ngay tại thời điểm bạn bấm chuột vào link, còn Safe Attachments mở thử tệp đính kèm trong phòng cách ly ảo trước khi giao thư. (Đáp án đầy đủ: Safe Links rewrites and scans URLs in real time at the moment a user clicks them to block malicious websites; Safe Attachments opens email attachments in an isolated virtual sandbox environment before delivery to detect zero-day malware.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Safe Links scans email attachments in a virtual sandbox, while Safe Attachments rewrites URLs in real time upon user clicks: Phương án này nhầm lẫn chức năng của hai tính năng; Safe Links thực chất xử lý URL còn Safe Attachments mới xử lý tệp đính kèm. B. Safe Links and Safe Attachments both block malicious attachments and URLs at the mail gateway before the message hits the mailbox: Cả hai tính năng này có mục tiêu bảo mật khác nhau và hoạt động ở các tầng xử lý riêng biệt chứ không chỉ đơn thuần lọc tại cổng gateway chung. C. Safe Links deletes malicious emails permanently, whereas Safe Attachments quarantines only outbound messages containing zero-day threats: Cơ chế cốt lõi của Safe Links và Safe Attachments là kiểm tra và cách ly mối đe dọa chứ không tự ý xóa vĩnh viễn hoặc chỉ quét thư đi."
      },
      {
        "id": "net200-q162",
        "num": 162,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How does Intune Compliance Policy differ from Intune Configuration Profile?",
        "questionVi": "Intune Compliance Policy khác với Intune Configuration Profile ở điểm nào?",
        "options": [
          {
            "key": "A",
            "text": "Compliance Policies enforce Wi-Fi and VPN settings, while Configuration Profiles evaluate device health for Conditional Access"
          },
          {
            "key": "B",
            "text": "Compliance Policies and Configuration Profiles both push security restrictions and monitor encryption status simultaneously"
          },
          {
            "key": "C",
            "text": "Compliance Policies evaluate whether a device meets security health rules (e.g., BitLocker enabled, minimum OS version) to grant or block access via Conditional Access; Configuration Profiles push settings and restrictions (Wi-Fi, VPN, password rules) onto the device"
          },
          {
            "key": "D",
            "text": "Configuration Profiles evaluate user credentials, whereas Compliance Policies manage application deployments across managed endpoints"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Compliance Policies evaluate whether a device meets security health rules (e.g., BitLocker enabled, minimum OS version) to grant or block access via Conditional Access; Configuration Profiles push settings and restrictions (Wi-Fi, VPN, password rules) onto the device",
        "explainRight": "Compliance Policy là \"bài kiểm tra đạt chuẩn an toàn\" để quyết định cho phép truy cập hay không, còn Configuration Profile là \"đẩy cấu hình cài đặt\" xuống thiết bị. (Đáp án đầy đủ: Compliance Policies evaluate whether a device meets security health rules (e.g., BitLocker enabled, minimum OS version) to grant or block access via Conditional Access; Configuration Profiles push settings and restrictions (Wi-Fi, VPN, password rules) onto the device.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Compliance Policies enforce Wi-Fi and VPN settings, while Configuration Profiles evaluate device health for Conditional Access: Phương án này hoán đổi hoàn toàn vai trò của Compliance Policy và Configuration Profile trong việc quản lý thiết bị. B. Compliance Policies and Configuration Profiles both push security restrictions and monitor encryption status simultaneously: Compliance Policy chuyên đánh giá trạng thái an toàn còn Configuration Profile chịu trách nhiệm cấu hình cài đặt, chúng có chức năng phân tách rõ ràng. D. Configuration Profiles evaluate user credentials, whereas Compliance Policies manage application deployments across managed endpoints: Cấu hình Profile không đánh giá định danh người dùng và Compliance Policy cũng không quản lý việc triển khai ứng dụng."
      },
      {
        "id": "net200-q163",
        "num": 163,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why is documentation the final mandatory step in both IT Support and M365 SOP workflows?",
        "questionVi": "Tại sao ghi chép tài liệu (Documentation) luôn là bước bắt buộc cuối cùng trong cả IT Support và M365 SOP?",
        "options": [
          {
            "key": "A",
            "text": "Proper documentation creates an audit trail for compliance, speeds up resolution of recurring incidents, aids Root Cause Analysis (RCA), and ensures seamless knowledge handoff across IT teams"
          },
          {
            "key": "B",
            "text": "Documentation replaces the need for continuous monitoring tools by predicting hardware failures in advance"
          },
          {
            "key": "C",
            "text": "Documentation ensures network bandwidth optimization and reduces packet loss during peak traffic hours"
          },
          {
            "key": "D",
            "text": "Documentation is primarily required to automatically configure firewalls and update Microsoft 365 license assignments"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Proper documentation creates an audit trail for compliance, speeds up resolution of recurring incidents, aids Root Cause Analysis (RCA), and ensures seamless knowledge handoff across IT teams",
        "explainRight": "Giúp lưu vết kiểm toán, rút ngắn thời gian xử lý nếu lỗi tái diễn và giúp các kỹ sư khác dễ dàng nắm bắt lịch sử hệ thống. (Đáp án đầy đủ: Proper documentation creates an audit trail for compliance, speeds up resolution of recurring incidents, aids Root Cause Analysis (RCA), and ensures seamless knowledge handoff across IT teams.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Documentation replaces the need for continuous monitoring tools by predicting hardware failures in advance: Tài liệu là quy trình tĩnh lưu trữ thông tin, không thể thay thế các công cụ giám sát thời gian thực hay dự đoán lỗi phần cứng. C. Documentation ensures network bandwidth optimization and reduces packet loss during peak traffic hours: Tài liệu kỹ thuật không trực tiếp can thiệp vào băng thông mạng hay giảm thiểu gói tin bị mất trên đường truyền. D. Documentation is primarily required to automatically configure firewalls and update Microsoft 365 license assignments: Ghi chép tài liệu phục vụ cho việc lưu vết và chia sẻ kiến thức, không dùng để cấu hình tự động tường lửa hay gán license."
      },
      {
        "id": "net200-q164",
        "num": 164,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between OSPF Type 1 (E1) and Type 2 (E2) external routes?",
        "questionVi": "Sự khác nhau giữa tuyến ngoài OSPF Type 1 (E1) và Type 2 (E2) là gì?",
        "options": [
          {
            "key": "A",
            "text": "E1 and E2 both ignore internal OSPF costs and rely strictly on BGP path attributes for route selection"
          },
          {
            "key": "B",
            "text": "E2 calculates metrics based on hop count only, whereas E1 uses bandwidth and delay metrics exclusively"
          },
          {
            "key": "C",
            "text": "E1 considers only the external redistribution cost, while E2 adds both internal and external costs together"
          },
          {
            "key": "D",
            "text": "E2 (default) considers only the external redistribution cost and ignores internal OSPF path cost; E1 adds both the internal OSPF cost to reach the ASBR and the external cost"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "E2 (default) considers only the external redistribution cost and ignores internal OSPF path cost; E1 adds both the internal OSPF cost to reach the ASBR and the external cost",
        "explainRight": "E2 chỉ tính chi phí đường đi bên ngoài, còn E1 cộng dồn cả chi phí đường đi nội bộ tới cổng ASBR nên chính xác hơn khi có nhiều ASBR. (Đáp án đầy đủ: E2 (default) considers only the external redistribution cost and ignores internal OSPF path cost; E1 adds both the internal OSPF cost to reach the ASBR and the external cost.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. E1 and E2 both ignore internal OSPF costs and rely strictly on BGP path attributes for route selection: Cả hai loại tuyến E1 và E2 đều nằm trong tiến trình OSPF và không phụ thuộc vào thuộc tính đường đi của BGP. B. E2 calculates metrics based on hop count only, whereas E1 uses bandwidth and delay metrics exclusively: OSPF không sử dụng số lượng hop count hay độ trễ (delay) thuần túy làm metric chính như EIGRP hay RIP. C. E1 considers only the external redistribution cost, while E2 adds both internal and external costs together: Phương án này phát biểu ngược lại hoàn toàn bản chất tính toán chi phí của tuyến E1 và E2."
      },
      {
        "id": "net200-q165",
        "num": 165,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between NULL DBD and actual DBD packets in OSPF ExStart vs. Exchange states?",
        "questionVi": "Gói NULL DBD ở trạng thái ExStart khác với DBD thực tế ở trạng thái Exchange như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "In ExStart, actual LSA databases are fully synchronized, while in Exchange, routers negotiate Master/Slave roles"
          },
          {
            "key": "B",
            "text": "In ExStart, empty (NULL) DBD packets are exchanged solely to negotiate initial sequence numbers and elect Master/Slave (highest Router ID becomes Master); in Exchange, actual DBD packets carrying LSA headers are sent"
          },
          {
            "key": "C",
            "text": "In ExStart, routers exchange routing table entries using NULL DBD, and in Exchange, they switch to full OSPF Hello packets"
          },
          {
            "key": "D",
            "text": "In ExStart, routers transition directly to the Full state without sending any packets, leaving Exchange for error checking"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "In ExStart, empty (NULL) DBD packets are exchanged solely to negotiate initial sequence numbers and elect Master/Slave (highest Router ID becomes Master); in Exchange, actual DBD packets carrying LSA headers are sent",
        "explainRight": "ExStart dùng gói rỗng để chọn bên dẫn dắt phiên đồng bộ trước, sau đó sang Exchange mới gửi danh sách tóm tắt các bản tin LSA. (Đáp án đầy đủ: In ExStart, empty (NULL) DBD packets are exchanged solely to negotiate initial sequence numbers and elect Master/Slave (highest Router ID becomes Master); in Exchange, actual DBD packets carrying LSA headers are sent.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. In ExStart, actual LSA databases are fully synchronized, while in Exchange, routers negotiate Master/Slave roles: Toàn bộ dữ liệu LSA chưa được đồng bộ ở giai đoạn ExStart mà chỉ diễn ra quá trình thỏa thuận vai trò và số thứ tự. C. In ExStart, routers exchange routing table entries using NULL DBD, and in Exchange, they switch to full OSPF Hello packets: Trạng thái ExStart dùng gói DBD rỗng chứ không chứa bảng định tuyến, và Exchange dùng gói DBD chứa tiêu đề LSA chứ không đổi sang Hello. D. In ExStart, routers transition directly to the Full state without sending any packets, leaving Exchange for error checking: Tiến trình OSPF bắt buộc phải đi qua các trạng thái tuần tự, không thể nhảy cóc từ ExStart lên Full mà bỏ qua Exchange."
      },
      {
        "id": "net200-q166",
        "num": 166,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why must interface MTUs match between two OSPF neighbors?",
        "questionVi": "Tại sao kích thước MTU trên cổng kết nối phải khớp nhau giữa hai router OSPF láng giềng?",
        "options": [
          {
            "key": "A",
            "text": "Differing MTU sizes cause routers to establish a bidirectional adjacency but drop all subsequent LSA update floods"
          },
          {
            "key": "B",
            "text": "If interface MTUs do not match, OSPF drops into the Down state and permanently disables the physical interface"
          },
          {
            "key": "C",
            "text": "Mismatched MTUs prevent OSPF routers from establishing a common Area ID during the initial Hello packet exchange"
          },
          {
            "key": "D",
            "text": "If interface MTUs do not match, OSPF neighbors get stuck in the ExStart/Exchange state because DBD packets fail validation/fragmentation checks"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "If interface MTUs do not match, OSPF neighbors get stuck in the ExStart/Exchange state because DBD packets fail validation/fragmentation checks",
        "explainRight": "Nếu kích thước gói tối đa hai đầu không khớp nhau, quá trình trao đổi danh mục dữ liệu sẽ bị kẹt cứng không thể lên trạng thái Full. (Đáp án đầy đủ: If interface MTUs do not match, OSPF neighbors get stuck in the ExStart/Exchange state because DBD packets fail validation/fragmentation checks.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Differing MTU sizes cause routers to establish a bidirectional adjacency but drop all subsequent LSA update floods: Trạng thái láng giềng sẽ không thể tiến lên Full (không thể thiết lập adjacency hoàn chỉnh) nếu bị kẹt ở ExStart/Exchange do MTU. B. If interface MTUs do not match, OSPF drops into the Down state and permanently disables the physical interface: Lệch MTU chỉ làm kẹt quá trình trao đổi DBD ở ExStart/Exchange chứ không làm sập trạng thái cổng vật lý thành Down. C. Mismatched MTUs prevent OSPF routers from establishing a common Area ID during the initial Hello packet exchange: Area ID được kiểm tra từ gói Hello ban đầu, trong khi lỗi lệch MTU chỉ bộc lộ khi router bắt đầu truyền gói DBD có kích thước lớn."
      },
      {
        "id": "net200-q167",
        "num": 167,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the three restrictions that apply to an OSPF Stub Area?",
        "questionVi": "Ba giới hạn bắt buộc áp dụng cho một OSPF Stub Area là gì?",
        "options": [
          {
            "key": "A",
            "text": "1. Virtual links are required across a stub area; 2. Area 0 can be a stub area; 3. ASBRs are fully supported inside standard stub areas"
          },
          {
            "key": "B",
            "text": "1. No virtual links are allowed across a stub area; 2. Area 0 (Backbone) cannot be configured as a stub area; 3. No ASBR (external route redistribution) is allowed inside a standard stub area"
          },
          {
            "key": "C",
            "text": "1. Only internal routers can initiate virtual links; 2. Area 0 acts as a stub; 3. ASBR redistribution is mandatory for all stub routers"
          },
          {
            "key": "D",
            "text": "1. Stub areas must support LSA Type 5; 2. Stub areas can be configured on the backbone; 3. External routes are injected directly without default routes"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "1. No virtual links are allowed across a stub area; 2. Area 0 (Backbone) cannot be configured as a stub area; 3. No ASBR (external route redistribution) is allowed inside a standard stub area",
        "explainRight": "Vùng Stub không được là vùng lõi Area 0, không được đặt đường nối ảo Virtual Link xuyên qua và không được chứa router cửa khẩu ASBR. (Đáp án đầy đủ: 1. No virtual links are allowed across a stub area; 2. Area 0 (Backbone) cannot be configured as a stub area; 3. No ASBR (external route redistribution) is allowed inside a standard stub area.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. 1. Virtual links are required across a stub area; 2. Area 0 can be a stub area; 3. ASBRs are fully supported inside standard stub areas: Phương án này mâu thuẫn hoàn toàn với các ràng buộc kỹ thuật tiêu chuẩn của một OSPF Stub Area. C. 1. Only internal routers can initiate virtual links; 2. Area 0 acts as a stub; 3. ASBR redistribution is mandatory for all stub routers: Vùng xương sống Area 0 không bao giờ được cấu hình là stub và quy tắc stub cấm tuyệt đối việc phân phối lại tuyến ngoài. D. 1. Stub areas must support LSA Type 5; 2. Stub areas can be configured on the backbone; 3. External routes are injected directly without default routes: Stub area tuyệt đối không cho phép bản tin Type 5 đi vào và không thể đặt làm vùng xương sống (Area 0)."
      },
      {
        "id": "net200-q168",
        "num": 168,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How is an NSSA (Not-So-Stubby Area) different from a standard Stub Area?",
        "questionVi": "Vùng NSSA khác với vùng Stub Area tiêu chuẩn ở điểm nào?",
        "options": [
          {
            "key": "A",
            "text": "An NSSA translates internal routes into BGP paths, while a standard Stub Area relies exclusively on OSPF Type 3 summaries"
          },
          {
            "key": "B",
            "text": "An NSSA blocks all external routes completely, whereas a standard Stub Area permits direct LSA Type 5 injections"
          },
          {
            "key": "C",
            "text": "An NSSA allows routers to send LSA Type 5 directly into the stub area without any translation mechanisms"
          },
          {
            "key": "D",
            "text": "Unlike a standard Stub Area, an NSSA allows a local ASBR to import external routes as LSA Type 7, which the ABR then translates into LSA Type 5 when flooding into Area 0"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Unlike a standard Stub Area, an NSSA allows a local ASBR to import external routes as LSA Type 7, which the ABR then translates into LSA Type 5 when flooding into Area 0",
        "explainRight": "NSSA vẫn chặn bản tin ngoài từ Area 0 tràn vào nhưng cho phép chính vùng đó kết nối với một mạng ngoài cục bộ thông qua bản tin Type 7. (Đáp án đầy đủ: Unlike a standard Stub Area, an NSSA allows a local ASBR to import external routes as LSA Type 7, which the ABR then translates into LSA Type 5 when flooding into Area 0.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. An NSSA translates internal routes into BGP paths, while a standard Stub Area relies exclusively on OSPF Type 3 summaries: NSSA và Stub Area đều thuộc tiến trình OSPF nội bộ, không liên quan đến việc chuyển đổi tuyến thành đường đi của BGP. B. An NSSA blocks all external routes completely, whereas a standard Stub Area permits direct LSA Type 5 injections: Phát biểu này bị ngược; chính vùng Stub tiêu chuẩn mới chặn tuyệt đối tuyến ngoài, còn NSSA cho phép đưa tuyến ngoài vào qua Type 7. C. An NSSA allows routers to send LSA Type 5 directly into the stub area without any translation mechanisms: Bản tin LSA Type 5 không được phép tồn tại bên trong vùng NSSA cho đến khi được ABR chuyển đổi từ LSA Type 7."
      },
      {
        "id": "net200-q169",
        "num": 169,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What happens when an OSPF DR fails in a broadcast network?",
        "questionVi": "Điều gì xảy ra khi router DR gặp sự cố trong mạng OSPF broadcast?",
        "options": [
          {
            "key": "A",
            "text": "All routers immediately drop their adjacencies and re-run an election for both DR and BDR from scratch simultaneously"
          },
          {
            "key": "B",
            "text": "The Backup Designated Router (BDR) immediately promotes itself to become the new DR, and a new election takes place among the remaining eligible routers to choose a new BDR"
          },
          {
            "key": "C",
            "text": "The router with the lowest Router ID automatically takes over as the new DR without promoting the existing BDR"
          },
          {
            "key": "D",
            "text": "The DR failure causes the network to transition into an OSPF Stub Area, bypassing the need for a BDR"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "The Backup Designated Router (BDR) immediately promotes itself to become the new DR, and a new election takes place among the remaining eligible routers to choose a new BDR",
        "explainRight": "Lớp phó BDR lập tức lên thay vị trí lớp trưởng DR, sau đó các router còn lại bầu ra một BDR mới dự phòng. (Đáp án đầy đủ: The Backup Designated Router (BDR) immediately promotes itself to become the new DR, and a new election takes place among the remaining eligible routers to choose a new BDR.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. All routers immediately drop their adjacencies and re-run an election for both DR and BDR from scratch simultaneously: Theo thiết kế của OSPF, BDR hiện tại sẽ tự động lên làm DR ngay lập tức để tránh làm gián đoạn toàn bộ mạng. C. The router with the lowest Router ID automatically takes over as the new DR without promoting the existing BDR: Tiêu chuẩn bầu chọn OSPF ưu tiên Router ID cao nhất (hoặc giá trị ưu tiên lớn nhất), không chọn Router ID thấp nhất. D. The DR failure causes the network to transition into an OSPF Stub Area, bypassing the need for a BDR: Sự cố của DR không liên quan gì đến việc chuyển đổi cấu trúc vùng mạng thành OSPF Stub Area."
      },
      {
        "id": "net200-q170",
        "num": 170,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why does a Point-to-Point OSPF link not elect a DR or BDR?",
        "questionVi": "Tại sao liên kết OSPF dạng Point-to-Point không cần bầu chọn DR hay BDR?",
        "options": [
          {
            "key": "A",
            "text": "Because DR and BDR elections are exclusively handled by the ABR in every OSPF network type"
          },
          {
            "key": "B",
            "text": "Because Point-to-Point links do not support multicast traffic required for exchanging Hello packets"
          },
          {
            "key": "C",
            "text": "Because there are only two routers directly connected at either end of the link, so there is no multiaccess adjacency overhead to optimize"
          },
          {
            "key": "D",
            "text": "Because Point-to-Point links automatically configure themselves as OSPF Stub Areas by default"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Because there are only two routers directly connected at either end of the link, so there is no multiaccess adjacency overhead to optimize",
        "explainRight": "Đường nối thẳng chỉ có đúng hai router hai đầu nên nói chuyện trực tiếp luôn, không cần bầu trung gian điều phối. (Đáp án đầy đủ: Because there are only two routers directly connected at either end of the link, so there is no multiaccess adjacency overhead to optimize.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Because DR and BDR elections are exclusively handled by the ABR in every OSPF network type: Quá trình bầu chọn DR/BDR diễn ra tại các phân đoạn mạng multiaccess chứ không phải do ABR đảm nhận cho mọi loại mạng. B. Because Point-to-Point links do not support multicast traffic required for exchanging Hello packets: Liên kết Point-to-Point vẫn sử dụng địa chỉ multicast để gửi gói tin Hello bình thường. D. Because Point-to-Point links automatically configure themselves as OSPF Stub Areas by default: Tính chất kết nối Point-to-Point hoàn toàn độc lập với khái niệm cấu hình vùng Stub Area của OSPF."
      },
      {
        "id": "net200-q171",
        "num": 171,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between a Route Summary in EIGRP/OSPF and a Default Route?",
        "questionVi": "Sự khác nhau giữa gộp tuyến (Route Summary) và tuyến mặc định (Default Route) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Route summarization blocks all unknown traffic via null routes, whereas a default route redistributes external routes into OSPF areas"
          },
          {
            "key": "B",
            "text": "Route summarization matches unknown destination addresses, whereas a default route aggregates contiguous subnets into parent prefixes"
          },
          {
            "key": "C",
            "text": "Route summarization aggregates multiple contiguous subnets into a single specific parent prefix (e.g., 192.168.0.0/22), whereas a default route (0.0.0.0/0) matches any unknown destination address"
          },
          {
            "key": "D",
            "text": "Route summarization creates dynamic host routes for every single IP address, while a default route acts as a floating static route for loopback interfaces"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Route summarization aggregates multiple contiguous subnets into a single specific parent prefix (e.g., 192.168.0.0/22), whereas a default route (0.0.0.0/0) matches any unknown destination address",
        "explainRight": "Gộp tuyến là gom nhiều dải IP liền kề thành một dải lớn đại diện, còn tuyến mặc định là lối đi chung cho mọi địa chỉ chưa biết. (Đáp án đầy đủ: Route summarization aggregates multiple contiguous subnets into a single specific parent prefix (e.g., 192.168.0.0/22), whereas a default route (0.0.0.0/0) matches any unknown destination address.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Route summarization blocks all unknown traffic via null routes, whereas a default route redistributes external routes into OSPF areas: Phương án này không chính xác vì gộp tuyến không dùng để chặn lưu lượng thông qua null route hay phân phối lại tuyến OSPF. B. Route summarization matches unknown destination addresses, whereas a default route aggregates contiguous subnets into parent prefixes: Phương án này hoán đổi ngược hoàn toàn định nghĩa chức năng của gộp tuyến và tuyến mặc định. D. Route summarization creates dynamic host routes for every single IP address, while a default route acts as a floating static route for loopback interfaces: Phương án này mô tả sai vì gộp tuyến gom các mạng con lại với nhau chứ không tạo ra các host route riêng biệt cho từng IP."
      },
      {
        "id": "net200-q172",
        "num": 172,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why does BGP use TCP port 179 instead of UDP or a custom IP protocol?",
        "questionVi": "Tại sao BGP sử dụng TCP cổng 179 thay vì UDP hay giao thức IP riêng?",
        "options": [
          {
            "key": "A",
            "text": "Relying on TCP provides built-in reliable delivery, sequencing, flow control, and session state management for massive Internet routing tables without BGP needing to re-implement transport reliability"
          },
          {
            "key": "B",
            "text": "TCP port 179 allows BGP to utilize IP multicast addresses to discover all neighboring routers on a multi-access network instantly"
          },
          {
            "key": "C",
            "text": "TCP port 179 provides hardware-level packet encryption and prevents man-in-the-middle attacks natively without requiring any configuration"
          },
          {
            "key": "D",
            "text": "Using TCP ensures connectionless transmission with minimum overhead, allowing BGP routers to bypass the slow TCP handshake process"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Relying on TCP provides built-in reliable delivery, sequencing, flow control, and session state management for massive Internet routing tables without BGP needing to re-implement transport reliability",
        "explainRight": "Bảng định tuyến Internet cực kỳ khổng lồ nên BGP mượn sẵn cơ chế truyền tin cậy, chia gói và kiểm soát lỗi của TCP để đảm bảo không sót tuyến nào. (Đáp án đầy đủ: Relying on TCP provides built-in reliable delivery, sequencing, flow control, and session state management for massive Internet routing tables without BGP needing to re-implement transport reliability.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. TCP port 179 allows BGP to utilize IP multicast addresses to discover all neighboring routers on a multi-access network instantly: Phương án này sai kỹ thuật vì BGP sử dụng TCP unicast trực tiếp chứ không dùng IP multicast để tìm kiếm láng giềng. C. TCP port 179 provides hardware-level packet encryption and prevents man-in-the-middle attacks natively without requiring any configuration: Phương án này sai vì TCP không cung cấp mã hóa phần cứng gốc hay chống MITM mà không cần cấu hình cấu trúc bảo mật bổ sung. D. Using TCP ensures connectionless transmission with minimum overhead, allowing BGP routers to bypass the slow TCP handshake process: Phương án này mâu thuẫn vì bản chất TCP là giao thức hướng kết nối và có độ trễ bắt tay, không phải là truyền dẫn phi kết nối tốc độ cao."
      },
      {
        "id": "net200-q173",
        "num": 173,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why does a BGP router not add its own ASN to the AS_PATH when advertising to an iBGP peer?",
        "questionVi": "Tại sao router BGP không chèn mã ASN của chính mình vào AS_PATH khi gửi tuyến cho láng giềng iBGP?",
        "options": [
          {
            "key": "A",
            "text": "Because interior routers automatically drop any update messages that contain matching autonomous system numbers from the local organization"
          },
          {
            "key": "B",
            "text": "Because iBGP requires the AS_PATH attribute to be completely empty at all times to satisfy strict RFC compliance rules for interior routing"
          },
          {
            "key": "C",
            "text": "Because iBGP peers belong to the same Autonomous System; adding the ASN internally would cause receiving iBGP peers to falsely detect an AS_PATH loop and drop valid internal routes"
          },
          {
            "key": "D",
            "text": "Because adding an ASN inside an iBGP session converts the peering session into an eBGP session, breaking internal routing policies"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Because iBGP peers belong to the same Autonomous System; adding the ASN internally would cause receiving iBGP peers to falsely detect an AS_PATH loop and drop valid internal routes",
        "explainRight": "Các router iBGP đều ở chung một nhà mạng; nếu gắn mã AS vào thì các router đồng nghiệp trong cùng nhà mạng sẽ tưởng nhầm bị lặp vòng và xóa mất tuyến. (Đáp án đầy đủ: Because iBGP peers belong to the same Autonomous System; adding the ASN internally would cause receiving iBGP peers to falsely detect an AS_PATH loop and drop valid internal routes.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Because interior routers automatically drop any update messages that contain matching autonomous system numbers from the local organization: Phương án này không đúng vì các router nội bộ không tự động loại bỏ bản tin chỉ vì chứa mã AS cục bộ trừ khi áp dụng luật chống lặp vòng của eBGP. B. Because iBGP requires the AS_PATH attribute to be completely empty at all times to satisfy strict RFC compliance rules for interior routing: Phương án này sai vì iBGP vẫn duy trì các thuộc tính đường dẫn và AS_PATH không bắt buộc phải luôn rỗng. D. Because adding an ASN inside an iBGP session converts the peering session into an eBGP session, breaking internal routing policies: Phương án này sai vì việc chuyển đổi giữa iBGP và eBGP phụ thuộc vào cấu hình số hiệu ASN của láng giềng chứ không phải việc chèn ASN vào bản tin."
      },
      {
        "id": "net200-q174",
        "num": 174,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What triggers a BGP Notification message?",
        "questionVi": "Điều gì kích hoạt bản tin Notification trong BGP?",
        "options": [
          {
            "key": "A",
            "text": "A Notification message activates when the TCP window size drops below the minimum threshold required for exchanging BGP table updates"
          },
          {
            "key": "B",
            "text": "Any detected protocol error—such as mismatched AS numbers, unsupported capabilities, authentication failure, or Hold Timer expiration—triggers a Notification message and immediately tears down the BGP session"
          },
          {
            "key": "C",
            "text": "A Notification message is sent periodically every 30 seconds to confirm that the BGP neighbor is still alive and operational"
          },
          {
            "key": "D",
            "text": "A BGP Notification message is triggered when a route passes through more than 255 Autonomous Systems, forcing a graceful restart of the routing table"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Any detected protocol error—such as mismatched AS numbers, unsupported capabilities, authentication failure, or Hold Timer expiration—triggers a Notification message and immediately tears down the BGP session",
        "explainRight": "Khi phát hiện lỗi thông số kết nối, sai mật khẩu hoặc hết thời gian chờ phản hồi, BGP gửi thông báo lỗi này và ngắt phiên kết nối. (Đáp án đầy đủ: Any detected protocol error—such as mismatched AS numbers, unsupported capabilities, authentication failure, or Hold Timer expiration—triggers a Notification message and immediately tears down the BGP session.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A Notification message activates when the TCP window size drops below the minimum threshold required for exchanging BGP table updates: Phương án này sai vì Notification phản hồi lỗi giao thức định tuyến chứ không liên quan đến kích thước cửa sổ TCP. C. A Notification message is sent periodically every 30 seconds to confirm that the BGP neighbor is still alive and operational: Phương án này nhầm lẫn giữa bản tin Keepalive định kỳ và bản tin Notification dùng riêng để báo lỗi. D. A BGP Notification message is triggered when a route passes through more than 255 Autonomous Systems, forcing a graceful restart of the routing table: Phương án này sai vì vượt quá giới hạn hop count của eBGP không kích hoạt bản tin Notification theo cách này."
      },
      {
        "id": "net200-q175",
        "num": 175,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between Static NAT, Dynamic NAT, and PAT (NAT Overload)?",
        "questionVi": "Sự khác nhau giữa Static NAT, Dynamic NAT và PAT (NAT Overload) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Static NAT provides port address translation, whereas Dynamic NAT converts public IP addresses back into MAC addresses for layer 2 switching"
          },
          {
            "key": "B",
            "text": "Static NAT maps many private IPs to a single public IP using port numbers, while Dynamic NAT uses a 1-to-1 permanent mapping table"
          },
          {
            "key": "C",
            "text": "PAT maps one private IP to one fixed public IP, while Dynamic NAT uses layer 4 port tracking to multiplex hundreds of hosts simultaneously"
          },
          {
            "key": "D",
            "text": "Static NAT maps one private IP to one fixed public IP (1-to-1); Dynamic NAT maps private IPs to a pool of available public IPs (many-to-many); PAT maps many private IPs to a single public IP by tracking unique source port numbers (many-to-1)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Static NAT maps one private IP to one fixed public IP (1-to-1); Dynamic NAT maps private IPs to a pool of available public IPs (many-to-many); PAT maps many private IPs to a single public IP by tracking unique source port numbers (many-to-1)",
        "explainRight": "Static NAT ánh xạ cố định 1-1 cho máy chủ, Dynamic NAT chia theo nhóm IP công cộng, còn PAT cho cả văn phòng dùng chung một IP công cộng qua các số cổng khác nhau. (Đáp án đầy đủ: Static NAT maps one private IP to one fixed public IP (1-to-1); Dynamic NAT maps private IPs to a pool of available public IPs (many-to-many); PAT maps many private IPs to a single public IP by tracking unique source port numbers (many-to-1).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Static NAT provides port address translation, whereas Dynamic NAT converts public IP addresses back into MAC addresses for layer 2 switching: Phương án này sai về mặt bản chất vì NAT hoạt động ở tầng mạng/tầng giao vận chứ không đổi IP thành địa chỉ MAC. B. Static NAT maps many private IPs to a single public IP using port numbers, while Dynamic NAT uses a 1-to-1 permanent mapping table: Phương án này sai hoàn toàn vì gán nhầm cơ chế của PAT sang Static NAT và ngược lại. C. PAT maps one private IP to one fixed public IP, while Dynamic NAT uses layer 4 port tracking to multiplex hundreds of hosts simultaneously: Phương án này bị đảo ngược chức năng cơ bản giữa Static NAT và PAT."
      },
      {
        "id": "net200-q176",
        "num": 176,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is NAT Exemption and when is it used?",
        "questionVi": "NAT Exemption là gì và được sử dụng khi nào?",
        "options": [
          {
            "key": "A",
            "text": "NAT Exemption converts public IP addresses into internal loopback addresses to hide the core firewall from external reconnaissance scans"
          },
          {
            "key": "B",
            "text": "NAT Exemption automatically translates private IP addresses into a dynamic pool of public IPs to optimize bandwidth during heavy internet browsing"
          },
          {
            "key": "C",
            "text": "NAT Exemption (No-NAT) instructs the firewall not to translate IP addresses for specific traffic flows, commonly used for Site-to-Site VPN traffic between private corporate subnets"
          },
          {
            "key": "D",
            "text": "NAT Exemption forces the firewall to drop all unencrypted traffic entering the perimeter, bypassing normal security policy inspection"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "NAT Exemption (No-NAT) instructs the firewall not to translate IP addresses for specific traffic flows, commonly used for Site-to-Site VPN traffic between private corporate subnets",
        "explainRight": "Là quy tắc miễn dịch không đổi địa chỉ IP, thường dùng khi hai chi nhánh công ty kết nối qua đường hầm VPN nội bộ với nhau. (Đáp án đầy đủ: NAT Exemption (No-NAT) instructs the firewall not to translate IP addresses for specific traffic flows, commonly used for Site-to-Site VPN traffic between private corporate subnets.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. NAT Exemption converts public IP addresses into internal loopback addresses to hide the core firewall from external reconnaissance scans: Phương án này mô tả sai tính năng, vì quy tắc này giữ nguyên địa chỉ gốc thay vì đổi thành địa chỉ loopback. B. NAT Exemption automatically translates private IP addresses into a dynamic pool of public IPs to optimize bandwidth during heavy internet browsing: Phương án này mâu thuẫn vì NAT Exemption có nghĩa là không thực hiện NAT, chứ không phải là đổi IP sang pool công cộng. D. NAT Exemption forces the firewall to drop all unencrypted traffic entering the perimeter, bypassing normal security policy inspection: Phương án này sai vì No-NAT không liên quan đến việc drop lưu lượng không mã hóa hay bỏ qua kiểm tra chính sách bảo mật."
      },
      {
        "id": "net200-q177",
        "num": 177,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why does Palo Alto perform SSL/TLS Decryption and what security benefit does it provide?",
        "questionVi": "Tại sao Palo Alto thực hiện SSL/TLS Decryption và lợi ích bảo mật của nó là gì?",
        "options": [
          {
            "key": "A",
            "text": "Most modern web traffic and malware communications are encrypted with TLS/HTTPS; decrypting traffic at the firewall exposes hidden threats, exploits, and data exfiltration to Content-ID and WildFire inspection"
          },
          {
            "key": "B",
            "text": "SSL/TLS Decryption converts secure web traffic into plain text to store unencrypted user credentials permanently in local log databases"
          },
          {
            "key": "C",
            "text": "Decrypting HTTPS traffic allows the firewall to rewrite destination MAC addresses for optimized layer 2 load balancing"
          },
          {
            "key": "D",
            "text": "SSL/TLS Decryption is primarily used to compress encrypted packets to reduce overall bandwidth consumption across congested WAN links"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Most modern web traffic and malware communications are encrypted with TLS/HTTPS; decrypting traffic at the firewall exposes hidden threats, exploits, and data exfiltration to Content-ID and WildFire inspection",
        "explainRight": "Kẻ xấu thường giấu mã độc trong lưu lượng HTTPS mã hóa; tường lửa giải mã tạm thời để kiểm tra sạch sẽ rồi mới mã hóa lại gửi đi tiếp. (Đáp án đầy đủ: Most modern web traffic and malware communications are encrypted with TLS/HTTPS; decrypting traffic at the firewall exposes hidden threats, exploits, and data exfiltration to Content-ID and WildFire inspection.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. SSL/TLS Decryption converts secure web traffic into plain text to store unencrypted user credentials permanently in local log databases: Phương án này sai về mục đích bảo mật vì tường lửa không lưu trữ mật khẩu dạng plain text của người dùng. C. Decrypting HTTPS traffic allows the firewall to rewrite destination MAC addresses for optimized layer 2 load balancing: Phương án này sai lệch về tầng mạng, vì giải mã gói tin ứng dụng không liên quan đến việc viết lại địa chỉ MAC ở tầng 2. D. SSL/TLS Decryption is primarily used to compress encrypted packets to reduce overall bandwidth consumption across congested WAN links: Phương án này sai vì việc giải mã SSL thực tế tốn thêm tài nguyên chứ không dùng để nén băng thông WAN."
      },
      {
        "id": "net200-q178",
        "num": 178,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is WildFire in Palo Alto Networks?",
        "questionVi": "Tính năng WildFire trong Palo Alto Networks là gì?",
        "options": [
          {
            "key": "A",
            "text": "WildFire acts as a high-performance Layer 4 stateful inspection firewall module that blocks unauthorized TCP port scans instantly"
          },
          {
            "key": "B",
            "text": "WildFire is a cloud-managed database backup utility that synchronizes firewall configuration files across multiple datacenters"
          },
          {
            "key": "C",
            "text": "A cloud-based threat analysis and sandboxing service that detonates unknown files and links in a safe virtual environment to detect zero-day malware and automatically distribute new signatures globally"
          },
          {
            "key": "D",
            "text": "WildFire is an on-premise proxy caching engine designed to accelerate web page loading speeds for remote branch office users"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A cloud-based threat analysis and sandboxing service that detonates unknown files and links in a safe virtual environment to detect zero-day malware and automatically distribute new signatures globally",
        "explainRight": "Đưa các tệp tin lạ nghi ngờ lên môi trường cách ly trên đám mây để chạy thử hành vi, phát hiện mã độc mới chưa từng có trong danh sách cũ. (Đáp án đầy đủ: A cloud-based threat analysis and sandboxing service that detonates unknown files and links in a safe virtual environment to detect zero-day malware and automatically distribute new signatures globally.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. WildFire acts as a high-performance Layer 4 stateful inspection firewall module that blocks unauthorized TCP port scans instantly: Phương án này sai vì WildFire tập trung vào phân tích mã độc nâng cao chứ không phải là module quét cổng tầng 4 thông thường. B. WildFire is a cloud-managed database backup utility that synchronizes firewall configuration files across multiple datacenters: Phương án này nhầm lẫn WildFire với dịch vụ sao lưu cấu hình hệ thống. D. WildFire is an on-premise proxy caching engine designed to accelerate web page loading speeds for remote branch office users: Phương án này sai vì WildFire không phải là thiết bị lưu đệm proxy tại chỗ để tăng tốc độ web."
      },
      {
        "id": "net200-q179",
        "num": 179,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between Active/Passive and Active/Active High Availability in Palo Alto?",
        "questionVi": "Sự khác nhau giữa chế độ dự phòng Active/Passive và Active/Active trên Palo Alto là gì?",
        "options": [
          {
            "key": "A",
            "text": "In Active/Passive (most common), one firewall actively processes all traffic while the second stands by with synchronized configs/sessions for automatic failover; in Active/Active, both firewalls simultaneously process traffic and share load"
          },
          {
            "key": "B",
            "text": "In Active/Passive, both firewalls process traffic simultaneously using load balancing, while in Active/Active only one firewall remains operational"
          },
          {
            "key": "C",
            "text": "In Active/Passive, sessions are never synchronized between devices, causing user disconnections during failover, whereas Active/Active requires manual intervention"
          },
          {
            "key": "D",
            "text": "In Active/Passive, the standby firewall blocks all routing updates to save power, while Active/Active disables session failover capabilities"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "In Active/Passive (most common), one firewall actively processes all traffic while the second stands by with synchronized configs/sessions for automatic failover; in Active/Active, both firewalls simultaneously process traffic and share load",
        "explainRight": "Active/Passive có một máy chạy chính và một máy trực sẵn sàng thế chỗ khi hỏng, còn Active/Active cho cả hai máy cùng gánh lưu lượng. (Đáp án đầy đủ: In Active/Passive (most common), one firewall actively processes all traffic while the second stands by with synchronized configs/sessions for automatic failover; in Active/Active, both firewalls simultaneously process traffic and share load.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. In Active/Passive, both firewalls process traffic simultaneously using load balancing, while in Active/Active only one firewall remains operational: Phương án này định nghĩa sai lệch hoàn toàn khi gán tính năng cân bằng tải cho chế độ Active/Passive. C. In Active/Passive, sessions are never synchronized between devices, causing user disconnections during failover, whereas Active/Active requires manual intervention: Phương án này sai vì chế độ Active/Passive thực tế có đồng bộ session để chuyển đổi dự phòng mượt mà mà không mất kết nối. D. In Active/Passive, the standby firewall blocks all routing updates to save power, while Active/Active disables session failover capabilities: Phương án này sai kỹ thuật vì thiết bị dự phòng vẫn duy trì trạng thái hoạt động và cập nhật trạng thái liên tục."
      },
      {
        "id": "net200-q180",
        "num": 180,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is CASB (Cloud Access Security Broker) in Zscaler?",
        "questionVi": "CASB (Cloud Access Security Broker) trong Zscaler là gì?",
        "options": [
          {
            "key": "A",
            "text": "A cloud security enforcement point sitting between users and cloud/SaaS applications (like Microsoft 365, Google Workspace, Salesforce) to enforce visibility, compliance, access control, and data protection"
          },
          {
            "key": "B",
            "text": "CASB is an endpoint encryption agent that secures local hard drives against unauthorized physical access and theft"
          },
          {
            "key": "C",
            "text": "CASB is a hardware-based routing protocol designed to aggregate multiple MPLS circuits into a single virtual WAN interface"
          },
          {
            "key": "D",
            "text": "CASB acts as a local DNS resolver that translates fully qualified domain names into private IP addresses for internal web servers"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "A cloud security enforcement point sitting between users and cloud/SaaS applications (like Microsoft 365, Google Workspace, Salesforce) to enforce visibility, compliance, access control, and data protection",
        "explainRight": "Đóng vai trò người gác cổng kiểm soát cách nhân viên sử dụng các ứng dụng đám mây SaaS và ngăn chặn chia sẻ dữ liệu trái phép. (Đáp án đầy đủ: A cloud security enforcement point sitting between users and cloud/SaaS applications (like Microsoft 365, Google Workspace, Salesforce) to enforce visibility, compliance, access control, and data protection.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. CASB is an endpoint encryption agent that secures local hard drives against unauthorized physical access and theft: Phương án này nhầm lẫn CASB với phần mềm mã hóa ổ cứng thiết bị đầu cuối (Disk Encryption). C. CASB is a hardware-based routing protocol designed to aggregate multiple MPLS circuits into a single virtual WAN interface: Phương án này sai vì CASB không phải là giao thức định tuyến phần cứng dùng để gộp mạch MPLS. D. CASB acts as a local DNS resolver that translates fully qualified domain names into private IP addresses for internal web servers: Phương án này sai bản chất vì CASB không đóng vai trò là máy chủ phân giải tên miền DNS nội bộ."
      },
      {
        "id": "net200-q181",
        "num": 181,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is a Secure Web Gateway (SWG) in ZIA?",
        "questionVi": "Secure Web Gateway (SWG) trong ZIA là gì?",
        "options": [
          {
            "key": "A",
            "text": "A cloud-hosted email security gateway designed strictly to quarantine inbound spam and block phishing attachments"
          },
          {
            "key": "B",
            "text": "An on-premises hardware firewall appliance that inspects local layer 2 frames and enforces VLAN access control lists"
          },
          {
            "key": "C",
            "text": "A cloud-delivered security service that filters unwanted web traffic, enforces corporate acceptable-use policies, blocks malicious URLs, and inspects downloads before users reach the open Internet"
          },
          {
            "key": "D",
            "text": "A software-based VPN client installed on endpoint devices to encrypt all traffic directly back to corporate data centers"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A cloud-delivered security service that filters unwanted web traffic, enforces corporate acceptable-use policies, blocks malicious URLs, and inspects downloads before users reach the open Internet",
        "explainRight": "Cổng lọc web an toàn trên đám mây giúp chặn trang web độc hại và ngăn tải mã độc khi nhân viên lướt web. (Đáp án đầy đủ: A cloud-delivered security service that filters unwanted web traffic, enforces corporate acceptable-use policies, blocks malicious URLs, and inspects downloads before users reach the open Internet.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A cloud-hosted email security gateway designed strictly to quarantine inbound spam and block phishing attachments: Cổng bảo mật email đám mây chỉ chuyên xử lý thư rác và tệp đính kèm lừa đảo qua email chứ không kiểm tra lưu lượng web tổng quát. B. An on-premises hardware firewall appliance that inspects local layer 2 frames and enforces VLAN access control lists: Tường lửa vật lý tại chỗ chỉ kiểm soát khung dữ liệu tầng 2 và danh sách kiểm soát truy cập VLAN chứ không hoạt động như một dịch vụ SWG trên đám mây. D. A software-based VPN client installed on endpoint devices to encrypt all traffic directly back to corporate data centers: Phần mềm VPN client chỉ mã hóa và định tuyến lưu lượng về trung tâm dữ liệu chứ không cung cấp tính năng lọc web và chính sách sử dụng chấp nhận được."
      },
      {
        "id": "net200-q182",
        "num": 182,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why does Zscaler eliminate the need for traditional backhauling VPNs for remote workers?",
        "questionVi": "Tại sao Zscaler loại bỏ nhu cầu dùng VPN truyền thống (backhauling) cho nhân viên làm việc từ xa?",
        "options": [
          {
            "key": "A",
            "text": "Zscaler forces all remote user traffic to flow through a primary data center firewall to maintain strict perimeter security"
          },
          {
            "key": "B",
            "text": "Zscaler eliminates routing completely by converting all Layer 3 IP packets into Layer 2 broadcast frames"
          },
          {
            "key": "C",
            "text": "Zscaler replaces local internet breakouts with dedicated point-to-point leased circuits managed by local telecom providers"
          },
          {
            "key": "D",
            "text": "Instead of routing remote traffic back through a central headquarters firewall (causing latency and bottlenecks), Zscaler connects users directly to the nearest cloud POP under Zero Trust principles"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Instead of routing remote traffic back through a central headquarters firewall (causing latency and bottlenecks), Zscaler connects users directly to the nearest cloud POP under Zero Trust principles",
        "explainRight": "Nhân viên ở nhà kết nối thẳng lên trạm đám mây Zscaler gần nhất thay vì phải đi đường vòng qua máy chủ trụ sở chính, giúp mạng nhanh hơn hẳn. (Đáp án đầy đủ: Instead of routing remote traffic back through a central headquarters firewall (causing latency and bottlenecks), Zscaler connects users directly to the nearest cloud POP under Zero Trust principles.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Zscaler forces all remote user traffic to flow through a primary data center firewall to maintain strict perimeter security: Việc ép lưu lượng đi qua tường lửa trung tâm sẽ gây nghẽn cổ chai và độ trễ cao, đi ngược lại mô hình kết nối trực tiếp của Zscaler. B. Zscaler eliminates routing completely by converting all Layer 3 IP packets into Layer 2 broadcast frames: Zscaler hoạt động ở các tầng mạng cao hơn và không bao giờ chuyển đổi gói tin IP thành khung broadcast tầng 2. C. Zscaler replaces local internet breakouts with dedicated point-to-point leased circuits managed by local telecom providers: Zscaler sử dụng nền tảng đám mây toàn cầu chứ không yêu cầu các đường truyền thuê riêng đắt đỏ từ nhà mạng viễn thông."
      },
      {
        "id": "net200-q183",
        "num": 183,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the benefits of labeling both ends of every cable in structured cabling?",
        "questionVi": "Lợi ích của việc dán nhãn cả hai đầu mỗi sợi cáp trong hệ thống cáp cấu trúc là gì?",
        "options": [
          {
            "key": "A",
            "text": "Technicians can immediately trace which patch panel port connects to which switch port or wall outlet without pulling cables, drastically reducing troubleshooting time and human error"
          },
          {
            "key": "B",
            "text": "Technicians can boost cable transmission speeds and reduce signal attenuation across long copper distance runs"
          },
          {
            "key": "C",
            "text": "Technicians can automatically power network switches via Power over Ethernet without plugging in external power bricks"
          },
          {
            "key": "D",
            "text": "Technicians can dynamically convert unshielded twisted pair copper cables into fiber optic signals without media converters"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Technicians can immediately trace which patch panel port connects to which switch port or wall outlet without pulling cables, drastically reducing troubleshooting time and human error",
        "explainRight": "Nhìn vào đầu dây ở tủ mạng là biết ngay đầu kia cắm vào cổng nào, không phải dò tay từng sợi dây gây nhầm lẫn. (Đáp án đầy đủ: Technicians can immediately trace which patch panel port connects to which switch port or wall outlet without pulling cables, drastically reducing troubleshooting time and human error.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Technicians can boost cable transmission speeds and reduce signal attenuation across long copper distance runs: Việc dán nhãn cáp chỉ giúp quản lý và định vị vật lý chứ không làm tăng tốc độ truyền dẫn hay giảm suy hao tín hiệu. C. Technicians can automatically power network switches via Power over Ethernet without plugging in external power bricks: Cấp nguồn qua PoE phụ thuộc vào phần cứng switch và thiết bị đầu cuối chứ không liên quan đến việc dán nhãn cáp. D. Technicians can dynamically convert unshielded twisted pair copper cables into fiber optic signals without media converters: Cáp đồng UTP không thể tự chuyển đổi thành tín hiệu quang chỉ bằng cách dán nhãn mà bắt buộc phải dùng bộ chuyển đổi quang điện."
      },
      {
        "id": "net200-q184",
        "num": 184,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between ipconfig /release, ipconfig /renew, and ipconfig /flushdns?",
        "questionVi": "Sự khác nhau giữa các lệnh ipconfig /release, ipconfig /renew và ipconfig /flushdns là gì?",
        "options": [
          {
            "key": "A",
            "text": "/release clears the ARP table cache; /renew forces a hardware MAC address change; /flushdns resets the TCP/IP stack registry keys"
          },
          {
            "key": "B",
            "text": "/release permanently disables the network adapter; /renew reboots the router firmware; /flushdns deletes all local Windows user profiles"
          },
          {
            "key": "C",
            "text": "/release flushes the DNS cache; /renew renews the DHCP lease; /flushdns releases the active IP address configuration"
          },
          {
            "key": "D",
            "text": "/release drops the current DHCP IPv4 lease; /renew requests a fresh IP configuration from the DHCP server; /flushdns clears the local DNS resolver cache to remove outdated domain-to-IP records"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "/release drops the current DHCP IPv4 lease; /renew requests a fresh IP configuration from the DHCP server; /flushdns clears the local DNS resolver cache to remove outdated domain-to-IP records",
        "explainRight": "Bộ ba lệnh làm mới địa chỉ IP và xóa bộ nhớ đệm tên miền cũ khi máy tính gặp lỗi kết nối mạng hoặc không vào được web. (Đáp án đầy đủ: /release drops the current DHCP IPv4 lease; /renew requests a fresh IP configuration from the DHCP server; /flushdns clears the local DNS resolver cache to remove outdated domain-to-IP records.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. /release clears the ARP table cache; /renew forces a hardware MAC address change; /flushdns resets the TCP/IP stack registry keys: Các lệnh này quản lý DHCP lease và DNS cache chứ không can thiệp vào bảng ARP, thay đổi địa chỉ MAC phần cứng hay cấu hình registry. B. /release permanently disables the network adapter; /renew reboots the router firmware; /flushdns deletes all local Windows user profiles: Lệnh /release chỉ hủy địa chỉ IP hiện tại chứ không vô hiệu hóa vĩnh viễn card mạng hay khởi động lại bộ định tuyến. C. /release flushes the DNS cache; /renew renews the DHCP lease; /flushdns releases the active IP address configuration: Ý nghĩa các lệnh bị tráo đổi hoàn toàn so với chức năng chuẩn của từng tham số ipconfig."
      },
      {
        "id": "net200-q185",
        "num": 185,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the roles of tasklist, taskkill, services.msc, and sc config in Windows administration?",
        "questionVi": "Vai trò của tasklist, taskkill, services.msc và sc config trong quản trị Windows là gì?",
        "options": [
          {
            "key": "A",
            "text": "tasklist monitors active user sessions; taskkill formats hard drives; services.msc opens the Group Policy editor; sc config edits system registry permissions"
          },
          {
            "key": "B",
            "text": "tasklist configures network adapter IP addresses; taskkill restarts the computer; services.msc clears the event logs; sc config manages disk partitions"
          },
          {
            "key": "C",
            "text": "tasklist lists running processes and PIDs; taskkill terminates hung processes by name or PID; services.msc opens the graphical Windows Services manager; sc config modifies service startup types and parameters via CLI"
          },
          {
            "key": "D",
            "text": "tasklist displays hardware specifications; taskkill manages firewall rules; services.msc tests network latency; sc config updates device drivers"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "tasklist lists running processes and PIDs; taskkill terminates hung processes by name or PID; services.msc opens the graphical Windows Services manager; sc config modifies service startup types and parameters via CLI",
        "explainRight": "Các công cụ giúp xem danh sách tiến trình đang chạy, buộc dừng ứng dụng bị treo và quản lý các dịch vụ nền của hệ điều hành. (Đáp án đầy đủ: tasklist lists running processes and PIDs; taskkill terminates hung processes by name or PID; services.msc opens the graphical Windows Services manager; sc config modifies service startup types and parameters via CLI.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. tasklist monitors active user sessions; taskkill formats hard drives; services.msc opens the Group Policy editor; sc config edits system registry permissions: Tasklist và các lệnh trên không có chức năng theo dõi phiên người dùng hay định dạng ổ cứng, việc đó do các công cụ khác đảm nhiệm. B. tasklist configures network adapter IP addresses; taskkill restarts the computer; services.msc clears the event logs; sc config manages disk partitions: Các công cụ này quản lý tiến trình và dịch vụ nền, không thực hiện việc cấu hình IP, khởi động lại máy hay quản lý phân vùng ổ đĩa. D. tasklist displays hardware specifications; taskkill manages firewall rules; services.msc tests network latency; sc config updates device drivers: Chúng không dùng để xem thông số phần cứng, quản lý quy tắc tường lửa hay cập nhật trình điều khiển thiết bị."
      },
      {
        "id": "net200-q186",
        "num": 186,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why is \"Root Cause Analysis (RCA)\" performed after resolving a major incident?",
        "questionVi": "Tại sao phải thực hiện phân tích nguyên nhân gốc rễ (RCA) sau khi đã khắc phục xong sự cố lớn?",
        "options": [
          {
            "key": "A",
            "text": "Resolving an incident updates system documentation, whereas RCA is a mandatory procedure required to reboot core servers"
          },
          {
            "key": "B",
            "text": "Resolving an incident fixes the permanent root cause, whereas RCA is only used to document financial losses for management reports"
          },
          {
            "key": "C",
            "text": "Resolving an incident prevents future occurrences, whereas RCA focuses entirely on assigning blame to specific system administrators"
          },
          {
            "key": "D",
            "text": "Resolving an incident restores service quickly (often via workaround), whereas RCA identifies the underlying systemic flaw so permanent corrective actions can prevent future outages"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Resolving an incident restores service quickly (often via workaround), whereas RCA identifies the underlying systemic flaw so permanent corrective actions can prevent future outages",
        "explainRight": "Khắc phục nhanh giống như uống thuốc giảm đau để chạy lại ngay, còn RCA là tìm đúng căn bệnh gốc để chữa dứt điểm không tái phát. (Đáp án đầy đủ: Resolving an incident restores service quickly (often via workaround), whereas RCA identifies the underlying systemic flaw so permanent corrective actions can prevent future outages.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Resolving an incident updates system documentation, whereas RCA is a mandatory procedure required to reboot core servers: Khắc phục sự cố tập trung vào khôi phục hệ thống chứ không phải cập nhật tài liệu, và RCA không phải là lệnh bắt buộc để khởi động lại máy chủ. B. Resolving an incident fixes the permanent root cause, whereas RCA is only used to document financial losses for management reports: Việc khắc phục sự cố thường chỉ dùng giải pháp tạm thời để khôi phục nhanh dịch vụ, còn RCA mới là bước tìm nguyên nhân cốt lõi. C. Resolving an incident prevents future occurrences, whereas RCA focuses entirely on assigning blame to specific system administrators: Khắc phục sự cố không đảm bảo loại bỏ hoàn toàn căn nguyên, và RCA không bao giờ được dùng nhằm mục đích đổ lỗi cá nhân."
      },
      {
        "id": "net200-q187",
        "num": 187,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between an Incident and a Problem in IT Service Management?",
        "questionVi": "Sự khác nhau giữa Incident (sự cố) và Problem (vấn đề gốc) trong quản lý dịch vụ IT là gì?",
        "options": [
          {
            "key": "A",
            "text": "An Incident is an administrative change request; a Problem is the approval ticket required from the change advisory board"
          },
          {
            "key": "B",
            "text": "An Incident is a planned maintenance window; a Problem is an unexpected hardware failure that requires immediate RMA replacement"
          },
          {
            "key": "C",
            "text": "An Incident is a security vulnerability discovered by scanners; a Problem is an active cyber attack currently targeting the network"
          },
          {
            "key": "D",
            "text": "An Incident is an unplanned interruption or reduction in service quality; a Problem is the underlying root cause of one or more recurring incidents"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "An Incident is an unplanned interruption or reduction in service quality; a Problem is the underlying root cause of one or more recurring incidents",
        "explainRight": "Incident là biểu hiện lỗi xảy ra trước mắt, còn Problem là nguyên nhân sâu xa gây ra hàng loạt lỗi lặp đi lặp lại. (Đáp án đầy đủ: An Incident is an unplanned interruption or reduction in service quality; a Problem is the underlying root cause of one or more recurring incidents.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. An Incident is an administrative change request; a Problem is the approval ticket required from the change advisory board: Chúng không phải là các yêu cầu thay đổi hệ thống hay phiếu phê duyệt từ ban quản lý thay đổi CAB. B. An Incident is a planned maintenance window; a Problem is an unexpected hardware failure that requires immediate RMA replacement: Incident là sự cố ngoài ý muốn chứ không phải cửa sổ bảo trì có kế hoạch, còn Problem là nguyên nhân gốc rễ chứ không phải lỗi phần cứng yêu cầu RMA. C. An Incident is a security vulnerability discovered by scanners; a Problem is an active cyber attack currently targeting the network: Incident và Problem thuộc quy trình quản lý dịch vụ IT, không đồng nghĩa với lỗ hổng bảo mật hay các cuộc tấn công mạng trực tiếp."
      },
      {
        "id": "net200-q188",
        "num": 188,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the purpose of Transferring OneDrive Ownership during M365 User Offboarding?",
        "questionVi": "Mục đích của việc chuyển quyền sở hữu OneDrive khi nhân viên nghỉ việc trong M365 là gì?",
        "options": [
          {
            "key": "A",
            "text": "Transferring ownership automatically migrates the former employee's local desktop files to the corporate cloud storage permanently"
          },
          {
            "key": "B",
            "text": "Transferring ownership converts the personal OneDrive storage into a public SharePoint document library accessible by external guests"
          },
          {
            "key": "C",
            "text": "Transferring ownership resets the user's password and reactivates their account for auditing purposes"
          },
          {
            "key": "D",
            "text": "When a user account and license are removed, their personal OneDrive files are scheduled for deletion after retention; transferring ownership to their manager preserves critical business documents"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "When a user account and license are removed, their personal OneDrive files are scheduled for deletion after retention; transferring ownership to their manager preserves critical business documents",
        "explainRight": "Đảm bảo các tài liệu công việc lưu trên OneDrive của nhân viên nghỉ việc được bàn giao lại cho người quản lý trước khi xóa tài khoản. (Đáp án đầy đủ: When a user account and license are removed, their personal OneDrive files are scheduled for deletion after retention; transferring ownership to their manager preserves critical business documents.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Transferring ownership automatically migrates the former employee's local desktop files to the corporate cloud storage permanently: Thao tác này chỉ chuyển quyền sở hữu trên đám mây chứ không tự động đồng bộ các tệp trên màn hình cục bộ của nhân viên. B. Transferring ownership converts the personal OneDrive storage into a public SharePoint document library accessible by external guests: Nó không làm thay đổi dung lượng OneDrive thành thư viện công khai cho khách bên ngoài mà chỉ bàn giao quyền quản lý cho quản lý trực tiếp. C. Transferring ownership resets the user's password and reactivates their account for auditing purposes: Việc chuyển quyền sở hữu không làm đặt lại mật khẩu hay kích hoạt lại tài khoản đã bị vô hiệu hóa."
      },
      {
        "id": "net200-q189",
        "num": 189,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "How does a Shared Mailbox save licensing costs in Exchange Online?",
        "questionVi": "Hộp thư dùng chung (Shared Mailbox) giúp tiết kiệm chi phí bản quyền như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Shared Mailboxes up to 50 GB do not require a separate paid Exchange Online license as long as licensed users access them via delegation rather than direct login"
          },
          {
            "key": "B",
            "text": "Shared Mailboxes eliminate licensing costs by routing all incoming email through local on-premises Exchange hybrid servers"
          },
          {
            "key": "C",
            "text": "Shared Mailboxes allow direct interactive logins with standalone passwords without needing any Microsoft 365 tenant association"
          },
          {
            "key": "D",
            "text": "Shared Mailboxes require an Enterprise license because they support unlimited archiving and legal hold capabilities by default"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Shared Mailboxes up to 50 GB do not require a separate paid Exchange Online license as long as licensed users access them via delegation rather than direct login",
        "explainRight": "Các hộp thư nhóm như support@ hay info@ dưới 50 GB không tốn thêm tiền mua bản quyền riêng mà nhiều nhân viên vẫn cùng xử lý thư được. (Đáp án đầy đủ: Shared Mailboxes up to 50 GB do not require a separate paid Exchange Online license as long as licensed users access them via delegation rather than direct login.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Shared Mailboxes eliminate licensing costs by routing all incoming email through local on-premises Exchange hybrid servers: Chúng hoạt động hoàn toàn trên đám mây Microsoft 365, không bắt buộc phải định tuyến qua máy chủ Exchange lai tại chỗ để tiết kiệm phí. C. Shared Mailboxes allow direct interactive logins with standalone passwords without needing any Microsoft 365 tenant association: Hộp thư dùng chung không hỗ trợ đăng nhập tương tác trực tiếp bằng tên người dùng và mật khẩu riêng biệt. D. Shared Mailboxes require an Enterprise license because they support unlimited archiving and legal hold capabilities by default: Hộp thư dùng chung dưới 50 GB miễn phí bản quyền Exchange Online và không yêu cầu các tính năng nâng cao nếu không mua thêm gói mở rộng."
      },
      {
        "id": "net200-q190",
        "num": 190,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between a Private Team and a Public Team in Microsoft Teams?",
        "questionVi": "Sự khác nhau giữa Private Team và Public Team trong Microsoft Teams là gì?",
        "options": [
          {
            "key": "A",
            "text": "A Public Team has unlimited membership capacity, whereas a Private Team is restricted to a maximum of ten members"
          },
          {
            "key": "B",
            "text": "A Public Team permits voice and video calling features, whereas a Private Team only supports text-based chat channels"
          },
          {
            "key": "C",
            "text": "A Public Team is discoverable and open for anyone in the organization to join freely, whereas a Private Team is restricted and requires approval/invitation from a Team Owner"
          },
          {
            "key": "D",
            "text": "A Public Team allows external guest users from the internet, whereas a Private Team is strictly limited to internal domain users"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "A Public Team is discoverable and open for anyone in the organization to join freely, whereas a Private Team is restricted and requires approval/invitation from a Team Owner",
        "explainRight": "Public Team mở cho toàn công ty tự tham gia, còn Private Team chỉ dành riêng cho thành viên được trưởng nhóm duyệt vào. (Đáp án đầy đủ: A Public Team is discoverable and open for anyone in the organization to join freely, whereas a Private Team is restricted and requires approval/invitation from a Team Owner.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. A Public Team has unlimited membership capacity, whereas a Private Team is restricted to a maximum of ten members: Giới hạn thành viên của các loại Team trong Microsoft Teams giống nhau và không bị giới hạn ở con số mười cho Private Team. B. A Public Team permits voice and video calling features, whereas a Private Team only supports text-based chat channels: Tính năng gọi thoại và video có mặt trên mọi loại Team, sự khác biệt duy nhất nằm ở quyền truy cập và tham gia của thành viên. D. A Public Team allows external guest users from the internet, whereas a Private Team is strictly limited to internal domain users: Cả hai loại Team đều có thể cấu hình cho phép hoặc chặn khách bên ngoài tùy theo chính sách tenant, phân biệt chính là quyền tự gia nhập."
      },
      {
        "id": "net200-q191",
        "num": 191,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why should External Sharing Controls be restricted in SharePoint Admin Center?",
        "questionVi": "Tại sao cần giới hạn quyền chia sẻ ra bên ngoài (External Sharing Controls) trong SharePoint?",
        "options": [
          {
            "key": "A",
            "text": "Uncontrolled anonymous \"Anyone\" links can expose confidential corporate files to unauthorized external parties; restricting sharing by domain or authenticated guests protects sensitive data"
          },
          {
            "key": "B",
            "text": "Anonymous links automatically bypass all enterprise security controls and permanently delete file audit logs within the SharePoint Compliance Center"
          },
          {
            "key": "C",
            "text": "External sharing must be completely disabled because Microsoft 365 cloud storage lacks built-in encryption mechanisms for files shared with external users"
          },
          {
            "key": "D",
            "text": "Restricting external links forces all external users to purchase standalone enterprise licenses before they can access shared documents"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Uncontrolled anonymous \"Anyone\" links can expose confidential corporate files to unauthorized external parties; restricting sharing by domain or authenticated guests protects sensitive data",
        "explainRight": "Tránh tình trạng nhân viên tạo đường link công khai ai cũng mở được làm lộ tài liệu nội bộ ra ngoài công ty. (Đáp án đầy đủ: Uncontrolled anonymous \"Anyone\" links can expose confidential corporate files to unauthorized external parties; restricting sharing by domain or authenticated guests protects sensitive data.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Anonymous links automatically bypass all enterprise security controls and permanently delete file audit logs within the SharePoint Compliance Center: Đường link ẩn danh không tự động xóa nhật ký kiểm toán, quản trị viên vẫn có thể theo dõi hành vi truy cập qua các công cụ giám sát. C. External sharing must be completely disabled because Microsoft 365 cloud storage lacks built-in encryption mechanisms for files shared with external users: M365 có cơ chế mã hóa dữ liệu mạnh mẽ cho cả người dùng ngoài tổ chức, không phải do thiếu mã hóa mà vì rủi ro lộ dữ liệu công khai. D. Restricting external links forces all external users to purchase standalone enterprise licenses before they can access shared documents: Người dùng bên ngoài không cần mua bản quyền doanh nghiệp riêng biệt để xem tài liệu được chia sẻ, chỉ cần tài khoản khách được xác thực."
      },
      {
        "id": "net200-q192",
        "num": 192,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the function of the Windows tracert command compared to Linux traceroute?",
        "questionVi": "Lệnh tracert trên Windows hoạt động khác với traceroute trên Linux như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Both trace hop-by-hop paths using incrementing TTL values, but Windows tracert sends ICMP Echo Requests by default whereas Linux traceroute sends UDP packets (or ICMP/TCP when specified)"
          },
          {
            "key": "B",
            "text": "Windows tracert utilizes TCP handshakes exclusively to measure latency, while Linux traceroute relies on static routing tables without modifying TTL values"
          },
          {
            "key": "C",
            "text": "Both tools function identically by sending broadcast ARP requests across every intermediate hop until the destination responds with an ICMP reply"
          },
          {
            "key": "D",
            "text": "Linux traceroute operates strictly at Layer 2 using MAC addresses, whereas Windows tracert operates exclusively at the application layer via HTTP"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Both trace hop-by-hop paths using incrementing TTL values, but Windows tracert sends ICMP Echo Requests by default whereas Linux traceroute sends UDP packets (or ICMP/TCP when specified)",
        "explainRight": "Cả hai đều dò từng trạm router trên đường đi bằng cách tăng dần tuổi thọ gói tin TTL, chỉ khác nhau ở loại gói tin mặc định gửi đi. (Đáp án đầy đủ: Both trace hop-by-hop paths using incrementing TTL values, but Windows tracert sends ICMP Echo Requests by default whereas Linux traceroute sends UDP packets (or ICMP/TCP when specified).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Windows tracert utilizes TCP handshakes exclusively to measure latency, while Linux traceroute relies on static routing tables without modifying TTL values: Tracert trên Windows không dùng độc quyền bắt tay TCP và traceroute trên Linux có chỉnh sửa TTL để dò hop. C. Both tools function identically by sending broadcast ARP requests across every intermediate hop until the destination responds with an ICMP reply: Cả hai không dùng gói tin broadcast ARP để dò đường đi mà gửi gói tin unicast có tăng dần giá trị TTL. D. Linux traceroute operates strictly at Layer 2 using MAC addresses, whereas Windows tracert operates exclusively at the application layer via HTTP: Cả hai công cụ này đều hoạt động ở tầng mạng Layer 3 và Layer 4, không phải Layer 2 hay tầng ứng dụng HTTP."
      },
      {
        "id": "net200-q193",
        "num": 193,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What information does netstat provide during network troubleshooting?",
        "questionVi": "Lệnh netstat cung cấp thông tin gì khi xử lý sự cố mạng?",
        "options": [
          {
            "key": "A",
            "text": "Displays active TCP/UDP connections, local and foreign IP/port pairs, listening ports, connection states (ESTABLISHED, LISTENING, TIME_WAIT), and interface statistics"
          },
          {
            "key": "B",
            "text": "Generates graphical topology maps of the local area network by querying neighboring switches via SNMP"
          },
          {
            "key": "C",
            "text": "Monitors real-time bandwidth consumption per application and automatically blocks malicious IP addresses using cloud intelligence feeds"
          },
          {
            "key": "D",
            "text": "Performs deep packet inspection to decrypt HTTPS traffic traversing the local operating system's network stack"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Displays active TCP/UDP connections, local and foreign IP/port pairs, listening ports, connection states (ESTABLISHED, LISTENING, TIME_WAIT), and interface statistics",
        "explainRight": "Cho biết máy tính đang mở cổng nào chờ kết nối và đang trao đổi dữ liệu với những địa chỉ IP nào bên ngoài. (Đáp án đầy đủ: Displays active TCP/UDP connections, local and foreign IP/port pairs, listening ports, connection states (ESTABLISHED, LISTENING, TIME_WAIT), and interface statistics.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Generates graphical topology maps of the local area network by querying neighboring switches via SNMP: Netstat không vẽ bản đồ topology mạng bằng SNMP, công cụ này chỉ hiển thị trạng thái kết nối trên chính máy cục bộ. C. Monitors real-time bandwidth consumption per application and automatically blocks malicious IP addresses using cloud intelligence feeds: Netstat không giám sát băng thông theo thời gian thực hay tự động chặn IP độc hại, đó là nhiệm vụ của tường lửa hoặc EDR. D. Performs deep packet inspection to decrypt HTTPS traffic traversing the local operating system's network stack: Netstat chỉ hiển thị thông tin kết nối và cổng, không thực hiện giải mã gói tin sâu hay kiểm tra nội dung HTTPS."
      },
      {
        "id": "net200-q194",
        "num": 194,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the difference between nslookup and ping when diagnosing website access failures?",
        "questionVi": "Sự khác nhau giữa nslookup và ping khi chẩn đoán lỗi không truy cập được trang web là gì?",
        "options": [
          {
            "key": "A",
            "text": "nslookup validates firewall rule configurations along the path, whereas ping verifies local operating system routing tables"
          },
          {
            "key": "B",
            "text": "nslookup establishes a secure TLS tunnel to the destination server, while ping measures the exact CPU utilization of the remote host"
          },
          {
            "key": "C",
            "text": "nslookup checks physical cable integrity, while ping verifies active application layer protocol states like HTTP and SMTP"
          },
          {
            "key": "D",
            "text": "nslookup tests whether DNS can translate the domain name into an IP address, whereas ping tests basic IP-layer reachability and round-trip latency to a host"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "nslookup tests whether DNS can translate the domain name into an IP address, whereas ping tests basic IP-layer reachability and round-trip latency to a host",
        "explainRight": "Nslookup kiểm tra xem danh bạ DNS có dịch được tên miền sang IP không, còn Ping kiểm tra xem gói tin có đi tới được địa chỉ đó không. (Đáp án đầy đủ: nslookup tests whether DNS can translate the domain name into an IP address, whereas ping tests basic IP-layer reachability and round-trip latency to a host.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. nslookup validates firewall rule configurations along the path, whereas ping verifies local operating system routing tables: Nslookup không kiểm tra luật tường lửa và ping cũng không xác định bảng định tuyến của hệ điều hành cục bộ. B. nslookup establishes a secure TLS tunnel to the destination server, while ping measures the exact CPU utilization of the remote host: Nslookup không tạo đường hầm bảo mật TLS và ping không đo mức độ sử dụng CPU của máy từ xa. C. nslookup checks physical cable integrity, while ping verifies active application layer protocol states like HTTP and SMTP: Nslookup không kiểm tra cáp vật lý và ping hoạt động ở tầng mạng, không kiểm tra trạng thái ứng dụng như HTTP hay SMTP."
      },
      {
        "id": "net200-q195",
        "num": 195,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why do protocols like SMTPS, IMAPS, POPS, HTTPS, and LDAPS rely on TLS over TCP?",
        "questionVi": "Tại sao các giao thức như SMTPS, IMAPS, POPS, HTTPS và LDAPS lại chạy trên TLS qua TCP?",
        "options": [
          {
            "key": "A",
            "text": "TLS provides fast, connectionless datagram transport, while TCP adds packet encryption layers to prevent man-in-the-middle attacks"
          },
          {
            "key": "B",
            "text": "TCP guarantees reliable, ordered delivery of encrypted TLS records, while TLS provides confidentiality, integrity, and server authentication for application data"
          },
          {
            "key": "C",
            "text": "Both protocols operate exclusively at the data link layer to secure physical switch ports against unauthorized device connection"
          },
          {
            "key": "D",
            "text": "TCP handles application layer encryption algorithms, while TLS manages segment retransmission and flow control over unreliable networks"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "TCP guarantees reliable, ordered delivery of encrypted TLS records, while TLS provides confidentiality, integrity, and server authentication for application data",
        "explainRight": "TCP đảm bảo dữ liệu không bị mất hay xáo trộn, còn TLS khóa mã hóa nội dung để không ai nghe lén được. (Đáp án đầy đủ: TCP guarantees reliable, ordered delivery of encrypted TLS records, while TLS provides confidentiality, integrity, and server authentication for application data.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. TLS provides fast, connectionless datagram transport, while TCP adds packet encryption layers to prevent man-in-the-middle attacks: TLS không phải là giao thức truyền tải không kết nối dạng datagram như UDP, mà chạy trên nền TCP. C. Both protocols operate exclusively at the data link layer to secure physical switch ports against unauthorized device connection: Các giao thức này hoạt động ở tầng giao vận và ứng dụng, không hoạt động ở tầng liên kết dữ liệu (data link layer). D. TCP handles application layer encryption algorithms, while TLS manages segment retransmission and flow control over unreliable networks: TCP không xử lý mã hóa ứng dụng và TLS không quản lý việc truyền lại gói tin hay kiểm soát luồng."
      },
      {
        "id": "net200-q196",
        "num": 196,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the role of DNS using both UDP and TCP port 53?",
        "questionVi": "Vai trò của UDP và TCP trên cổng 53 của DNS là gì?",
        "options": [
          {
            "key": "A",
            "text": "DNS uses fast, low-overhead UDP port 53 for standard name resolution queries, and switches to reliable TCP port 53 for zone transfers or large responses (e.g., DNSSEC)"
          },
          {
            "key": "B",
            "text": "DNS uses TCP port 53 exclusively for normal queries to ensure packet delivery, and fallback to UDP port 53 only when encryption is required"
          },
          {
            "key": "C",
            "text": "DNS alternates randomly between UDP and TCP port 53 on every packet transmission to load-balance traffic across root servers"
          },
          {
            "key": "D",
            "text": "DNS uses UDP port 53 for zone transfers between name servers, while client queries are always processed over TCP port 53 for security"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "DNS uses fast, low-overhead UDP port 53 for standard name resolution queries, and switches to reliable TCP port 53 for zone transfers or large responses (e.g., DNSSEC)",
        "explainRight": "Hỏi đáp tên miền ngắn hàng ngày thì dùng UDP cho nhanh, còn đồng bộ dữ liệu lớn giữa các máy chủ DNS thì dùng TCP cho chắc chắn. (Đáp án đầy đủ: DNS uses fast, low-overhead UDP port 53 for standard name resolution queries, and switches to reliable TCP port 53 for zone transfers or large responses (e.g., DNSSEC).)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. DNS uses TCP port 53 exclusively for normal queries to ensure packet delivery, and fallback to UDP port 53 only when encryption is required: Truy vấn thông thường của DNS ưu tiên dùng UDP tốc độ cao chứ không dùng độc quyền TCP. C. DNS alternates randomly between UDP and TCP port 53 on every packet transmission to load-balance traffic across root servers: DNS không chọn ngẫu nhiên giữa UDP và TCP cho mỗi gói tin mà phân định rõ dựa theo kích thước và mục đích. D. DNS uses UDP port 53 for zone transfers between name servers, while client queries are always processed over TCP port 53 for security: Đồng bộ vùng (zone transfer) đòi hỏi độ tin cậy cao nên phải dùng TCP, ngược lại truy vấn của client mới dùng UDP."
      },
      {
        "id": "net200-q197",
        "num": 197,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What are the responsibilities of a System Engineer regarding Active Directory and GPO?",
        "questionVi": "Trách nhiệm của System Engineer đối với Active Directory và GPO là gì?",
        "options": [
          {
            "key": "A",
            "text": "Deploying public cloud container clusters and configuring Kubernetes ingress controllers for microservices architecture"
          },
          {
            "key": "B",
            "text": "Managing Microsoft 365 Exchange Online mail flow rules, anti-spam policies, and SharePoint site collection storage quotas"
          },
          {
            "key": "C",
            "text": "Configuring BGP routing metrics and firewall zone security policies on enterprise core routers and perimeter firewalls"
          },
          {
            "key": "D",
            "text": "Managing domain user/computer accounts, Organizational Units (OUs), security groups, and deploying Group Policy Objects (GPOs) to enforce security baselines, software settings, and desktop policies across Windows endpoints"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Managing domain user/computer accounts, Organizational Units (OUs), security groups, and deploying Group Policy Objects (GPOs) to enforce security baselines, software settings, and desktop policies across Windows endpoints",
        "explainRight": "Quản lý danh bạ tài khoản tập trung của doanh nghiệp và áp đặt các chính sách bảo mật, cấu hình đồng loạt xuống toàn bộ máy tính nhân viên. (Đáp án đầy đủ: Managing domain user/computer accounts, Organizational Units (OUs), security groups, and deploying Group Policy Objects (GPOs) to enforce security baselines, software settings, and desktop policies across Windows endpoints.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Deploying public cloud container clusters and configuring Kubernetes ingress controllers for microservices architecture: Đó là công việc của Cloud/DevOps Engineer quản lý hạ tầng container, không liên quan đến GPO của Windows Domain. B. Managing Microsoft 365 Exchange Online mail flow rules, anti-spam policies, and SharePoint site collection storage quotas: Đó là phạm vi quản trị Microsoft 365 / Exchange Online, không phải quản lý tài khoản domain nội bộ và GPO. C. Configuring BGP routing metrics and firewall zone security policies on enterprise core routers and perimeter firewalls: Đó là công việc của Network Engineer cấu hình định tuyến và tường lửa, không phải quản trị viên Active Directory."
      },
      {
        "id": "net200-q198",
        "num": 198,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Why are Virtual Interfaces (Loopback, Tunnel, VLAN) used on routers and firewalls?",
        "questionVi": "Tại sao các giao diện ảo (Loopback, Tunnel, VLAN) lại được dùng trên router và firewall?",
        "options": [
          {
            "key": "A",
            "text": "Loopback interfaces provide physical port redundancy, Tunnel interfaces accelerate Layer 2 switching speed, and VLAN interfaces encrypt wireless client connections"
          },
          {
            "key": "B",
            "text": "Loopback interfaces handle WAN circuit balancing, Tunnel interfaces replace physical switch uplinks, and VLAN interfaces terminate PPPoE broadband sessions"
          },
          {
            "key": "C",
            "text": "Loopback interfaces terminate BGP peering sessions over physical wires, Tunnel interfaces handle native IP routing, and VLAN interfaces provide firewall packet filtering"
          },
          {
            "key": "D",
            "text": "Loopback interfaces never go down physically (ideal for stable Router IDs and BGP peering); Tunnel interfaces encapsulate encrypted VPN/GRE traffic; VLAN interfaces enable Layer 3 routing between segmented broadcast domains"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Loopback interfaces never go down physically (ideal for stable Router IDs and BGP peering); Tunnel interfaces encapsulate encrypted VPN/GRE traffic; VLAN interfaces enable Layer 3 routing between segmented broadcast domains",
        "explainRight": "Giao diện ảo giúp tạo địa chỉ quản trị luôn sống ổn định, tạo đầu nối đường hầm VPN và định tuyến giữa các mạng VLAN. (Đáp án đầy đủ: Loopback interfaces never go down physically (ideal for stable Router IDs and BGP peering); Tunnel interfaces encapsulate encrypted VPN/GRE traffic; VLAN interfaces enable Layer 3 routing between segmented broadcast domains.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Loopback interfaces provide physical port redundancy, Tunnel interfaces accelerate Layer 2 switching speed, and VLAN interfaces encrypt wireless client connections: Giao diện Loopback không cung cấp dự phòng cổng vật lý, giao diện Tunnel không tăng tốc chuyển mạch Layer 2. B. Loopback interfaces handle WAN circuit balancing, Tunnel interfaces replace physical switch uplinks, and VLAN interfaces terminate PPPoE broadband sessions: Giao diện ảo không dùng để cân bằng tải mạch WAN hay thay thế các uplink vật lý của switch. C. Loopback interfaces terminate BGP peering sessions over physical wires, Tunnel interfaces handle native IP routing, and VLAN interfaces provide firewall packet filtering: Giao diện Loopback không chấm dứt BGP qua dây vật lý và giao diện VLAN không phải dùng thuần túy để lọc gói tin tường lửa."
      },
      {
        "id": "net200-q199",
        "num": 199,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "What is the golden rule of Firewall Rule Ordering (Top-to-Bottom)?",
        "questionVi": "Quy tắc vàng trong việc sắp xếp thứ tự luật tường lửa (Top-to-Bottom) là gì?",
        "options": [
          {
            "key": "A",
            "text": "Because firewalls evaluate rules sequentially from top to bottom and stop at the first match, highly specific allow/deny rules must always sit above broad general rules"
          },
          {
            "key": "B",
            "text": "Broad general rules must always be placed at the top to ensure high-performance packet matching before checking specific IP addresses"
          },
          {
            "key": "C",
            "text": "Firewalls process rules simultaneously using parallel multi-threading, requiring rules to be organized alphabetically by protocol name"
          },
          {
            "key": "D",
            "text": "Firewall rule ordering is irrelevant because modern engines automatically re-order policies based on traffic volume statistics"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Because firewalls evaluate rules sequentially from top to bottom and stop at the first match, highly specific allow/deny rules must always sit above broad general rules",
        "explainRight": "Luật càng chi tiết càng phải đặt lên trên cùng; nếu đặt luật rộng ở trên thì nó sẽ khớp trước và làm vô hiệu hóa các luật chi tiết bên dưới. (Đáp án đầy đủ: Because firewalls evaluate rules sequentially from top to bottom and stop at the first match, highly specific allow/deny rules must always sit above broad general rules.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Broad general rules must always be placed at the top to ensure high-performance packet matching before checking specific IP addresses: Nếu đặt luật chung ở trên, nó sẽ khớp trước và làm vô hiệu hóa các luật chi tiết đặt ở phía dưới. C. Firewalls process rules simultaneously using parallel multi-threading, requiring rules to be organized alphabetically by protocol name: Tường lửa xử lý các quy tắc tuần tự từ trên xuống dưới chứ không xử lý song song đa luồng theo thứ tự bảng chữ cái. D. Firewall rule ordering is irrelevant because modern engines automatically re-order policies based on traffic volume statistics: Thứ tự luật tường lửa cực kỳ quan trọng vì thiết bị không tự động sắp xếp lại theo lưu lượng."
      },
      {
        "id": "net200-q200",
        "num": 200,
        "section": "Phần 8: Quy Trình Quản Trị Microsoft 365 SOP Chi Tiết (Câu 131–200)",
        "questionEn": "Summarize the complete end-to-end mindset of a well-designed enterprise network & security architecture?",
        "questionVi": "Tóm tắt tư duy cốt lõi để xây dựng một kiến trúc mạng và bảo mật doanh nghiệp chuẩn mực?",
        "options": [
          {
            "key": "A",
            "text": "Combine structured physical cabling and resilient dynamic routing (EIGRP/OSPF/BGP) with segmented zones, least-privilege policies, encrypted tunnels (IPsec/TLS/VPN), cloud Zero Trust inspection (Zscaler), endpoint compliance (Intune/Entra ID), and continuous log monitoring"
          },
          {
            "key": "B",
            "text": "Outsource all security to local workstation firewalls while maintaining unencrypted wide area network links across corporate branch offices"
          },
          {
            "key": "C",
            "text": "Rely entirely on flat network architecture with open perimeter access, allowing all endpoints to communicate freely without authentication or logging"
          },
          {
            "key": "D",
            "text": "Deploy basic static routing across unsegmented network switches while disabling all endpoint antivirus solutions to maximize network performance"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Combine structured physical cabling and resilient dynamic routing (EIGRP/OSPF/BGP) with segmented zones, least-privilege policies, encrypted tunnels (IPsec/TLS/VPN), cloud Zero Trust inspection (Zscaler), endpoint compliance (Intune/Entra ID), and continuous log monitoring",
        "explainRight": "Kết hợp hạ tầng kết nối ổn định với phân vùng rõ ràng, phân quyền tối thiểu, mã hóa đường truyền và giám sát nhật ký liên tục. (Đáp án đầy đủ: Combine structured physical cabling and resilient dynamic routing (EIGRP/OSPF/BGP) with segmented zones, least-privilege policies, encrypted tunnels (IPsec/TLS/VPN), cloud Zero Trust inspection (Zscaler), endpoint compliance (Intune/Entra ID), and continuous log monitoring.)",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Outsource all security to local workstation firewalls while maintaining unencrypted wide area network links across corporate branch offices: Việc duy trì đường truyền WAN không mã hóa và phó mặc bảo mật cho tường lửa máy trạm là cách tiếp cận thiếu an toàn. C. Rely entirely on flat network architecture with open perimeter access, allowing all endpoints to communicate freely without authentication or logging: Mô hình mạng phẳng không phân vùng và không xác thực là một thảm họa bảo mật, đi ngược lại kiến trúc chuẩn doanh nghiệp. D. Deploy basic static routing across unsegmented network switches while disabling all endpoint antivirus solutions to maximize network performance: Dùng định tuyến tĩnh trên switch không phân vùng và tắt phần mềm diệt virus sẽ làm hệ thống mất an toàn nghiêm trọng."
      }
    ]
  },
  {
    "id": "m365-sop-61",
    "title": "Bộ 61 Tình Huống Microsoft 365 Admin SOP",
    "subtitle": "Chuyển hóa trọn bộ 61 quy trình vận hành chuẩn (SOP 1.1 – 12.5) qua 12 mảng quản trị: User, Groups, Exchange, Teams, SharePoint/OneDrive, Entra ID & MFA, Defender/DLP, Intune, Licensing & Tenant.",
    "category": "Microsoft 365",
    "badge": "61 Quy Trình SOP M365",
    "isBuiltIn": true,
    "createdAt": "2026-11-26",
    "questions": [
      {
        "id": "m365-q1",
        "num": 1,
        "section": "Phần 1: User Administration (Quản trị Người dùng M365)",
        "questionEn": "[SOP 1.1 - User Creation & Modification] When creating a new user in the Microsoft 365 Admin Center, which of the following is a mandatory step before sharing credentials with the user?",
        "questionVi": "[SOP 1.1 - User Creation & Modification] Khi tạo người dùng mới trong Microsoft 365 Admin Center, bước nào sau đây là bắt buộc trước khi chia sẻ thông tin đăng nhập cho người dùng?",
        "options": [
          {
            "key": "A",
            "text": "Create a shared mailbox"
          },
          {
            "key": "B",
            "text": "Assign appropriate license"
          },
          {
            "key": "C",
            "text": "Assign Global Administrator role"
          },
          {
            "key": "D",
            "text": "Configure Multi-Factor Authentication"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Assign appropriate license",
        "explainRight": "Theo quy trình SOP 1.1, sau khi nhập thông tin chi tiết người dùng, quản trị viên phải gán giấy phép (license) phù hợp để người dùng có thể sử dụng dịch vụ. Quy trình chuẩn tại Microsoft 365 Admin Center: Users -> Active Users -> Add User -> Enter details -> Assign license -> Assign roles -> Review -> Share credentials.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Tạo shared mailbox là một tác vụ riêng biệt, không nằm trong quy trình tạo tài khoản người dùng cá nhân chuẩn. C. Gán quyền Global Admin chỉ thực hiện khi cần thiết, không phải mọi người dùng mới đều cần quyền quản trị cao nhất. D. MFA là bước bảo mật quan trọng nhưng không phải là bước bắt buộc trong quy trình tạo người dùng cơ bản của SOP này."
      },
      {
        "id": "m365-q2",
        "num": 2,
        "section": "Phần 1: User Administration (Quản trị Người dùng M365)",
        "questionEn": "[SOP 1.2 - User Offboarding] According to the standard offboarding SOP, what is the first action an administrator should take when a user leaves the organization?",
        "questionVi": "[SOP 1.2 - User Offboarding] Theo quy trình SOP offboarding chuẩn, hành động đầu tiên mà quản trị viên nên thực hiện khi một người dùng rời khỏi tổ chức là gì?",
        "options": [
          {
            "key": "A",
            "text": "Delete the user account"
          },
          {
            "key": "B",
            "text": "Remove Microsoft 365 licenses"
          },
          {
            "key": "C",
            "text": "Transfer OneDrive ownership"
          },
          {
            "key": "D",
            "text": "Block sign-in"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Block sign-in",
        "explainRight": "Quy trình SOP 1.2 ưu tiên việc chặn đăng nhập (Block sign-in) ngay lập tức để đảm bảo an ninh trước khi thực hiện các bước thu hồi tài nguyên. Quy trình: Users -> Active Users -> Select user -> Block sign-in -> Remove licenses -> Transfer data -> Remove groups -> Delete/Archive.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Xóa tài khoản ngay lập tức là sai quy trình vì cần thời gian để chuyển giao dữ liệu và thu hồi license trước. B. Gỡ license nên được thực hiện sau khi đã chặn đăng nhập để tránh việc người dùng vẫn có thể truy cập bằng session cũ. C. Chuyển quyền sở hữu OneDrive là bước sau khi đã đảm bảo tài khoản không thể truy cập trái phép."
      },
      {
        "id": "m365-q3",
        "num": 3,
        "section": "Phần 1: User Administration (Quản trị Người dùng M365)",
        "questionEn": "[SOP 1.3 - Password Reset] When performing a password reset for a user in the Microsoft 365 Admin Center, what option should be enabled to ensure security compliance?",
        "questionVi": "[SOP 1.3 - Password Reset] Khi thực hiện đặt lại mật khẩu cho người dùng trong Microsoft 365 Admin Center, tùy chọn nào nên được bật để đảm bảo tuân thủ bảo mật?",
        "options": [
          {
            "key": "A",
            "text": "Set password to never expire"
          },
          {
            "key": "B",
            "text": "Send password in plain text via email"
          },
          {
            "key": "C",
            "text": "Disable Multi-Factor Authentication"
          },
          {
            "key": "D",
            "text": "Require password change at next sign-in"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Require password change at next sign-in",
        "explainRight": "SOP 1.3 yêu cầu bật 'Require password change at next sign-in' để đảm bảo chỉ người dùng mới biết mật khẩu chính thức cuối cùng. Quy trình: Users -> Active Users -> Select user -> Reset Password -> Generate password -> Enable Require change -> Communicate securely.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Thiết lập mật khẩu không bao giờ hết hạn vi phạm các chính sách bảo mật định kỳ của doanh nghiệp. B. Gửi mật khẩu dưới dạng văn bản thuần túy qua email là một rủi ro bảo mật nghiêm trọng. C. Vô hiệu hóa MFA làm giảm tính bảo mật của tài khoản và không thuộc quy trình reset mật khẩu chuẩn."
      },
      {
        "id": "m365-q4",
        "num": 4,
        "section": "Phần 1: User Administration (Quản trị Người dùng M365)",
        "questionEn": "[SOP 1.4 - Account Unlock] A user is locked out due to multiple failed login attempts. According to the SOP, where should the administrator go to verify the account status and unlock it?",
        "questionVi": "[SOP 1.4 - Account Unlock] Người dùng bị khóa tài khoản do nhập sai mật khẩu nhiều lần. Theo SOP, quản trị viên nên truy cập đâu để xác minh trạng thái và mở khóa tài khoản?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Entra Admin Center"
          },
          {
            "key": "B",
            "text": "Exchange Admin Center"
          },
          {
            "key": "C",
            "text": "Microsoft Purview Compliance Portal"
          },
          {
            "key": "D",
            "text": "SharePoint Admin Center"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Microsoft Entra Admin Center",
        "explainRight": "SOP 1.4 chỉ định sử dụng Microsoft Entra Admin Center (trước đây là Azure AD) để quản lý trạng thái tài khoản chi tiết. Quy trình: Entra Admin Center -> Users -> All Users -> Verify status -> Reset password if locked -> Confirm MFA -> Test sign-in.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Exchange Admin Center dùng để quản lý hòm thư, không phải nơi quản lý trạng thái khóa/mở khóa tài khoản định danh. C. Compliance Portal dùng cho quản trị tuân thủ và bảo vệ dữ liệu, không dùng để xử lý sự cố đăng nhập. D. SharePoint Admin Center dùng để quản lý các site và nội dung lưu trữ, không quản lý xác thực người dùng."
      },
      {
        "id": "m365-q5",
        "num": 5,
        "section": "Phần 1: User Administration (Quản trị Người dùng M365)",
        "questionEn": "[SOP 1.5 - License Assignment & Removal] After selecting a user in the Active Users list, which menu tab must an administrator open to add an Office 365 E5 license?",
        "questionVi": "[SOP 1.5 - License Assignment & Removal] Sau khi chọn một người dùng trong danh sách Active Users, quản trị viên phải mở tab menu nào để thêm giấy phép Office 365 E5?",
        "options": [
          {
            "key": "A",
            "text": "Account Settings"
          },
          {
            "key": "B",
            "text": "Mail Settings"
          },
          {
            "key": "C",
            "text": "Licenses and Apps"
          },
          {
            "key": "D",
            "text": "Devices"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Licenses and Apps",
        "explainRight": "Theo SOP 1.5, việc gán hoặc gỡ bỏ giấy phép được thực hiện trong tab 'Licenses and Apps'. Quy trình: Users -> Active Users -> Select user -> Licenses and Apps -> Assign/Remove license -> Save changes -> Verify.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Account Settings chứa thông tin chung và quyền quản trị, không phải nơi quản lý license chính. B. Mail Settings chỉ cấu hình các tính năng liên quan đến hòm thư Exchange. D. Devices dùng để quản lý các thiết bị đã đăng ký hoặc được quản lý bởi Intune của người dùng đó."
      },
      {
        "id": "m365-q6",
        "num": 6,
        "section": "Phần 1: User Administration (Quản trị Người dùng M365)",
        "questionEn": "[SOP 1.6 - Guest User Management] What is the correct initial step to invite an external collaborator according to the Guest User Management SOP?",
        "questionVi": "[SOP 1.6 - Guest User Management] Bước đầu tiên đúng để mời một cộng tác viên bên ngoài theo SOP Quản lý Người dùng Khách là gì?",
        "options": [
          {
            "key": "A",
            "text": "Navigate to Users -> New Guest User in Microsoft Entra Admin Center"
          },
          {
            "key": "B",
            "text": "Create a new Security Group"
          },
          {
            "key": "C",
            "text": "Navigate to Active Users -> Add User in M365 Admin Center"
          },
          {
            "key": "D",
            "text": "Add the user to a Distribution List"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Navigate to Users -> New Guest User in Microsoft Entra Admin Center",
        "explainRight": "SOP 1.6 quy định việc quản lý khách mời nên được thực hiện thông qua Microsoft Entra Admin Center để có kiểm soát định danh tốt nhất. Quy trình: Entra Admin Center -> Users -> New Guest User -> Enter email -> Send invitation -> Assign groups -> Grant permissions.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Tạo nhóm bảo mật là bước sau khi người dùng khách đã được mời vào hệ thống. C. M365 Admin Center có thể tạo user nhưng SOP này ưu tiên Entra Admin Center cho quy trình New Guest User chuyên sâu. D. Thêm vào danh sách phân phối không giúp tạo tài khoản khách để cộng tác trong hệ thống."
      },
      {
        "id": "m365-q7",
        "num": 7,
        "section": "Phần 2: Group & Access Management (Nhóm & Phân quyền)",
        "questionEn": "[SOP 2.1 - Microsoft 365 Groups] When creating a Microsoft 365 Group, which setting determines whether anyone in the organization can join without approval?",
        "questionVi": "[SOP 2.1 - Microsoft 365 Groups] Khi tạo một Nhóm Microsoft 365, thiết lập nào xác định việc liệu bất kỳ ai trong tổ chức cũng có thể tham gia mà không cần phê duyệt?",
        "options": [
          {
            "key": "A",
            "text": "Privacy (Public/Private)"
          },
          {
            "key": "B",
            "text": "Message Approval Settings"
          },
          {
            "key": "C",
            "text": "Group Ownership"
          },
          {
            "key": "D",
            "text": "Group Description"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Privacy (Public/Private)",
        "explainRight": "SOP 2.1 yêu cầu cấu hình Privacy để kiểm soát quyền truy cập nhóm. Public cho phép mọi người tham gia, Private yêu cầu chủ sở hữu phê duyệt. Quy trình: Teams & Groups -> Active Teams & Groups -> Add M365 Group -> Name -> Owners -> Members -> Privacy -> Create.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Message Approval là tính năng của Distribution List để kiểm duyệt thư gửi đến, không phải quyền tham gia nhóm M365. C. Quyền sở hữu nhóm xác định ai là người quản lý nhóm, không trực tiếp quy định tính công khai của nhóm cho toàn tổ chức. D. Mô tả nhóm chỉ cung cấp thông tin về mục đích của nhóm, không có tác dụng phân quyền."
      },
      {
        "id": "m365-q8",
        "num": 8,
        "section": "Phần 2: Group & Access Management (Nhóm & Phân quyền)",
        "questionEn": "[SOP 2.2 - Distribution Lists] Which Admin Center should be used to create and manage Distribution Lists according to the SOP?",
        "questionVi": "[SOP 2.2 - Distribution Lists] Trung tâm quản trị nào nên được sử dụng để tạo và quản lý Danh sách phân phối (Distribution Lists) theo SOP?",
        "options": [
          {
            "key": "A",
            "text": "Teams Admin Center"
          },
          {
            "key": "B",
            "text": "Microsoft Entra Admin Center"
          },
          {
            "key": "C",
            "text": "Exchange Admin Center"
          },
          {
            "key": "D",
            "text": "SharePoint Admin Center"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Exchange Admin Center",
        "explainRight": "SOP 2.2 chỉ định rõ việc tạo Distribution Group được thực hiện trong Exchange Admin Center (EAC). Quy trình: Exchange Admin Center -> Recipients -> Groups -> Add Distribution Group -> Details -> Owners -> Members -> Approval -> Save -> Test.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Teams Admin Center quản lý các chính sách và cấu hình của Microsoft Teams. B. Microsoft Entra Admin Center thường dùng cho Security Groups và M365 Groups hơn là Distribution Lists truyền thống. D. SharePoint Admin Center không quản lý các đối tượng nhận email như Distribution Lists."
      },
      {
        "id": "m365-q9",
        "num": 9,
        "section": "Phần 2: Group & Access Management (Nhóm & Phân quyền)",
        "questionEn": "[SOP 2.3 - Security Groups] In Microsoft Entra Admin Center, which Group Type must be selected to control access to applications and resources?",
        "questionVi": "[SOP 2.3 - Security Groups] Trong Microsoft Entra Admin Center, loại Nhóm (Group Type) nào phải được chọn để kiểm soát quyền truy cập vào các ứng dụng và tài nguyên?",
        "options": [
          {
            "key": "A",
            "text": "Security"
          },
          {
            "key": "B",
            "text": "Microsoft 365"
          },
          {
            "key": "C",
            "text": "Distribution"
          },
          {
            "key": "D",
            "text": "Mail-enabled security"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Security",
        "explainRight": "SOP 2.3 hướng dẫn chọn loại nhóm 'Security' để thực hiện phân quyền truy cập. Quy trình: Entra Admin Center -> Groups -> All Groups -> New Group -> Select Security -> Name -> Owners -> Members -> Configure permissions -> Save.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Microsoft 365 Group dùng cho cộng tác (Email, Calendar, SharePoint), không chuyên dụng thuần túy cho phân quyền ứng dụng như Security Group. C. Distribution Group chỉ dùng để gửi email hàng loạt, không có tính năng phân quyền truy cập tài nguyên. D. Mail-enabled security group có thể dùng phân quyền nhưng SOP 2.3 tập trung vào Security Group chuẩn trong Entra ID."
      },
      {
        "id": "m365-q10",
        "num": 10,
        "section": "Phần 2: Group & Access Management (Nhóm & Phân quyền)",
        "questionEn": "[SOP 2.4 - Shared Mailboxes] You need to create a new Shared Mailbox and ensure that specific users can open the mailbox and view its contents, as well as send emails that appear to come from the mailbox itself. Which permissions should you assign in the Exchange Admin Center?",
        "questionVi": "[SOP 2.4 - Shared Mailboxes] Bạn cần tạo một Shared Mailbox mới và đảm bảo rằng những người dùng cụ thể có thể mở hòm thư, xem nội dung và gửi email với tư cách là chính hòm thư đó. Bạn nên chỉ định những quyền nào trong Exchange Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Owner and Contributor permissions"
          },
          {
            "key": "B",
            "text": "Full Access and Send on Behalf permissions"
          },
          {
            "key": "C",
            "text": "Send on Behalf and Read and Manage permissions"
          },
          {
            "key": "D",
            "text": "Full Access and Send As permissions"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Full Access and Send As permissions",
        "explainRight": "Theo SOP 2.4, sau khi tạo Shared Mailbox trong Exchange Admin Center (Recipients → Shared Mailboxes), bạn cần vào Manage Mailbox Delegation để gán: 1. Full Access (để mở/xem nội dung) và 2. Send As (để gửi email với tư cách hòm thư đó).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Owner và Contributor là các vai trò trong Azure RBAC hoặc SharePoint, không phải là các quyền chuẩn khi cấu hình Delegation cho Shared Mailbox trong EAC. B. Quyền Send on Behalf không đáp ứng yêu cầu gửi email xuất hiện dưới tên của chính hòm thư (Send As). C. Quyền Send on Behalf chỉ cho phép gửi thay mặt (người nhận thấy 'A gửi thay mặt B'), không đúng yêu cầu gửi trực tiếp từ hòm thư; Read and Manage là tên gọi cũ/khác của Full Access nhưng thiếu quyền gửi."
      },
      {
        "id": "m365-q11",
        "num": 11,
        "section": "Phần 2: Group & Access Management (Nhóm & Phân quyền)",
        "questionEn": "[SOP 2.5 - Access & Permission Management] When managing access to Microsoft 365 resources such as SharePoint sites or Teams, which security principle must be applied according to the standard operating procedure?",
        "questionVi": "[SOP 2.5 - Access & Permission Management] Khi quản lý quyền truy cập vào các tài nguyên Microsoft 365 như SharePoint site hoặc Teams, nguyên tắc bảo mật nào phải được áp dụng theo quy trình vận hành tiêu chuẩn?",
        "options": [
          {
            "key": "A",
            "text": "Just-In-Time Access only"
          },
          {
            "key": "B",
            "text": "Least Privilege Access"
          },
          {
            "key": "C",
            "text": "Global Administrator Access"
          },
          {
            "key": "D",
            "text": "Open Access Policy"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Least Privilege Access",
        "explainRight": "Theo SOP 2.5 về Access & Permission Management, bước 6 quy định rõ việc áp dụng nguyên tắc 'Least Privilege Access' (Quyền truy cập tối thiểu) để đảm bảo người dùng chỉ có đủ quyền cần thiết cho công việc, giảm thiểu rủi ro bảo mật.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Just-In-Time (JIT) là một cơ chế kích hoạt quyền tạm thời, nhưng SOP yêu cầu nguyên tắc cốt lõi là Least Privilege khi cấu hình các nhóm và tài nguyên. C. Cấp quyền Global Administrator vi phạm nghiêm trọng nguyên tắc bảo mật vì cung cấp quá nhiều quyền hạn không cần thiết. D. Open Access Policy cho phép mọi người truy cập, đi ngược lại với việc quản lý quyền hạn và bảo mật tài nguyên doanh nghiệp."
      },
      {
        "id": "m365-q12",
        "num": 12,
        "section": "Phần 3: Exchange Online Administration (Quản trị Exchange Online)",
        "questionEn": "[SOP 3.1 - Mailbox Management] An administrator needs to redirect all incoming emails for a specific user to another recipient. Where in the Exchange Admin Center (EAC) should this be configured?",
        "questionVi": "[SOP 3.1 - Mailbox Management] Quản trị viên cần chuyển hướng tất cả email gửi đến của một người dùng cụ thể sang một người nhận khác. Việc này nên được cấu hình ở đâu trong Exchange Admin Center (EAC)?",
        "options": [
          {
            "key": "A",
            "text": "Recipients → Mailboxes → Select Mailbox → Configure forwarding"
          },
          {
            "key": "B",
            "text": "Mail Flow → Rules → Add Rule"
          },
          {
            "key": "C",
            "text": "Recipients → Shared Mailboxes → Manage Delegation"
          },
          {
            "key": "D",
            "text": "Organization → Sharing → Individual Sharing"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Recipients → Mailboxes → Select Mailbox → Configure forwarding",
        "explainRight": "Dựa trên SOP 3.1 về Mailbox Management, các thao tác quản lý hòm thư cá nhân được thực hiện tại EAC → Recipients → Mailboxes. Tại đây, quản trị viên chọn hòm thư cụ thể và chọn 'Configure forwarding' để chuyển tiếp email.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Mail Flow Rules dùng để tạo quy tắc cho toàn hệ thống hoặc nhóm lớn, không phải là cách quản lý thuộc tính forwarding trực tiếp trên hòm thư người dùng theo SOP 3.1. C. Shared Mailboxes là khu vực quản lý hòm thư dùng chung, không dùng để cấu hình forwarding cho hòm thư cá nhân của người dùng. D. Organization Sharing dùng để thiết lập chia sẻ lịch làm việc hoặc thông tin giữa các tổ chức, không liên quan đến việc chuyển tiếp email."
      },
      {
        "id": "m365-q13",
        "num": 13,
        "section": "Phần 3: Exchange Online Administration (Quản trị Exchange Online)",
        "questionEn": "[SOP 3.2 - Shared Mailbox Management] What are the mandatory initial details required when adding a new Shared Mailbox in the Exchange Admin Center according to the SOP?",
        "questionVi": "[SOP 3.2 - Shared Mailbox Management] Những thông tin ban đầu bắt buộc nào cần thiết khi thêm một Shared Mailbox mới trong Exchange Admin Center theo SOP?",
        "options": [
          {
            "key": "A",
            "text": "Display Name and License Type"
          },
          {
            "key": "B",
            "text": "Email Address and Member List"
          },
          {
            "key": "C",
            "text": "Mailbox Name and Storage Quota"
          },
          {
            "key": "D",
            "text": "Mailbox Name and Email Address"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Mailbox Name and Email Address",
        "explainRight": "Theo SOP 3.2, quy trình tạo Shared Mailbox yêu cầu: 1. Vào EAC → Recipients → Shared Mailboxes. 2. Nhấn Add Shared Mailbox. 3. Nhập Mailbox Name và Email Address. Đây là hai thông tin định danh bắt buộc đầu tiên.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Shared Mailbox không yêu cầu gán License trực tiếp (miễn phí dưới 50GB), nên License Type không phải thông tin bắt buộc khi khởi tạo. B. Member List (danh sách thành viên) được gán ở bước Delegation sau khi hòm thư đã được tạo, không phải thông tin định danh bắt buộc ở bước 4 của SOP. C. Storage Quota thường được mặc định theo chính sách hệ thống, không phải là thông tin bắt buộc phải nhập ngay khi nhấn Add Shared Mailbox."
      },
      {
        "id": "m365-q14",
        "num": 14,
        "section": "Phần 3: Exchange Online Administration (Quản trị Exchange Online)",
        "questionEn": "[SOP 3.3 - Mail Flow Rules] After defining the Name, Conditions, and Actions for a new Mail Flow Rule, what is the final operational step to ensure the rule is active and working correctly?",
        "questionVi": "[SOP 3.3 - Mail Flow Rules] Sau khi xác định Tên, Điều kiện và Hành động cho một Mail Flow Rule mới, bước vận hành cuối cùng để đảm bảo quy tắc hoạt động và chính xác là gì?",
        "options": [
          {
            "key": "A",
            "text": "Save the rule and wait 24 hours for automatic propagation"
          },
          {
            "key": "B",
            "text": "Assign a license to the rule and restart Exchange services"
          },
          {
            "key": "C",
            "text": "Export the rule to a CSV file for backup"
          },
          {
            "key": "D",
            "text": "Enable the rule, test mail flow, and monitor message trace results"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Enable the rule, test mail flow, and monitor message trace results",
        "explainRight": "Theo SOP 3.4 (Mail Flow Rules), sau khi định nghĩa quy tắc, quản trị viên phải: 5. Enable the rule. 6. Save. 7. Test mail flow. 8. Monitor message trace. Việc kiểm tra và theo dõi vết tin nhắn là bước then chốt để xác nhận tính năng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Mặc dù có độ trễ nhất định, nhưng SOP yêu cầu chủ động Test và Monitor ngay thay vì chờ đợi thụ động 24 giờ. B. Mail Flow Rule không yêu cầu gán license và không cần khởi động lại dịch vụ Exchange. C. Export CSV là bước sao lưu, không phải là bước vận hành để kích hoạt hoặc kiểm tra tính hiệu quả của quy tắc đang triển khai."
      },
      {
        "id": "m365-q15",
        "num": 15,
        "section": "Phần 3: Exchange Online Administration (Quản trị Exchange Online)",
        "questionEn": "[SOP 3.4 - Email Security] In which portal should an administrator configure Anti-Phishing and Safe Links policies to enhance email security?",
        "questionVi": "[SOP 3.4 - Email Security] Quản trị viên nên cấu hình các chính sách Anti-Phishing và Safe Links trong cổng thông tin (portal) nào để tăng cường bảo mật email?",
        "options": [
          {
            "key": "A",
            "text": "Azure Active Directory Admin Center"
          },
          {
            "key": "B",
            "text": "Microsoft Purview Compliance Portal"
          },
          {
            "key": "C",
            "text": "Microsoft Defender Portal"
          },
          {
            "key": "D",
            "text": "Exchange Admin Center"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Microsoft Defender Portal",
        "explainRight": "Theo SOP 3.4 (Email Security), các chính sách bảo mật nâng cao như Anti-Spam, Anti-Phishing, Anti-Malware, Safe Links và Safe Attachments hiện được quản lý tập trung tại Microsoft Defender Portal → Email & Collaboration → Policies & Rules.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Azure AD (nay là Microsoft Entra) quản lý danh tính và truy cập, không quản lý các chính sách bảo mật nội dung email. B. Microsoft Purview tập trung vào quản trị dữ liệu, tuân thủ (Compliance) và DLP, không phải nơi chính để cấu hình Safe Links/Anti-Phishing. D. Exchange Admin Center hiện đã chuyển các thiết lập bảo mật nâng cao sang Defender Portal; EAC chỉ còn quản lý các thiết lập hòm thư cơ bản."
      },
      {
        "id": "m365-q16",
        "num": 16,
        "section": "Phần 3: Exchange Online Administration (Quản trị Exchange Online)",
        "questionEn": "[SOP 3.5 - Mailbox Recovery & Restoration] A user account was deleted 10 days ago, and their mailbox needs to be restored. According to the SOP, what is the first sequence of actions required for a deleted mailbox?",
        "questionVi": "[SOP 3.5 - Mailbox Recovery & Restoration] Một tài khoản người dùng đã bị xóa 10 ngày trước và hòm thư của họ cần được khôi phục. Theo SOP, trình tự hành động đầu tiên cần thiết đối với một hòm thư đã bị xóa là gì?",
        "options": [
          {
            "key": "A",
            "text": "Open Exchange Admin Center and click 'Purge Mailbox'"
          },
          {
            "key": "B",
            "text": "Run a PowerShell script to move the mailbox to a Shared Mailbox"
          },
          {
            "key": "C",
            "text": "Recover the Microsoft 365 user account and reassign the required license"
          },
          {
            "key": "D",
            "text": "Create a new user with the same email and use Content Search"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Recover the Microsoft 365 user account and reassign the required license",
        "explainRight": "SOP 3.5 quy định đối với hòm thư đã bị xóa (deleted mailboxes), bước đầu tiên là: 4a. Recover the Microsoft 365 user account (Khôi phục tài khoản người dùng) và 4b. Reassign the required license (Gán lại bản quyền). Hòm thư sẽ tự động kết nối lại sau khi tài khoản được khôi phục.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Lệnh 'Purge Mailbox' sẽ xóa vĩnh viễn hòm thư, đi ngược lại mục tiêu khôi phục dữ liệu. B. Không thể di chuyển một hòm thư đang ở trạng thái bị xóa sang Shared Mailbox mà không khôi phục tài khoản gốc trước. D. Tạo người dùng mới với cùng email sẽ tạo ra một GUID mới, không tự động kết nối lại với hòm thư cũ đã xóa."
      },
      {
        "id": "m365-q17",
        "num": 17,
        "section": "Phần 4: Microsoft Teams Administration (Quản trị Microsoft Teams)",
        "questionEn": "[SOP 4.1 - Team Creation & Management] When creating a new Team in the Microsoft Teams Admin Center, which setting determines whether any user in the organization can join without approval?",
        "questionVi": "[SOP 4.1 - Team Creation & Management] Khi tạo một Team mới trong Microsoft Teams Admin Center, thiết lập nào quyết định việc bất kỳ người dùng nào trong tổ chức cũng có thể tham gia mà không cần phê duyệt?",
        "options": [
          {
            "key": "A",
            "text": "App Permissions"
          },
          {
            "key": "B",
            "text": "Channel Settings"
          },
          {
            "key": "C",
            "text": "Messaging Features"
          },
          {
            "key": "D",
            "text": "Team Privacy (Public vs Private)"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Team Privacy (Public vs Private)",
        "explainRight": "Theo SOP 4.1, bước 6 yêu cầu cấu hình 'Team Privacy'. Chế độ 'Public' cho phép mọi người trong tổ chức tự tham gia, trong khi 'Private' yêu cầu chủ sở hữu Team phê duyệt.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. App Permissions quản lý các ứng dụng được phép cài đặt trong Team, không ảnh hưởng đến tính riêng tư của nhóm. B. Channel Settings quản lý việc tạo và sử dụng các kênh bên trong Team, không quyết định quyền truy cập vào Team đó. C. Messaging Features quản lý các tính năng như chat, emoji, sticker, không liên quan đến quyền gia nhập nhóm."
      },
      {
        "id": "m365-q18",
        "num": 18,
        "section": "Phần 4: Microsoft Teams Administration (Quản trị Microsoft Teams)",
        "questionEn": "[SOP 4.2 - Teams Policies] You need to restrict a specific group of users from creating new channels within their teams. Which action should you take in the Teams Admin Center?",
        "questionVi": "[SOP 4.2 - Teams Policies] Bạn cần hạn chế một nhóm người dùng cụ thể không được tạo các kênh mới trong team của họ. Bạn nên thực hiện hành động nào trong Teams Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Navigate to Teams Policies, edit or create a policy, and assign it to users"
          },
          {
            "key": "B",
            "text": "Disable the Microsoft 365 Group creation in Azure AD"
          },
          {
            "key": "C",
            "text": "Change the user's role from Member to Guest"
          },
          {
            "key": "D",
            "text": "Modify the Global Settings in the Microsoft 365 Admin Center"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Navigate to Teams Policies, edit or create a policy, and assign it to users",
        "explainRight": "Theo SOP 4.2 (Teams Policies), để quản lý các tính năng như 'Channel Settings' cho người dùng, bạn cần: 2. Vào Teams → Teams Policies. 3. Tạo/sửa policy. 4. Cấu hình Channel Settings. 5. Assign policy cho người dùng/nhóm tương ứng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Vô hiệu hóa tạo Group trong Azure AD sẽ ngăn việc tạo Team mới hoàn toàn, không phải ngăn tạo Channel bên trong một Team hiện có. C. Chuyển sang Guest sẽ tước bỏ hầu hết quyền hạn nội bộ và không phải là cách quản lý chính sách tính năng chuẩn theo SOP. D. Global Settings ảnh hưởng đến toàn bộ tổ chức, không dùng để áp dụng cho một 'nhóm người dùng cụ thể' như yêu cầu."
      },
      {
        "id": "m365-q19",
        "num": 19,
        "section": "Phần 4: Microsoft Teams Administration (Quản trị Microsoft Teams)",
        "questionEn": "[SOP 4.3 - Meeting & Calling Configuration] Your organization needs to restrict specific users from using video during Microsoft Teams meetings. According to the SOP, which configuration path and policy type should you use?",
        "questionVi": "[SOP 4.3 - Meeting & Calling Configuration] Tổ chức của bạn cần hạn chế một số người dùng cụ thể sử dụng video trong các cuộc họp Microsoft Teams. Theo SOP, bạn nên sử dụng đường dẫn cấu hình và loại chính sách nào?",
        "options": [
          {
            "key": "A",
            "text": "Teams Admin Center > Voice > Calling Policies"
          },
          {
            "key": "B",
            "text": "Microsoft Entra Admin Center > Groups > Policy Assignment"
          },
          {
            "key": "C",
            "text": "Teams Admin Center > Meetings > Meeting Settings"
          },
          {
            "key": "D",
            "text": "Teams Admin Center > Meetings > Meeting Policies"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Teams Admin Center > Meetings > Meeting Policies",
        "explainRight": "Theo SOP, để cấu hình các tính năng trong cuộc họp (như video), bạn cần truy cập Teams Admin Center > Meetings > Meeting Policies. Sau đó cấu hình chính sách và gán cho người dùng cụ thể.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Calling Policies dùng để quản lý các tính năng gọi điện thoại (VoIP/PSTN), không phải tính năng trong cuộc họp. B. Microsoft Entra Admin Center không phải là nơi quản lý các tính năng chi tiết của ứng dụng Teams như Meeting Policies. C. Meeting Settings áp dụng cho toàn bộ tổ chức (global) chứ không dùng để gán các tính năng cụ thể cho từng nhóm người dùng."
      },
      {
        "id": "m365-q20",
        "num": 20,
        "section": "Phần 4: Microsoft Teams Administration (Quản trị Microsoft Teams)",
        "questionEn": "[SOP 4.4 - Guest Access] An administrator needs to enable external users to participate in Teams channels and use messaging. Where is the primary location in the Teams Admin Center to enable this feature globally?",
        "questionVi": "[SOP 4.4 - Guest Access] Quản trị viên cần cho phép người dùng bên ngoài tham gia vào các kênh Teams và sử dụng tin nhắn. Vị trí chính trong Teams Admin Center để bật tính năng này trên toàn hệ thống là ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Org-wide settings > Teams settings"
          },
          {
            "key": "B",
            "text": "Users > External Access"
          },
          {
            "key": "C",
            "text": "Users > Guest Access"
          },
          {
            "key": "D",
            "text": "Teams Apps > Permission Policies"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Users > Guest Access",
        "explainRight": "Dựa trên SOP 4.4, để quản lý quyền truy cập của khách (Guest Access), bạn phải vào Teams Admin Center > Users > Guest Access và chuyển trạng thái sang Enable.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Teams settings chứa các cài đặt chung cho ứng dụng nhưng không phải là nơi bật/tắt quyền Guest Access theo SOP. B. External Access (Federation) dùng để liên lạc với người dùng Teams/Skype ở tổ chức khác, không phải là quyền truy cập Guest vào tài nguyên nội bộ. D. App Permission Policies dùng để quản lý ứng dụng nào được phép cài đặt, không quản lý quyền truy cập của người dùng bên ngoài."
      },
      {
        "id": "m365-q21",
        "num": 21,
        "section": "Phần 4: Microsoft Teams Administration (Quản trị Microsoft Teams)",
        "questionEn": "[SOP 4.5 - Teams Application Management] To prevent users from installing third-party applications in Microsoft Teams, which step should an administrator perform in the Teams Admin Center according to the SOP?",
        "questionVi": "[SOP 4.5 - Teams Application Management] Để ngăn người dùng cài đặt các ứng dụng bên thứ ba trong Microsoft Teams, quản trị viên nên thực hiện bước nào trong Teams Admin Center theo SOP?",
        "options": [
          {
            "key": "A",
            "text": "Navigate to Teams Apps > Setup Policies and remove apps"
          },
          {
            "key": "B",
            "text": "Navigate to Teams Apps > Manage Apps and block applications"
          },
          {
            "key": "C",
            "text": "Navigate to Meetings > Meeting Policies and disable apps"
          },
          {
            "key": "D",
            "text": "Navigate to Users > Guest Access and disable apps"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Navigate to Teams Apps > Manage Apps and block applications",
        "explainRight": "Theo SOP 4.5, quy trình chuẩn là: Mở Teams Admin Center > Teams Apps > Manage Apps để xem danh sách và Allow hoặc Block các ứng dụng theo yêu cầu.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Setup Policies dùng để ghim (pin) ứng dụng lên thanh điều hướng của người dùng, không dùng để chặn cài đặt ứng dụng. C. Meeting Policies quản lý các tính năng trong cuộc họp, không quản lý việc cài đặt ứng dụng trên toàn nền tảng Teams. D. Guest Access quản lý quyền của khách, không phải là nơi quản lý danh mục ứng dụng của tổ chức."
      },
      {
        "id": "m365-q22",
        "num": 22,
        "section": "Phần 5: SharePoint & OneDrive Administration (SharePoint & OneDrive)",
        "questionEn": "[SOP 5.1 - Site Collection Management] When creating a new site for a department, where should the administrator go to manage site collections and assign owners according to the SOP?",
        "questionVi": "[SOP 5.1 - Site Collection Management] Khi tạo một trang (site) mới cho một phòng ban, quản trị viên nên đi đâu để quản lý các tập hợp trang và chỉ định chủ sở hữu theo SOP?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft 365 Admin Center > Groups > Active Groups"
          },
          {
            "key": "B",
            "text": "SharePoint Admin Center > Sites > Active Sites"
          },
          {
            "key": "C",
            "text": "SharePoint Admin Center > More Features > User Profiles"
          },
          {
            "key": "D",
            "text": "SharePoint Admin Center > Policies > Sharing"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "SharePoint Admin Center > Sites > Active Sites",
        "explainRight": "Theo SOP 5.1, quy trình quản lý Site Collection bao gồm: Mở SharePoint Admin Center > Sites > Active Sites để tạo/chọn site và chỉ định Site Owners.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Active Groups quản lý nhóm Microsoft 365, dù có liên kết với site nhưng không phải là nơi quản trị Site Collection chuyên sâu theo SOP. C. User Profiles dùng để quản lý thông tin cá nhân người dùng, không liên quan đến việc quản trị danh sách Active Sites. D. Policies > Sharing dùng để cấu hình quyền chia sẻ ra bên ngoài, không phải nơi tạo site hay gán chủ sở hữu site."
      },
      {
        "id": "m365-q23",
        "num": 23,
        "section": "Phần 5: SharePoint & OneDrive Administration (SharePoint & OneDrive)",
        "questionEn": "[SOP 5.2 - Permission Management] A user needs 'Full Control' over a specific SharePoint site. According to the SOP, what is the correct procedure to grant this?",
        "questionVi": "[SOP 5.2 - Permission Management] Một người dùng cần quyền 'Full Control' đối với một trang SharePoint cụ thể. Theo SOP, quy trình chính xác để cấp quyền này là gì?",
        "options": [
          {
            "key": "A",
            "text": "Open the SharePoint Site > Site Permissions > Add users/groups"
          },
          {
            "key": "B",
            "text": "Open Microsoft Entra Admin Center > Roles and Administrators"
          },
          {
            "key": "C",
            "text": "Open SharePoint Admin Center > Policies > Sharing"
          },
          {
            "key": "D",
            "text": "Open SharePoint Admin Center > Sites > Active Sites > Sharing"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Open the SharePoint Site > Site Permissions > Add users/groups",
        "explainRight": "SOP 5.2 quy định việc quản lý quyền (Permission Management) được thực hiện trực tiếp tại: SharePoint Site > Site Permissions > Thêm người dùng/nhóm và gán mức quyền phù hợp.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Entra ID Roles quản lý quyền quản trị hệ thống (như Global Admin), không phải quyền truy cập nội dung bên trong một trang SharePoint. C. Sharing Policies ở cấp Admin Center dùng để giới hạn phạm vi chia sẻ toàn hệ thống, không dùng để gán quyền cụ thể cho một cá nhân vào một site. D. Active Sites > Sharing dùng để thay đổi cấp độ chia sẻ của site (ví dụ: cho phép chia sẻ ẩn danh), không phải là nơi gán quyền người dùng chi tiết."
      },
      {
        "id": "m365-q24",
        "num": 24,
        "section": "Phần 5: SharePoint & OneDrive Administration (SharePoint & OneDrive)",
        "questionEn": "[SOP 5.3 - External Sharing Controls] To prevent users from sharing SharePoint content with specific external domains, which configuration path should be used in the SharePoint Admin Center?",
        "questionVi": "[SOP 5.3 - External Sharing Controls] Để ngăn người dùng chia sẻ nội dung SharePoint với các tên miền bên ngoài cụ thể, đường dẫn cấu hình nào nên được sử dụng trong SharePoint Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "More Features > OneDrive > Sharing"
          },
          {
            "key": "B",
            "text": "Sites > Active Sites > Sharing Settings"
          },
          {
            "key": "C",
            "text": "Policies > Sharing > Domain Restrictions"
          },
          {
            "key": "D",
            "text": "Policies > Access Control > Unmanaged Devices"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Policies > Sharing > Domain Restrictions",
        "explainRight": "Theo SOP 5.3, để kiểm soát chia sẻ bên ngoài, quản trị viên vào SharePoint Admin Center > Policies > Sharing và cấu hình Domain Restrictions để giới hạn các tên miền cụ thể.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. OneDrive Sharing chỉ áp dụng cho các tệp cá nhân trong OneDrive, không bao quát toàn bộ SharePoint Sites. B. Active Sites > Sharing Settings chỉ cấu hình cấp độ chia sẻ cho từng site riêng lẻ, không phải là nơi thiết lập danh sách chặn tên miền toàn cầu. D. Access Control > Unmanaged Devices dùng để chặn truy cập từ thiết bị không được quản lý, không liên quan đến tên miền của đối tác."
      },
      {
        "id": "m365-q25",
        "num": 25,
        "section": "Phần 5: SharePoint & OneDrive Administration (SharePoint & OneDrive)",
        "questionEn": "[SOP 5.4 - Storage Management] A SharePoint site is running out of space. According to the SOP, how should an administrator modify the storage limit for that specific site?",
        "questionVi": "[SOP 5.4 - Storage Management] Một trang SharePoint sắp hết dung lượng. Theo SOP, quản trị viên nên sửa đổi giới hạn lưu trữ cho trang cụ thể đó như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Go to Microsoft 365 Admin Center > Billing > Purchase Services"
          },
          {
            "key": "B",
            "text": "Go to SharePoint Admin Center > Sites > Active Sites > Select the site > Modify storage limits"
          },
          {
            "key": "C",
            "text": "Go to SharePoint Admin Center > Settings > Site Storage Limits"
          },
          {
            "key": "D",
            "text": "Go to SharePoint Admin Center > More Features > Storage"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Go to SharePoint Admin Center > Sites > Active Sites > Select the site > Modify storage limits",
        "explainRight": "SOP 5.4 hướng dẫn: Mở SharePoint Admin Center > Sites > Active Sites > Chọn site cần chỉnh sửa > Xem và sửa đổi Storage Limits.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Billing > Purchase Services dùng để mua thêm dung lượng tổng cho gói đăng ký, không phải để phân bổ dung lượng cho một site cụ thể. C. Settings > Site Storage Limits thường dùng để chuyển đổi giữa chế độ quản lý dung lượng Tự động (Automatic) hoặc Thủ công (Manual), không phải nơi chỉnh sửa trực tiếp cho từng site. D. Menu More Features không chứa mục 'Storage' trực tiếp để quản lý dung lượng của các Active Sites."
      },
      {
        "id": "m365-q26",
        "num": 26,
        "section": "Phần 5: SharePoint & OneDrive Administration (SharePoint & OneDrive)",
        "questionEn": "[SOP 5.5 - OneDrive Administration] Where can an administrator configure the default retention period for files in OneDrive for deleted users according to the SOP?",
        "questionVi": "[SOP 5.5 - OneDrive Administration] Quản trị viên có thể cấu hình thời gian lưu trữ mặc định cho các tệp trong OneDrive của người dùng đã bị xóa ở đâu theo SOP?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Entra Admin Center > Users > Deleted Users"
          },
          {
            "key": "B",
            "text": "SharePoint Admin Center > More Features > OneDrive > Retention Settings"
          },
          {
            "key": "C",
            "text": "Microsoft Purview > Data Loss Prevention > Policies"
          },
          {
            "key": "D",
            "text": "SharePoint Admin Center > Policies > Sharing"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "SharePoint Admin Center > More Features > OneDrive > Retention Settings",
        "explainRight": "Theo SOP 5.5, để quản trị OneDrive (bao gồm giới hạn lưu trữ, chia sẻ và Retention Settings), quản trị viên vào SharePoint Admin Center > More Features > OneDrive.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Deleted Users trong Entra ID chỉ cho phép khôi phục tài khoản người dùng trong vòng 30 ngày, không quản lý thời gian lưu trữ dữ liệu OneDrive. C. Purview DLP dùng để ngăn chặn rò rỉ dữ liệu, không phải là nơi cấu hình thời gian lưu trữ mặc định khi xóa người dùng trong SOP này. D. Sharing Policies chỉ quản lý việc chia sẻ tệp, không quản lý vòng đời dữ liệu (retention) của OneDrive."
      },
      {
        "id": "m365-q27",
        "num": 27,
        "section": "Phần 6: Identity & Access Management (Entra ID, MFA & RBAC)",
        "questionEn": "[SOP 6.1 - Microsoft Entra ID Administration] An administrator needs to disable a user account and update their group memberships. According to the SOP, which portal and section should be used?",
        "questionVi": "[SOP 6.1 - Microsoft Entra ID Administration] Quản trị viên cần vô hiệu hóa tài khoản người dùng và cập nhật tư cách thành viên nhóm của họ. Theo SOP, cổng thông tin và mục nào nên được sử dụng?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft 365 Admin Center > Setup > Guided Setup"
          },
          {
            "key": "B",
            "text": "Teams Admin Center > Users > Manage Users"
          },
          {
            "key": "C",
            "text": "Microsoft Entra Admin Center > Users or Groups"
          },
          {
            "key": "D",
            "text": "SharePoint Admin Center > Sites > Active Sites"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Microsoft Entra Admin Center > Users or Groups",
        "explainRight": "SOP 6.1 quy định việc quản trị danh tính (Identity Management) thực hiện tại Microsoft Entra Admin Center. Các bước bao gồm: Vào Users hoặc Groups để tạo, sửa, vô hiệu hóa tài khoản hoặc quản lý thành viên nhóm.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Guided Setup dùng để thiết lập ban đầu cho tenant, không phải công cụ quản trị người dùng/nhóm hàng ngày. B. Mục Manage Users trong Teams Admin Center chủ yếu để gán chính sách Teams, không phải là nơi chuẩn để quản lý trạng thái tài khoản (Enable/Disable) theo SOP Identity. D. SharePoint Admin Center chỉ quản lý quyền truy cập trên site, không có chức năng vô hiệu hóa (disable) tài khoản người dùng hệ thống."
      },
      {
        "id": "m365-q28",
        "num": 28,
        "section": "Phần 6: Identity & Access Management (Entra ID, MFA & RBAC)",
        "questionEn": "[SOP 6.2 - Multi-Factor Authentication (MFA)] To comply with security standards, you need to enable and configure specific authentication methods for a group of users. According to the SOP, which path in the Microsoft Entra Admin Center should you follow?",
        "questionVi": "[SOP 6.2 - Multi-Factor Authentication (MFA)] Để tuân thủ các tiêu chuẩn bảo mật, bạn cần bật và cấu hình các phương thức xác thực cụ thể cho một nhóm người dùng. Theo quy trình SOP, bạn nên thực hiện theo đường dẫn nào trong Microsoft Entra Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Identity → Users → All Users → Per-user MFA"
          },
          {
            "key": "B",
            "text": "Protection → Authentication Methods"
          },
          {
            "key": "C",
            "text": "Devices → Enrollment → Authentication Methods"
          },
          {
            "key": "D",
            "text": "Security → Conditional Access → MFA Settings"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Protection → Authentication Methods",
        "explainRight": "Theo SOP 6.2, để cấu hình MFA, quản trị viên truy cập Microsoft Entra Admin Center > Protection > Authentication Methods. Tại đây, bạn có thể bật MFA cho người dùng/nhóm, cấu hình các phương thức xác thực và lưu cài đặt.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Đây là giao diện quản lý MFA cũ theo từng người dùng, không nằm trong luồng cấu hình hiện đại của Entra ID theo SOP. C. Menu này thuộc quản lý thiết bị (Intune), không phải nơi quản lý phương thức xác thực danh tính người dùng. D. Conditional Access là nơi áp dụng chính sách truy cập có điều kiện, không phải nơi cấu hình gốc các phương thức xác thực (Authentication Methods)."
      },
      {
        "id": "m365-q29",
        "num": 29,
        "section": "Phần 6: Identity & Access Management (Entra ID, MFA & RBAC)",
        "questionEn": "[SOP 6.3 - Conditional Access Policies] When creating a new Conditional Access policy in Microsoft Entra Admin Center, which of the following is a mandatory configuration component according to the SOP?",
        "questionVi": "[SOP 6.3 - Conditional Access Policies] Khi tạo một chính sách Conditional Access mới trong Microsoft Entra Admin Center, thành phần nào sau đây là bắt buộc phải cấu hình theo quy trình SOP?",
        "options": [
          {
            "key": "A",
            "text": "User Profile, Department, Manager, and Job Title"
          },
          {
            "key": "B",
            "text": "Users/Groups, Applications, Conditions, and Access Controls"
          },
          {
            "key": "C",
            "text": "Device Compliance, Risk Level, and Password Complexity"
          },
          {
            "key": "D",
            "text": "Session Lifetime, Sign-in Frequency, and Persistent Browser"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Users/Groups, Applications, Conditions, and Access Controls",
        "explainRight": "Theo SOP 6.3, quy trình cấu hình Conditional Access yêu cầu xác định rõ: Đối tượng (Users/Groups), Ứng dụng (Applications), Điều kiện (Conditions) và Kiểm soát truy cập (Access Controls) trước khi kích hoạt chính sách.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Đây là các thuộc tính thông tin người dùng trong Entra ID, không phải các thành phần cấu hình của một chính sách Conditional Access. C. Đây chỉ là các điều kiện nhỏ (Conditions) hoặc trạng thái thiết bị, không bao quát đầy đủ các thành phần bắt buộc của một chính sách. D. Đây là các thiết lập thuộc phần Session controls, chỉ là một phần nhỏ trong Access Controls, không đủ để hình thành một chính sách hoàn chỉnh."
      },
      {
        "id": "m365-q30",
        "num": 30,
        "section": "Phần 6: Identity & Access Management (Entra ID, MFA & RBAC)",
        "questionEn": "[SOP 6.4 - Role-Based Access Control (RBAC)] You need to grant a user the ability to manage passwords for non-admin users. According to the RBAC SOP, what is the correct sequence of actions?",
        "questionVi": "[SOP 6.4 - Role-Based Access Control (RBAC)] Bạn cần cấp cho người dùng khả năng quản lý mật khẩu cho những người dùng không phải quản trị viên. Theo SOP về RBAC, trình tự hành động nào sau đây là đúng?",
        "options": [
          {
            "key": "A",
            "text": "Open Microsoft Purview → Permissions → Roles → Add Member"
          },
          {
            "key": "B",
            "text": "Open Microsoft 365 Admin Center → Active Users → Edit Licenses"
          },
          {
            "key": "C",
            "text": "Open Entra Admin Center → Roles & Administrators → Select Role → Assign user"
          },
          {
            "key": "D",
            "text": "Open Entra Admin Center → Users → All Users → Edit Properties"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Open Entra Admin Center → Roles & Administrators → Select Role → Assign user",
        "explainRight": "Theo SOP 6.4, quy trình RBAC chuẩn bao gồm: Truy cập Microsoft Entra Admin Center > Roles & Administrators > Chọn vai trò cần thiết (ví dụ Helpdesk Admin) > Gán người dùng vào vai trò đó và lưu thay đổi.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Microsoft Purview Portal dùng để quản lý quyền về tuân thủ và dữ liệu, không phải nơi quản trị các vai trò hệ thống chính của Entra ID. B. Việc chỉnh sửa License (giấy phép) chỉ cấp quyền sử dụng dịch vụ, không cấp quyền quản trị (Role). D. Chỉnh sửa thuộc tính người dùng (Properties) không phải là cách gán vai trò quản trị hệ thống theo chuẩn RBAC."
      },
      {
        "id": "m365-q31",
        "num": 31,
        "section": "Phần 6: Identity & Access Management (Entra ID, MFA & RBAC)",
        "questionEn": "[SOP 6.5 - Self-Service Password Reset (SSPR)] To reduce helpdesk tickets, you decide to enable Self-Service Password Reset (SSPR). What is the final step in the SOP before considering the configuration complete?",
        "questionVi": "[SOP 6.5 - Self-Service Password Reset (SSPR)] Để giảm bớt các yêu cầu hỗ trợ, bạn quyết định bật Tính năng tự thay đổi mật khẩu (SSPR). Bước cuối cùng trong SOP trước khi coi cấu hình là hoàn tất là gì?",
        "options": [
          {
            "key": "A",
            "text": "Disable MFA for all target users"
          },
          {
            "key": "B",
            "text": "Notify all users via email"
          },
          {
            "key": "C",
            "text": "Validate password reset functionality"
          },
          {
            "key": "D",
            "text": "Reset all user passwords immediately"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Validate password reset functionality",
        "explainRight": "Theo SOP 6.5, sau khi bật SSPR, cấu hình phương thức xác thực và chọn nhóm đối tượng, bước cuối cùng cực kỳ quan trọng là phải Kiểm tra/Xác nhận chức năng đổi mật khẩu (Validate) để đảm bảo hệ thống hoạt động đúng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. SSPR yêu cầu các phương thức xác thực (thường giống MFA), việc tắt MFA sẽ làm giảm tính bảo mật và có thể khiến SSPR không hoạt động. B. Thông báo cho người dùng là bước truyền thông, không phải bước kỹ thuật cuối cùng để hoàn tất quy trình cấu hình hệ thống. D. Việc reset mật khẩu ngay lập tức là không cần thiết và gây gián đoạn công việc của người dùng."
      },
      {
        "id": "m365-q32",
        "num": 32,
        "section": "Phần 7: Security & Compliance (Defender, DLP & Tuân thủ)",
        "questionEn": "[SOP 7.1 - Microsoft Defender Administration] While managing Microsoft Defender, which portal and initial actions should an administrator use to monitor security threats according to the SOP?",
        "questionVi": "[SOP 7.1 - Microsoft Defender Administration] Trong khi quản trị Microsoft Defender, quản trị viên nên sử dụng cổng thông tin nào và các hành động ban đầu nào để giám sát các mối đe dọa bảo mật theo SOP?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Defender Portal → Review Security Dashboard → Monitor Alerts and Incidents"
          },
          {
            "key": "B",
            "text": "Intune Admin Center → Endpoint Security → Antivirus"
          },
          {
            "key": "C",
            "text": "Microsoft Entra Admin Center → Security → Identity Protection"
          },
          {
            "key": "D",
            "text": "Microsoft Purview Portal → Data Loss Prevention → Alerts"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Microsoft Defender Portal → Review Security Dashboard → Monitor Alerts and Incidents",
        "explainRight": "Theo SOP 7.1, quy trình quản trị Defender bắt đầu tại Microsoft Defender Portal. Quản trị viên cần xem Dashboard bảo mật, sau đó theo dõi các Cảnh báo (Alerts) và Sự cố (Incidents) để xử lý kịp thời.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Intune tập trung vào quản lý thiết bị và triển khai chính sách, không phải là nơi chính để theo dõi các sự cố an ninh tổng hợp. C. Entra ID tập trung vào bảo mật danh tính, không phải là cổng tổng thể để giám sát Alerts/Incidents của Defender. D. Purview tập trung vào tuân thủ và rò rỉ dữ liệu, không phải là trung tâm giám sát an ninh chính của Defender."
      },
      {
        "id": "m365-q33",
        "num": 33,
        "section": "Phần 7: Security & Compliance (Defender, DLP & Tuân thủ)",
        "questionEn": "[SOP 7.2 - Security Policies] An administrator needs to protect the organization from malicious email attachments and phishing links. According to SOP 7.2, where are these policies configured?",
        "questionVi": "[SOP 7.2 - Security Policies] Quản trị viên cần bảo vệ tổ chức khỏi các tệp đính kèm email độc hại và liên kết lừa đảo. Theo SOP 7.2, các chính sách này được cấu hình ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Entra Admin Center → Protection → Conditional Access"
          },
          {
            "key": "B",
            "text": "Exchange Admin Center → Mailboxes → Security Settings"
          },
          {
            "key": "C",
            "text": "Microsoft Purview Portal → Information Protection → Labels"
          },
          {
            "key": "D",
            "text": "Microsoft Defender Portal → Policies & Rules"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Microsoft Defender Portal → Policies & Rules",
        "explainRight": "Theo SOP 7.2, các chính sách bảo mật như Anti-Spam, Anti-Malware và Anti-Phishing được cấu hình tại Microsoft Defender Portal > Policies & Rules.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Conditional Access kiểm soát quyền truy cập dựa trên điều kiện, không trực tiếp quét mã độc hoặc chống lừa đảo trong nội dung email. B. Mặc dù liên quan đến Email, nhưng các chính sách bảo mật hiện đại đã được chuyển từ Exchange Admin Center sang Defender Portal. C. Information Protection dùng để dán nhãn phân loại dữ liệu, không có chức năng ngăn chặn Anti-Spam hay Anti-Phishing."
      },
      {
        "id": "m365-q34",
        "num": 34,
        "section": "Phần 7: Security & Compliance (Defender, DLP & Tuân thủ)",
        "questionEn": "[SOP 7.3 - Data Loss Prevention (DLP)] You are tasked with preventing sensitive data from being shared externally via Teams and OneDrive. According to the SOP, which portal and sequence should you use?",
        "questionVi": "[SOP 7.3 - Data Loss Prevention (DLP)] Bạn được giao nhiệm vụ ngăn chặn dữ liệu nhạy cảm bị chia sẻ ra bên ngoài qua Teams và OneDrive. Theo SOP, bạn nên sử dụng cổng thông tin và trình tự nào?",
        "options": [
          {
            "key": "A",
            "text": "Teams Admin Center → Messaging Policies → Content Protection"
          },
          {
            "key": "B",
            "text": "Microsoft Entra Admin Center → External Identities → Cross-tenant access"
          },
          {
            "key": "C",
            "text": "Microsoft Defender Portal → Policies & Rules → DLP Policy"
          },
          {
            "key": "D",
            "text": "Microsoft Purview Portal → Data Loss Prevention → Create Policy → Select Locations"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Microsoft Purview Portal → Data Loss Prevention → Create Policy → Select Locations",
        "explainRight": "Theo SOP 7.4 (DLP), để ngăn chặn rò rỉ dữ liệu, bạn phải vào Microsoft Purview Portal > Data Loss Prevention > Tạo chính sách mới và chọn các vị trí (Locations) như Exchange, SharePoint, OneDrive, Teams.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Teams Admin Center không phải là nơi cấu hình chính sách DLP tổng thể cho nhiều nền tảng (OneDrive/Teams/Exchange). B. External Identities quản lý cách người dùng bên ngoài truy cập vào hệ thống, không quản lý việc ngăn chặn rò rỉ nội dung dữ liệu cụ thể. C. DLP hiện nay được quản lý tập trung tại Purview Portal, không phải Defender Portal."
      },
      {
        "id": "m365-q35",
        "num": 35,
        "section": "Phần 7: Security & Compliance (Defender, DLP & Tuân thủ)",
        "questionEn": "[SOP 7.4 - Audit Log Review] A security auditor requires a report of all file deletion activities by a specific user over the last 30 days. According to the SOP, how should you retrieve this information?",
        "questionVi": "[SOP 7.4 - Audit Log Review] Một kiểm toán viên bảo mật yêu cầu báo cáo về tất cả các hoạt động xóa tệp của một người dùng cụ thể trong 30 ngày qua. Theo SOP, bạn nên lấy thông tin này như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft 365 Admin Center → Reports → Usage"
          },
          {
            "key": "B",
            "text": "Microsoft Entra Admin Center → Monitoring → Sign-in logs"
          },
          {
            "key": "C",
            "text": "Microsoft Defender Portal → Hunting → Advanced Hunting"
          },
          {
            "key": "D",
            "text": "Microsoft Purview Portal → Audit → Search by User, Date Range, and Workload"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Microsoft Purview Portal → Audit → Search by User, Date Range, and Workload",
        "explainRight": "Theo SOP 7.4 (Audit Log), để truy xuất các hoạt động của người dùng, bạn truy cập Microsoft Purview Portal > Audit. Tại đây bạn có thể tìm kiếm theo Người dùng, Khoảng thời gian và Loại công việc (Workload).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Usage Reports chỉ cung cấp số lượng sử dụng tổng quát, không cung cấp chi tiết từng hành động (activity) của người dùng. B. Sign-in logs chỉ ghi lại lịch sử đăng nhập, không ghi lại các hành động cụ thể như xóa tệp. C. Advanced Hunting dùng để truy vấn các mối đe dọa an ninh phức tạp bằng KQL, không phải là quy trình tra cứu Audit Log chuẩn cho mục đích kiểm toán thông thường."
      },
      {
        "id": "m365-q36",
        "num": 36,
        "section": "Phần 7: Security & Compliance (Defender, DLP & Tuân thủ)",
        "questionEn": "[SOP 7.5 - Retention & Compliance Policies] Your organization must retain all email records for 7 years due to legal requirements. According to the SOP, where should this policy be configured?",
        "questionVi": "[SOP 7.5 - Retention & Compliance Policies] Tổ chức của bạn phải lưu giữ tất cả hồ sơ email trong 7 năm do yêu cầu pháp lý. Theo SOP, chính sách này nên được cấu hình ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Defender Portal → Policies & Rules → Archiving"
          },
          {
            "key": "B",
            "text": "Exchange Admin Center → Recipients → Mailboxes → Retention Policy"
          },
          {
            "key": "C",
            "text": "Microsoft Purview Portal → Data Lifecycle Management → Create a Retention Policy"
          },
          {
            "key": "D",
            "text": "Microsoft Entra Admin Center → Identity → Governance"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Microsoft Purview Portal → Data Lifecycle Management → Create a Retention Policy",
        "explainRight": "Theo SOP 7.5, để cấu hình lưu trữ dữ liệu, bạn vào Microsoft Purview Portal > Data Lifecycle Management > Create a Retention Policy, sau đó chọn vị trí và thời gian lưu trữ (7 năm).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Defender Portal không quản lý các chính sách lưu giữ dữ liệu dài hạn (Retention). B. Đây là cách quản lý Retention cũ trong Exchange; hiện nay Microsoft khuyến nghị quản lý tập trung tại Purview cho toàn bộ M365. D. Identity Governance tập trung vào vòng đời của danh tính và quyền truy cập, không quản lý vòng đời của dữ liệu (email/tệp tin)."
      },
      {
        "id": "m365-q37",
        "num": 37,
        "section": "Phần 7: Security & Compliance (Defender, DLP & Tuân thủ)",
        "questionEn": "[SOP 7.6 - eDiscovery] You need to perform a legal investigation by searching and exporting content from specific user mailboxes. According to the SOP, which portal and sequence of actions should you use to initiate this process?",
        "questionVi": "[SOP 7.6 - eDiscovery] Bạn cần thực hiện một cuộc điều tra pháp lý bằng cách tìm kiếm và xuất nội dung từ các hộp thư người dùng cụ thể. Theo SOP, bạn nên sử dụng cổng thông tin và trình tự hành động nào để bắt đầu quy trình này?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Purview Portal > Data loss prevention > Policies > Create case"
          },
          {
            "key": "B",
            "text": "Microsoft 365 Admin Center > Reports > Usage > Content Search"
          },
          {
            "key": "C",
            "text": "Microsoft Purview Portal > eDiscovery > Create a new case > Add custodians and data sources"
          },
          {
            "key": "D",
            "text": "Exchange Admin Center > Compliance management > In-place eDiscovery & Hold"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Microsoft Purview Portal > eDiscovery > Create a new case > Add custodians and data sources",
        "explainRight": "Theo SOP 7.6, quy trình chuẩn để thực hiện eDiscovery là: Truy cập Microsoft Purview Portal -> eDiscovery -> Tạo case mới -> Thêm người giám hộ (custodians) và nguồn dữ liệu -> Chạy tìm kiếm nội dung -> Xuất kết quả.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Data loss prevention (DLP) dùng để ngăn chặn rò rỉ dữ liệu, không phải công cụ chuyên dụng để tạo case điều tra và thu thập bằng chứng pháp lý. B. Mục Reports trong Microsoft 365 Admin Center chỉ dùng để xem báo cáo sử dụng, không có chức năng tạo case điều tra eDiscovery. D. Exchange Admin Center hiện đã chuyển các chức năng tuân thủ sang Purview; phương pháp In-place eDiscovery cũ không còn là quy trình chuẩn trong SOP này."
      },
      {
        "id": "m365-q38",
        "num": 38,
        "section": "Phần 8: Device Management - Intune (Quản trị Thiết bị Intune)",
        "questionEn": "[SOP 8.1 - Device Enrollment] An administrator needs to enroll new corporate devices into Microsoft Intune. What is the correct path in the Intune Admin Center to begin configuring enrollment methods?",
        "questionVi": "[SOP 8.1 - Device Enrollment] Quản trị viên cần đăng ký các thiết bị công ty mới vào Microsoft Intune. Đường dẫn chính xác trong Intune Admin Center để bắt đầu cấu hình các phương thức đăng ký là gì?",
        "options": [
          {
            "key": "A",
            "text": "Users > Active users > Device registration"
          },
          {
            "key": "B",
            "text": "Devices > Enrollment > Configure enrollment methods"
          },
          {
            "key": "C",
            "text": "Devices > All devices > Add devices"
          },
          {
            "key": "D",
            "text": "Endpoint security > Device enrollment > Methods"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Devices > Enrollment > Configure enrollment methods",
        "explainRight": "Dựa trên SOP 8.1, để quản trị thiết bị Intune, quy trình chuẩn là: Mở Microsoft Intune Admin Center -> Điều hướng đến Devices -> Chọn Enrollment -> Cấu hình các phương thức đăng ký (Enrollment methods).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Menu Users dùng để quản lý tài khoản người dùng, không phải nơi thiết lập hạ tầng đăng ký thiết bị. C. Menu All devices dùng để xem danh sách thiết bị đã đăng ký, không phải nơi cấu hình phương thức đăng ký ban đầu. D. Endpoint security tập trung vào các chính sách bảo mật như Antivirus/Firewall, không chứa menu cấu hình Enrollment chính."
      },
      {
        "id": "m365-q39",
        "num": 39,
        "section": "Phần 8: Device Management - Intune (Quản trị Thiết bị Intune)",
        "questionEn": "[SOP 8.2 - Compliance Policies] To ensure all managed devices meet specific security standards like requiring a password, which workflow should be followed in the Intune Admin Center?",
        "questionVi": "[SOP 8.2 - Compliance Policies] Để đảm bảo tất cả các thiết bị được quản lý đều đáp ứng các tiêu chuẩn bảo mật cụ thể như yêu cầu mật khẩu, quy trình nào sau đây nên được thực hiện trong Intune Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Endpoint security > Security baselines > Create profile"
          },
          {
            "key": "B",
            "text": "Devices > Compliance Policies > Create a policy > Configure requirements > Assign"
          },
          {
            "key": "C",
            "text": "Devices > Conditional Access > Compliance rules"
          },
          {
            "key": "D",
            "text": "Devices > Configuration Profiles > Create profile > Password policy"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Devices > Compliance Policies > Create a policy > Configure requirements > Assign",
        "explainRight": "Theo SOP 8.2, để thiết lập các yêu cầu tuân thủ (compliance requirements), quy trình là: Mở Intune Admin Center -> Devices -> Compliance Policies -> Tạo chính sách -> Cấu hình yêu cầu -> Gán cho người dùng/thiết bị.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Security baselines là các thiết lập bảo mật mẫu của Microsoft, không phải là quy trình tạo Compliance Policy theo SOP 8.2. C. Conditional Access là dịch vụ của Entra ID sử dụng trạng thái tuân thủ từ Intune, không phải nơi tạo ra chính sách tuân thủ thiết bị. D. Configuration Profiles dùng để cấu hình cài đặt thiết bị, nhưng Compliance Policies mới là nơi xác định thiết bị có 'đạt chuẩn' (compliant) để truy cập tài nguyên hay không."
      },
      {
        "id": "m365-q40",
        "num": 40,
        "section": "Phần 8: Device Management - Intune (Quản trị Thiết bị Intune)",
        "questionEn": "[SOP 8.3 - Configuration Profiles] You want to push specific Wi-Fi settings and restrictions to a group of Windows 11 devices. Which section of the Intune Admin Center should you use according to the SOP?",
        "questionVi": "[SOP 8.3 - Configuration Profiles] Bạn muốn đẩy các cài đặt Wi-Fi và hạn chế cụ thể cho một nhóm thiết bị Windows 11. Theo SOP, bạn nên sử dụng phần nào của Intune Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Apps > All apps > App configuration policies"
          },
          {
            "key": "B",
            "text": "Devices > Compliance policies > Create policy"
          },
          {
            "key": "C",
            "text": "Endpoint security > Firewall > Create policy"
          },
          {
            "key": "D",
            "text": "Devices > Configuration Profiles > Create a profile"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Devices > Configuration Profiles > Create a profile",
        "explainRight": "Theo SOP 8.3, để cấu hình các thiết lập thiết bị (device settings) như Wi-Fi, VPN hoặc hạn chế tính năng, quy trình là: Intune Admin Center -> Devices -> Configuration Profiles -> Tạo profile -> Cấu hình cài đặt -> Gán profile.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. App configuration policies dùng để cấu hình cài đặt bên trong ứng dụng, không phải cài đặt hệ thống như Wi-Fi. B. Compliance policies dùng để kiểm tra xem thiết bị có đáp ứng tiêu chuẩn không, không dùng để đẩy (push) cấu hình cài đặt. C. Firewall policies chỉ chuyên biệt cho các quy tắc tường lửa, không bao quát các cấu hình thiết bị chung."
      },
      {
        "id": "m365-q41",
        "num": 41,
        "section": "Phần 8: Device Management - Intune (Quản trị Thiết bị Intune)",
        "questionEn": "[SOP 8.4 - Application Deployment] What is the correct sequence to deploy a new productivity application to users via Microsoft Intune?",
        "questionVi": "[SOP 8.4 - Application Deployment] Trình tự chính xác để triển khai một ứng dụng làm việc mới cho người dùng thông qua Microsoft Intune là gì?",
        "options": [
          {
            "key": "A",
            "text": "Endpoint security > Application control > Deploy"
          },
          {
            "key": "B",
            "text": "Microsoft 365 Admin Center > Settings > Integrated apps"
          },
          {
            "key": "C",
            "text": "Devices > Configuration Profiles > Add App"
          },
          {
            "key": "D",
            "text": "Apps > All Apps > Add application package > Configure settings > Assign"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Apps > All Apps > Add application package > Configure settings > Assign",
        "explainRight": "Theo SOP 8.4, quy trình triển khai ứng dụng là: Mở Intune Admin Center -> Apps -> All Apps -> Thêm gói ứng dụng -> Cấu hình cài đặt triển khai -> Gán cho người dùng/thiết bị -> Theo dõi trạng thái.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Application control dùng để kiểm soát quyền thực thi ứng dụng (chặn/cho phép), không phải công cụ triển khai ứng dụng. B. Integrated apps trong M365 Admin Center chủ yếu dành cho các ứng dụng web/add-ins, không phải triển khai phần mềm (Win32, MSI) qua Intune. C. Configuration Profiles dùng để cấu hình hệ điều hành, không phải là nơi chính để tải lên và triển khai gói cài đặt ứng dụng."
      },
      {
        "id": "m365-q42",
        "num": 42,
        "section": "Phần 8: Device Management - Intune (Quản trị Thiết bị Intune)",
        "questionEn": "[SOP 8.5 - Endpoint Security] An organization needs to enable BitLocker Disk Encryption on all managed laptops. Where should this be configured in the Intune Admin Center per the SOP?",
        "questionVi": "[SOP 8.5 - Endpoint Security] Một tổ chức cần bật mã hóa đĩa BitLocker trên tất cả các máy tính xách tay được quản lý. Theo SOP, điều này nên được cấu hình ở đâu trong Intune Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Reports > Endpoint security > Encryption status"
          },
          {
            "key": "B",
            "text": "Devices > Compliance Policies > Encryption requirement"
          },
          {
            "key": "C",
            "text": "Endpoint Security > Disk Encryption > Create policy"
          },
          {
            "key": "D",
            "text": "Devices > Configuration Profiles > Endpoint protection"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Endpoint Security > Disk Encryption > Create policy",
        "explainRight": "Theo SOP 8.5, các thiết lập bảo mật chuyên sâu như Antivirus, Firewall và Disk Encryption (BitLocker) được quản lý tại: Intune Admin Center -> Endpoint Security -> Chọn loại chính sách tương ứng (Disk Encryption) -> Cấu hình và Gán.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Reports chỉ dùng để xem trạng thái, không có chức năng cấu hình hay triển khai chính sách mã hóa. B. Compliance Policies chỉ kiểm tra xem máy đã bật mã hóa chưa, chứ không có nhiệm vụ thực thi việc bật mã hóa. D. Mặc dù Configuration Profiles có thể cấu hình mã hóa, nhưng SOP 8.5 chỉ định rõ việc sử dụng menu Endpoint Security cho các tác vụ bảo mật chuyên biệt."
      },
      {
        "id": "m365-q43",
        "num": 43,
        "section": "Phần 9: Licensing & Billing (Giấy phép & Thanh toán)",
        "questionEn": "[SOP 9.1 - Subscription Management] You need to cancel an unused Microsoft 365 subscription to reduce costs. According to the SOP, where is this managed?",
        "questionVi": "[SOP 9.1 - Subscription Management] Bạn cần hủy một gói đăng ký Microsoft 365 không sử dụng để giảm chi phí. Theo SOP, việc này được quản lý ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft 365 Admin Center > Billing > Your Products"
          },
          {
            "key": "B",
            "text": "Microsoft Purview Portal > Billing > Subscriptions"
          },
          {
            "key": "C",
            "text": "Intune Admin Center > Tenant administration > Licenses"
          },
          {
            "key": "D",
            "text": "Microsoft 365 Admin Center > Users > Active Users > Licenses"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Microsoft 365 Admin Center > Billing > Your Products",
        "explainRight": "Theo SOP 9.1, quy trình quản lý gói đăng ký (Subscription Management) là: Mở Microsoft 365 Admin Center -> Billing -> Your Products -> Xem xét các gói hiện có -> Thực hiện mua, gia hạn, nâng cấp hoặc hủy bỏ.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Microsoft Purview Portal không quản lý các vấn đề về thanh toán và gói đăng ký (Billing). C. Intune Admin Center chỉ hiển thị trạng thái license liên quan đến quản lý thiết bị, không phải nơi thực hiện giao dịch hủy gói đăng ký. D. Menu Users > Active Users dùng để gán license cho cá nhân, không có chức năng hủy gói đăng ký tổng của tổ chức."
      },
      {
        "id": "m365-q44",
        "num": 44,
        "section": "Phần 9: Licensing & Billing (Giấy phép & Thanh toán)",
        "questionEn": "[SOP 9.2 - License Allocation] A new employee has joined the company. What is the standard SOP procedure to grant them a Microsoft 365 Business Premium license?",
        "questionVi": "[SOP 9.2 - License Allocation] Một nhân viên mới vừa gia nhập công ty. Quy trình SOP chuẩn để cấp giấy phép Microsoft 365 Business Premium cho họ là gì?",
        "options": [
          {
            "key": "A",
            "text": "Entra ID > Groups > All groups > License assignment"
          },
          {
            "key": "B",
            "text": "M365 Admin Center > Users > Active Users > Select user > Licenses and Apps > Assign license"
          },
          {
            "key": "C",
            "text": "M365 Admin Center > Billing > Licenses > Assign to user"
          },
          {
            "key": "D",
            "text": "Intune Admin Center > Users > All users > Assign license"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "M365 Admin Center > Users > Active Users > Select user > Licenses and Apps > Assign license",
        "explainRight": "Theo SOP 9.2, quy trình cấp phát license cho người dùng là: Mở Microsoft 365 Admin Center -> Users -> Active Users -> Chọn tài khoản người dùng -> Mở tab Licenses and Apps -> Gán license tương ứng và Lưu.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Gán license qua Group (Entra ID) là một phương pháp quản trị nâng cao, nhưng SOP 9.2 quy định thực hiện trực tiếp trên Active Users. C. Menu Billing > Licenses dùng để xem tổng quan số lượng license, không phải là luồng thao tác tối ưu để gán cho một người dùng cụ thể theo SOP. D. Intune Admin Center không phải là nơi chính thống để quản lý việc gán license Microsoft 365 cho người dùng."
      },
      {
        "id": "m365-q45",
        "num": 45,
        "section": "Phần 9: Licensing & Billing (Giấy phép & Thanh toán)",
        "questionEn": "[SOP 9.3 - License Optimization] To optimize costs, you need to identify and remove licenses from users who have not logged in for 90 days. Which path should you follow according to the SOP?",
        "questionVi": "[SOP 9.3 - License Optimization] Để tối ưu hóa chi phí, bạn cần xác định và thu hồi license từ những người dùng không đăng nhập trong 90 ngày. Bạn nên thực hiện theo đường dẫn nào theo SOP?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft 365 Admin Center > Billing > Licenses > Review consumption reports"
          },
          {
            "key": "B",
            "text": "Microsoft Purview Portal > Audit > Search"
          },
          {
            "key": "C",
            "text": "Microsoft 365 Admin Center > Reports > Usage > Active Users"
          },
          {
            "key": "D",
            "text": "Intune Admin Center > Devices > Compliance status"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Microsoft 365 Admin Center > Billing > Licenses > Review consumption reports",
        "explainRight": "Theo SOP 9.3 về tối ưu hóa license: Mở Microsoft 365 Admin Center -> Billing -> Licenses -> Xem báo cáo tiêu thụ (consumption reports) -> Xác định license không sử dụng -> Thu hồi hoặc tái cấp phát.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Audit Search dùng để tra cứu hành động của người dùng, không phải công cụ chuyên dụng để tối ưu hóa và thu hồi license. C. Báo cáo Usage > Active Users cho biết mức độ hoạt động nhưng không nằm trong quy trình quản lý license trực tiếp tại menu Billing theo SOP 9.3. D. Compliance status trong Intune chỉ cho biết trạng thái thiết bị, không liên quan đến việc tối ưu hóa chi phí license người dùng."
      },
      {
        "id": "m365-q46",
        "num": 46,
        "section": "Phần 9: Licensing & Billing (Giấy phép & Thanh toán)",
        "questionEn": "[SOP 9.4 - Billing & Invoice Review] An administrator needs to verify the subscription charges and download the invoice for the previous month for audit purposes. Which path in the Microsoft 365 Admin Center should they follow?",
        "questionVi": "[SOP 9.4 - Billing & Invoice Review] Quản trị viên cần xác minh các khoản phí đăng ký và tải xuống hóa đơn của tháng trước để phục vụ mục đích kiểm toán. Họ nên thực hiện theo đường dẫn nào trong Microsoft 365 Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Settings > Org settings"
          },
          {
            "key": "B",
            "text": "Billing > Bills & Payments"
          },
          {
            "key": "C",
            "text": "Billing > Licenses"
          },
          {
            "key": "D",
            "text": "Reports > Usage"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Billing > Bills & Payments",
        "explainRight": "Theo quy trình SOP 9.4, để xem xét hóa đơn và lịch sử thanh toán, quản trị viên cần truy cập Microsoft 365 Admin Center, sau đó vào mục Billing (Thanh toán) và chọn Bills & Payments (Hóa đơn & Thanh toán). Tại đây, bạn có thể kiểm tra chi phí, tải hóa đơn và báo cáo sai sót nếu có.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Mục này dùng để cấu hình các thiết lập chung cho tổ chức, không phải nơi quản lý các giao dịch thanh toán. C. Mục này dùng để quản lý việc gán giấy phép cho người dùng, không chứa thông tin chi tiết về hóa đơn thanh toán. D. Mục này cung cấp báo cáo về mức độ sử dụng dịch vụ của người dùng, không liên quan đến tài chính và hóa đơn."
      },
      {
        "id": "m365-q47",
        "num": 47,
        "section": "Phần 10: Monitoring & Reporting (Giám sát & Báo cáo Hệ thống)",
        "questionEn": "[SOP 10.1 - Service Health Monitoring] A company is experiencing issues with Microsoft Teams. Where should the administrator go to check for current service outages and advisories within the Microsoft 365 Admin Center?",
        "questionVi": "[SOP 10.1 - Service Health Monitoring] Công ty đang gặp sự cố với Microsoft Teams. Quản trị viên nên truy cập vào đâu trong Microsoft 365 Admin Center để kiểm tra các sự cố dịch vụ và thông báo hiện tại?",
        "options": [
          {
            "key": "A",
            "text": "Health > Service Health"
          },
          {
            "key": "B",
            "text": "Support > Help & support"
          },
          {
            "key": "C",
            "text": "Settings > Services"
          },
          {
            "key": "D",
            "text": "Reports > Usage"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Health > Service Health",
        "explainRight": "Theo SOP 10.1, để giám sát sức khỏe dịch vụ, quản trị viên truy cập Microsoft 365 Admin Center > Health > Service Health. Đây là nơi tập trung các thông tin về trạng thái dịch vụ, các sự cố (incidents) và các khuyến cáo (advisories) đang diễn ra.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Mục này dùng để tạo yêu cầu hỗ trợ mới với Microsoft, không phải bảng điều khiển theo dõi trạng thái dịch vụ thời gian thực. C. Mục này dùng để bật/tắt các tính năng dịch vụ cụ thể, không cung cấp thông tin về tình trạng gián đoạn dịch vụ. D. Báo cáo Usage chỉ hiển thị tần suất sử dụng của người dùng, không phản ánh tình trạng lỗi hệ thống của Microsoft."
      },
      {
        "id": "m365-q48",
        "num": 48,
        "section": "Phần 10: Monitoring & Reporting (Giám sát & Báo cáo Hệ thống)",
        "questionEn": "[SOP 10.2 - Usage Reports] To analyze user activity and adoption metrics for SharePoint Online over the last 30 days, which section of the Admin Center should be utilized?",
        "questionVi": "[SOP 10.2 - Usage Reports] Để phân tích hoạt động của người dùng và các chỉ số áp dụng (adoption metrics) cho SharePoint Online trong 30 ngày qua, nên sử dụng phần nào trong Admin Center?",
        "options": [
          {
            "key": "A",
            "text": "Health > Service Health"
          },
          {
            "key": "B",
            "text": "Security > Alerts"
          },
          {
            "key": "C",
            "text": "Reports > Usage"
          },
          {
            "key": "D",
            "text": "Billing > Licenses"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Reports > Usage",
        "explainRight": "Dựa trên SOP 10.2, để xem báo cáo sử dụng, quản trị viên vào Reports > Usage. Tại đây, bạn có thể chọn các workload cụ thể (như SharePoint, Teams) để xem chỉ số hoạt động, xuất báo cáo và chia sẻ với ban quản lý.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Service Health dùng để theo dõi lỗi hệ thống từ phía Microsoft, không cung cấp dữ liệu về hành vi sử dụng của người dùng. B. Security Alerts tập trung vào các cảnh báo bảo mật và đe dọa, không phải là công cụ đo lường mức độ áp dụng dịch vụ. D. Billing Licenses chỉ cho biết số lượng giấy phép đã gán, không cho biết người dùng có thực sự sử dụng dịch vụ đó hay không."
      },
      {
        "id": "m365-q49",
        "num": 49,
        "section": "Phần 10: Monitoring & Reporting (Giám sát & Báo cáo Hệ thống)",
        "questionEn": "[SOP 10.3 - Security Reports] Where should a security administrator go to analyze security alerts, incidents, and track security trends according to the standard operating procedure?",
        "questionVi": "[SOP 10.3 - Security Reports] Quản trị viên bảo mật nên truy cập vào đâu để phân tích các cảnh báo bảo mật, sự cố và theo dõi các xu hướng bảo mật theo quy trình vận hành tiêu chuẩn?",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Entra ID Portal"
          },
          {
            "key": "B",
            "text": "Exchange Admin Center"
          },
          {
            "key": "C",
            "text": "Microsoft Defender Portal"
          },
          {
            "key": "D",
            "text": "Compliance Admin Center"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Microsoft Defender Portal",
        "explainRight": "Theo SOP 10.3, quy trình chuẩn để xem báo cáo bảo mật là mở Microsoft Defender Portal. Tại đây, quản trị viên sẽ xem xét dashboard bảo mật, phân tích các cảnh báo/sự cố và theo dõi các khuyến nghị bảo mật.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Entra ID Portal tập trung vào quản lý danh tính và truy cập, không phải là trung tâm chính để phân tích xu hướng bảo mật tổng thể. B. Exchange Admin Center chỉ giới hạn trong quản trị email, không bao quát toàn bộ các xu hướng bảo mật của hệ sinh thái M365. D. Compliance Admin Center tập trung vào quản trị dữ liệu, lưu vết và tuân thủ pháp lý thay vì xử lý các sự cố bảo mật chủ động."
      },
      {
        "id": "m365-q50",
        "num": 50,
        "section": "Phần 10: Monitoring & Reporting (Giám sát & Báo cáo Hệ thống)",
        "questionEn": "[SOP 10.4 - License Reports] An administrator needs to identify optimization opportunities by reviewing assigned versus available licenses. Which path provides this information?",
        "questionVi": "[SOP 10.4 - License Reports] Quản trị viên cần xác định các cơ hội tối ưu hóa bằng cách xem xét số lượng giấy phép đã gán so với số lượng hiện có. Đường dẫn nào cung cấp thông tin này?",
        "options": [
          {
            "key": "A",
            "text": "Billing > Licenses"
          },
          {
            "key": "B",
            "text": "Reports > Usage"
          },
          {
            "key": "C",
            "text": "Settings > Org settings"
          },
          {
            "key": "D",
            "text": "Users > Active users"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Billing > Licenses",
        "explainRight": "Theo SOP 10.4, để quản lý và tối ưu hóa giấy phép, quản trị viên truy cập Billing > Licenses. Quy trình bao gồm việc xem xét số lượng license đã gán/còn trống và xuất báo cáo để xác định các license không được sử dụng hiệu quả.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Usage Reports cho biết người dùng có dùng app hay không, nhưng không trực tiếp quản lý số lượng license đã mua và còn trống. C. Org settings chứa các cấu hình dịch vụ chung, không chứa dữ liệu chi tiết về quản lý giấy phép và thanh toán. D. Active users cho thấy danh sách người dùng nhưng không cung cấp cái nhìn tổng quan về kho giấy phép (pool) và số lượng còn dư để tối ưu hóa."
      },
      {
        "id": "m365-q51",
        "num": 51,
        "section": "Phần 10: Monitoring & Reporting (Giám sát & Báo cáo Hệ thống)",
        "questionEn": "[SOP 10.5 - Performance Monitoring] When monitoring system performance, what is the correct sequence of actions after reviewing performance metrics in the Service Health Dashboard?",
        "questionVi": "[SOP 10.5 - Performance Monitoring] Khi giám sát hiệu suất hệ thống, trình tự hành động đúng sau khi xem xét các chỉ số hiệu suất trong Service Health Dashboard là gì?",
        "options": [
          {
            "key": "A",
            "text": "Purchase more licenses, assign users, and close the dashboard"
          },
          {
            "key": "B",
            "text": "Analyze recurring issues, document trends, and escalate critical findings"
          },
          {
            "key": "C",
            "text": "Open a support ticket, wait for Microsoft, and notify users"
          },
          {
            "key": "D",
            "text": "Reset user passwords, clear cache, and restart services"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Analyze recurring issues, document trends, and escalate critical findings",
        "explainRight": "Dựa trên SOP 10.5, quy trình giám sát hiệu suất bao gồm: 1. Mở Service Health Dashboard; 2. Xem chỉ số hiệu suất; 3. Phân tích các vấn đề lặp lại; 4. Ghi lại xu hướng và khuyến nghị; 5. Leo thang các phát hiện nghiêm trọng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Việc mua thêm giấy phép không liên quan đến quy trình giám sát và xử lý vấn đề hiệu suất hệ thống. C. Đây là các bước phản ứng thụ động, không tuân theo quy trình phân tích và ghi lại xu hướng (trends) theo SOP 10.5. D. Đây là các bước xử lý sự cố kỹ thuật cụ thể cho người dùng, không phải quy trình giám sát hiệu suất hệ thống tổng thể."
      },
      {
        "id": "m365-q52",
        "num": 52,
        "section": "Phần 11: Incident & Support Management (Xử lý Sự cố & ITSM)",
        "questionEn": "[SOP 11.1 - Ticket Handling] According to the Ticket Handling SOP, what is the final mandatory step before closing an incident or service request?",
        "questionVi": "[SOP 11.1 - Ticket Handling] Theo SOP Xử lý Ticket, bước bắt buộc cuối cùng trước khi đóng một sự cố hoặc yêu cầu dịch vụ là gì?",
        "options": [
          {
            "key": "A",
            "text": "Update the ticket status to 'Resolved'"
          },
          {
            "key": "B",
            "text": "Document the troubleshooting steps"
          },
          {
            "key": "C",
            "text": "Assign ownership to another technician"
          },
          {
            "key": "D",
            "text": "Obtain user confirmation before closure"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Obtain user confirmation before closure",
        "explainRight": "Theo SOP 11.1, quy trình xử lý ticket bao gồm các bước: Tiếp nhận, Phân loại, Gán quyền sở hữu, Xử lý sự cố, Cập nhật trạng thái và cuối cùng là 'Obtain user confirmation before closure' (Lấy xác nhận của người dùng trước khi đóng).",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Cập nhật trạng thái là bước cần thiết nhưng chưa phải là bước cuối cùng; cần có sự xác nhận từ người dùng để đảm bảo vấn đề đã thực sự được giải quyết. B. Ghi lại các bước xử lý là một phần của quá trình giải quyết, nhưng không thay thế được bước xác nhận từ phía người dùng. C. Gán quyền sở hữu là bước ở giai đoạn đầu của quy trình, không phải bước kết thúc."
      },
      {
        "id": "m365-q53",
        "num": 53,
        "section": "Phần 11: Incident & Support Management (Xử lý Sự cố & ITSM)",
        "questionEn": "[SOP 11.2 - Service Requests] What is a critical validation step in the Service Request SOP before performing any requested configuration changes?",
        "questionVi": "[SOP 11.2 - Service Requests] Bước xác thực quan trọng trong SOP Yêu cầu Dịch vụ trước khi thực hiện bất kỳ thay đổi cấu hình nào được yêu cầu là gì?",
        "options": [
          {
            "key": "A",
            "text": "Export the usage report"
          },
          {
            "key": "B",
            "text": "Reset the user's MFA"
          },
          {
            "key": "C",
            "text": "Validate approvals"
          },
          {
            "key": "D",
            "text": "Escalate to Microsoft Support"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Validate approvals",
        "explainRight": "Theo SOP 11.2 về Service Requests, sau khi xem xét chi tiết yêu cầu, bước quan trọng tiếp theo là 'Validate approvals' (Xác thực các phê duyệt). Điều này đảm bảo mọi thay đổi cấu hình đều được cấp phép đúng thẩm quyền trước khi thực hiện.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Xuất báo cáo sử dụng không liên quan đến việc xác thực tính hợp lệ của một yêu cầu thay đổi cấu hình. B. Việc reset MFA chỉ thực hiện nếu đó là nội dung yêu cầu cụ thể, không phải là bước xác thực quy trình chung. D. Leo thang lên Microsoft chỉ thực hiện khi không thể tự xử lý, không phải là bước xác thực trong quy trình tiếp nhận yêu cầu."
      },
      {
        "id": "m365-q54",
        "num": 54,
        "section": "Phần 11: Incident & Support Management (Xử lý Sự cố & ITSM)",
        "questionEn": "[SOP 11.3 - Escalation Management] When an issue remains unresolved at the initial support level, what is the first step in the Escalation Management process?",
        "questionVi": "[SOP 11.3 - Escalation Management] Khi một vấn đề không được giải quyết ở cấp độ hỗ trợ ban đầu, bước đầu tiên trong quy trình Quản lý Leo thang là gì?",
        "options": [
          {
            "key": "A",
            "text": "Close the ticket and open a new one"
          },
          {
            "key": "B",
            "text": "Contact the CEO immediately"
          },
          {
            "key": "C",
            "text": "Identify unresolved issues"
          },
          {
            "key": "D",
            "text": "Provide troubleshooting details to the user"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Identify unresolved issues",
        "explainRight": "Dựa trên SOP 11.3, quy trình Quản lý Leo thang bắt đầu bằng việc 'Identify unresolved issues' (Xác định các vấn đề chưa được giải quyết). Sau đó mới tiến hành leo thang lên cấp độ hỗ trợ phù hợp và cung cấp chi tiết kỹ thuật.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Đóng ticket cũ và mở ticket mới làm mất dấu vết lịch sử xử lý và vi phạm quy trình quản lý sự cố. B. Việc liên hệ với CEO không phải là một bước trong quy trình kỹ thuật chuẩn trừ khi có quy định đặc biệt về truyền thông khủng hoảng. D. Cung cấp chi tiết xử lý cho người dùng là bước giao tiếp, không phải là bước khởi đầu của quy trình leo thang kỹ thuật nội bộ."
      },
      {
        "id": "m365-q55",
        "num": 55,
        "section": "Phần 11: Incident & Support Management (Xử lý Sự cố & ITSM)",
        "questionEn": "[SOP 11.4 - Root Cause Analysis (RCA)] Following a major service outage, you are tasked with performing a Root Cause Analysis (RCA) according to the standard operating procedure. What is the final step required before implementing preventive measures?",
        "questionVi": "[SOP 11.4 - Root Cause Analysis (RCA)] Sau một sự cố gián đoạn dịch vụ nghiêm trọng, bạn được giao nhiệm vụ thực hiện Phân tích nguyên nhân gốc rễ (RCA) theo quy trình chuẩn. Bước cuối cùng cần thực hiện trước khi triển khai các biện pháp phòng ngừa là gì?",
        "options": [
          {
            "key": "A",
            "text": "Identify the root cause"
          },
          {
            "key": "B",
            "text": "Review incident history"
          },
          {
            "key": "C",
            "text": "Obtain management approval"
          },
          {
            "key": "D",
            "text": "Document impact and findings"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Obtain management approval",
        "explainRight": "Theo quy trình SOP 11.4, sau khi xác định nguyên nhân và đề xuất hành động khắc phục, quản trị viên phải 'Obtain management approval' (Xin phê duyệt từ ban quản lý) trước khi tiến hành triển khai các biện pháp ngăn ngừa thực tế.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Đây là bước thứ 2, là nền tảng để lập tài liệu nhưng chưa phải bước cuối trước khi triển khai biện pháp phòng ngừa. B. Đây là bước khởi đầu (bước 1) để hiểu bối cảnh sự cố, không phải bước phê duyệt cuối cùng. D. Đây là bước thứ 3 trong quy trình, thực hiện trước khi xác định hành động khắc phục và xin phê duyệt."
      },
      {
        "id": "m365-q56",
        "num": 56,
        "section": "Phần 11: Incident & Support Management (Xử lý Sự cố & ITSM)",
        "questionEn": "[SOP 11.5 - Problem Management] When managing recurring incidents that suggest a deeper systemic issue, which step should be performed immediately after investigating the underlying causes to ensure formal tracking?",
        "questionVi": "[SOP 11.5 - Problem Management] Khi quản lý các sự cố lặp đi lặp lại có dấu hiệu của vấn đề hệ thống, bước nào nên được thực hiện ngay sau khi điều tra nguyên nhân gốc rễ để đảm bảo việc theo dõi chính thức?",
        "options": [
          {
            "key": "A",
            "text": "Identify recurring incidents"
          },
          {
            "key": "B",
            "text": "Create problem records"
          },
          {
            "key": "C",
            "text": "Implement permanent fixes"
          },
          {
            "key": "D",
            "text": "Monitor effectiveness of solutions"
          }
        ],
        "correctKey": "B",
        "correctAnswer": "Create problem records",
        "explainRight": "Dựa trên SOP 11.5 về Problem Management, sau khi điều tra nguyên nhân (Investigate underlying causes), bước quan trọng để quản lý vòng đời sự cố là 'Create problem records' (Tạo hồ sơ vấn đề) trước khi áp dụng các bản sửa lỗi vĩnh viễn.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Đây là bước nhận diện đầu tiên để bắt đầu quy trình quản lý vấn đề. C. Việc triển khai bản sửa lỗi vĩnh viễn chỉ thực hiện sau khi đã có hồ sơ vấn đề và phương án xử lý. D. Đây là bước cuối cùng trong quy trình để đánh giá kết quả, không phải bước ghi nhận ban đầu."
      },
      {
        "id": "m365-q57",
        "num": 57,
        "section": "Phần 12: Tenant & Global Administration (Quản trị Tenant & Toàn cục)",
        "questionEn": "[SOP 12.1 - Domain Management] A company has purchased a new vanity domain. Which path in the Microsoft 365 Admin Center should an administrator follow to begin the verification process and validate mail flow?",
        "questionVi": "[SOP 12.1 - Domain Management] Một công ty vừa mua một tên miền mới. Đường dẫn nào trong Microsoft 365 Admin Center mà quản trị viên nên tuân theo để bắt đầu quá trình xác minh và kiểm tra luồng thư?",
        "options": [
          {
            "key": "A",
            "text": "Settings > Domains"
          },
          {
            "key": "B",
            "text": "Setup > Guided setup"
          },
          {
            "key": "C",
            "text": "Billing > Your products"
          },
          {
            "key": "D",
            "text": "Settings > Org settings"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Settings > Domains",
        "explainRight": "Theo SOP 12.1, quy trình quản lý tên miền bắt đầu tại Microsoft 365 Admin Center > Settings > Domains. Tại đây, quản trị viên thực hiện thêm tên miền, xác minh bản ghi DNS và kiểm tra mail flow.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Guided setup là trình hướng dẫn thiết lập chung, không phải menu chuyên biệt để quản lý và xác minh DNS cho tên miền. C. Billing chỉ dùng để quản lý giấy phép và thanh toán, không có chức năng xác minh tên miền. D. Org settings dùng để cấu hình các dịch vụ và chính sách toàn tổ chức, không chứa phần quản lý bản ghi DNS tên miền."
      },
      {
        "id": "m365-q58",
        "num": 58,
        "section": "Phần 12: Tenant & Global Administration (Quản trị Tenant & Toàn cục)",
        "questionEn": "[SOP 12.2 - Tenant Configuration] You need to modify tenant-wide service preferences for your organization. According to the SOP, where should these configurations be reviewed and saved?",
        "questionVi": "[SOP 12.2 - Tenant Configuration] Bạn cần sửa đổi các tùy chọn dịch vụ trên toàn bộ tenant cho tổ chức. Theo SOP, các cấu hình này nên được xem xét và lưu ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Settings > Org Settings"
          },
          {
            "key": "B",
            "text": "Settings > Search & intelligence"
          },
          {
            "key": "C",
            "text": "Reports > Usage"
          },
          {
            "key": "D",
            "text": "Setup > Domains"
          }
        ],
        "correctKey": "A",
        "correctAnswer": "Settings > Org Settings",
        "explainRight": "SOP 12.2 quy định việc cấu hình Tenant (Tenant Configuration) được thực hiện tại Microsoft 365 Admin Center > Settings > Org Settings. Đây là nơi tập trung các thiết lập có hiệu lực trên toàn bộ tổ chức.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "B. Search & intelligence chỉ tập trung vào cấu hình tìm kiếm, không bao quát toàn bộ tùy chọn dịch vụ của tenant. C. Reports > Usage dùng để xem báo cáo sử dụng, không có chức năng thay đổi cấu hình hệ thống. D. Domains chỉ dùng để quản lý tên miền, không dùng để cấu hình các tùy chọn dịch vụ (service preferences) của tenant."
      },
      {
        "id": "m365-q59",
        "num": 59,
        "section": "Phần 12: Tenant & Global Administration (Quản trị Tenant & Toàn cục)",
        "questionEn": "[SOP 12.3 - Administrative Roles] When assigning a new Global Administrator, what is the final step in the Administrative Roles procedure to ensure the assignment was successful?",
        "questionVi": "[SOP 12.3 - Administrative Roles] Khi chỉ định một Quản trị viên toàn cầu (Global Administrator) mới, bước cuối cùng trong quy trình Vai trò quản trị để đảm bảo việc chỉ định thành công là gì?",
        "options": [
          {
            "key": "A",
            "text": "Review permissions"
          },
          {
            "key": "B",
            "text": "Select the appropriate administrator role"
          },
          {
            "key": "C",
            "text": "Save changes"
          },
          {
            "key": "D",
            "text": "Verify role assignment"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Verify role assignment",
        "explainRight": "Theo SOP 12.3, sau khi chọn vai trò, gán người dùng và lưu thay đổi (Save changes), quản trị viên phải thực hiện bước cuối cùng là 'Verify role assignment' (Xác minh việc gán vai trò) để đảm bảo quyền hạn đã được áp dụng đúng.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Review permissions là bước kiểm tra trước khi lưu, không phải bước xác nhận kết quả cuối cùng. B. Đây là bước khởi đầu của quy trình gán quyền. C. Save changes là bước thực thi kỹ thuật, cần thêm bước xác minh sau đó để đảm bảo tính chính xác."
      },
      {
        "id": "m365-q60",
        "num": 60,
        "section": "Phần 12: Tenant & Global Administration (Quản trị Tenant & Toàn cục)",
        "questionEn": "[SOP 12.4 - Organization Settings] An administrator needs to configure 'Release Preferences' to control how new Microsoft 365 features are rolled out. Which section of the Admin Center contains this setting according to the SOP?",
        "questionVi": "[SOP 12.4 - Organization Settings] Quản trị viên cần cấu hình 'Release Preferences' để kiểm soát cách các tính năng Microsoft 365 mới được triển khai. Theo SOP, phần nào trong Admin Center chứa thiết lập này?",
        "options": [
          {
            "key": "A",
            "text": "User Settings"
          },
          {
            "key": "B",
            "text": "Billing Accounts"
          },
          {
            "key": "C",
            "text": "Org Settings"
          },
          {
            "key": "D",
            "text": "Security & Privacy"
          }
        ],
        "correctKey": "C",
        "correctAnswer": "Org Settings",
        "explainRight": "SOP 12.4 xác định rằng 'Release Preferences' cùng với Organization Profile và Security Defaults nằm trong mục Microsoft 365 Admin Center > Settings > Org Settings.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. User Settings tập trung vào cấu hình cá nhân của người dùng, không chứa tùy chọn phát hành tính năng cho toàn tổ chức. B. Billing Accounts chỉ liên quan đến tài chính và hóa đơn. D. Security & Privacy là một tab nhỏ bên trong Org Settings hoặc menu riêng, nhưng SOP chỉ định đích danh Org Settings là nơi quản lý Release Preferences."
      },
      {
        "id": "m365-q61",
        "num": 61,
        "section": "Phần 12: Tenant & Global Administration (Quản trị Tenant & Toàn cục)",
        "questionEn": "[SOP 12.5 - Service Configuration] After configuring service-specific settings and applying organizational standards, what must an administrator do to ensure the configuration meets end-user requirements?",
        "questionVi": "[SOP 12.5 - Service Configuration] Sau khi cấu hình các thiết lập đặc thù cho dịch vụ và áp dụng các tiêu chuẩn của tổ chức, quản trị viên phải làm gì để đảm bảo cấu hình đáp ứng yêu cầu của người dùng cuối?",
        "options": [
          {
            "key": "A",
            "text": "Document configuration changes"
          },
          {
            "key": "B",
            "text": "Review Microsoft 365 services"
          },
          {
            "key": "C",
            "text": "Reset user passwords"
          },
          {
            "key": "D",
            "text": "Validate user experience"
          }
        ],
        "correctKey": "D",
        "correctAnswer": "Validate user experience",
        "explainRight": "Theo quy trình SOP 12.5 về Service Configuration, sau khi áp dụng các tiêu chuẩn (Apply organizational standards), bước tiếp theo là 'Validate user experience' (Xác thực trải nghiệm người dùng) để đảm bảo các thay đổi không gây gián đoạn hoặc sai lệch nhu cầu.",
        "explainWrongLabel": "Vì sao các đáp án còn lại sai",
        "explainWrong": "A. Document configuration changes là bước cuối cùng sau khi đã xác thực thành công. B. Review Microsoft 365 services là bước đầu tiên để khảo sát dịch vụ. C. Reset user passwords không thuộc quy trình cấu hình dịch vụ chuẩn trừ khi có sự cố về truy cập."
      }
    ]
  }
];
