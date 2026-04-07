export const questionsData = [
  {
    q: "Câu 1: Lệnh nào sau đây thuộc nhóm DML (Data Manipulation Language)?",
    options: [
      "CREATE, DROP, ALTER",
      "GRANT, REVOKE",
      "SELECT, INSERT, UPDATE, DELETE",
      "COMMIT, ROLLBACK",
    ],
    answer: 2,
  },
  {
    q: "Câu 2: Thứ tự thực thi CỐT LÕI của một truy vấn SQL chứa các mệnh đề sau là gì?",
    options: [
      "SELECT -> FROM -> WHERE -> GROUP BY",
      "FROM -> WHERE -> GROUP BY -> SELECT",
      "WHERE -> FROM -> SELECT -> GROUP BY",
      "FROM -> GROUP BY -> WHERE -> SELECT",
    ],
    answer: 1,
  },
  {
    q: "Câu 3: Sự khác biệt chính giữa UNION và UNION ALL là gì?",
    options: [
      "UNION ALL tự động sắp xếp kết quả.",
      "UNION loại bỏ các dòng trùng lặp, UNION ALL giữ lại tất cả.",
      "UNION ALL chỉ dùng được trong MySQL.",
      "Không có sự khác biệt.",
    ],
    answer: 1,
  },
  {
    q: "Câu 4: Mệnh đề HAVING được sử dụng để làm gì?",
    options: [
      "Lọc dữ liệu trước khi gom nhóm.",
      "Thay thế hoàn toàn cho WHERE.",
      "Lọc dữ liệu sau khi đã gom nhóm (GROUP BY).",
      "Sắp xếp dữ liệu giảm dần.",
    ],
    answer: 2,
  },
  {
    q: "Câu 5: Tính chất ACID trong Database Transaction không bao gồm yếu tố nào?",
    options: [
      "Atomicity (Tính nguyên tử)",
      "Consistency (Tính nhất quán)",
      "Isolation (Tính độc lập)",
      "Concurrency (Tính đồng thời)",
    ],
    answer: 3,
  },
  {
    q: "Câu 6: INNER JOIN sẽ trả về kết quả nào?",
    options: [
      "Tất cả các bản ghi của bảng bên trái.",
      "Tất cả các bản ghi của bảng bên phải.",
      "Chỉ các bản ghi có sự khớp nhau ở cả hai bảng.",
      "Tất cả bản ghi của cả hai bảng.",
    ],
    answer: 2,
  },
  {
    q: "Câu 7: Sự khác biệt giữa kiểu VARCHAR và NVARCHAR?",
    options: [
      "VARCHAR lưu độ dài cố định, NVARCHAR lưu độ dài thay đổi.",
      "NVARCHAR hỗ trợ lưu trữ ký tự Unicode (tiếng Việt có dấu).",
      "VARCHAR có tốc độ chậm hơn NVARCHAR.",
      "NVARCHAR chỉ tồn tại trong MySQL.",
    ],
    answer: 1,
  },
  {
    q: "Câu 8: COUNT(*) và COUNT(Tên_Cột) khác nhau ở điểm nào?",
    options: [
      "COUNT(*) đếm cả những dòng có giá trị NULL ở cột, COUNT(Tên_Cột) bỏ qua NULL.",
      "COUNT(Tên_Cột) chạy nhanh hơn COUNT(*).",
      "Không có sự khác biệt.",
      "COUNT(*) chỉ đếm các dòng không trùng lặp.",
    ],
    answer: 0,
  },
  {
    q: "Câu 9: Ràng buộc (Constraint) nào đảm bảo không có giá trị trùng lặp và không chứa giá trị NULL?",
    options: ["UNIQUE", "FOREIGN KEY", "PRIMARY KEY", "CHECK"],
    answer: 2,
  },
  {
    q: "Câu 10: Ký tự đại diện (Wildcard) nào dùng trong toán tử LIKE để đại diện cho đúng MỘT ký tự bất kỳ?",
    options: ["%", "*", "_ (Underscore)", "?"],
    answer: 2,
  },
  {
    q: "Câu 11: Cổng (Port) mặc định của MySQL và SQL Server lần lượt là?",
    options: ["8080 và 1433", "3306 và 1433", "1433 và 3306", "3306 và 8080"],
    answer: 1,
  },
  {
    q: "Câu 12: Để giới hạn lấy 5 bản ghi đầu tiên, cú pháp nào đúng?",
    options: [
      "LIMIT 5 (SQL Server) / TOP 5 (MySQL)",
      "TOP 5 (SQL Server) / LIMIT 5 (MySQL)",
      "FETCH FIRST 5 (cả hai)",
      "MAX 5 (cả hai)",
    ],
    answer: 1,
  },
  {
    q: "Câu 13: Để tạo một cột tự động tăng giá trị khi thêm mới bản ghi, ta dùng từ khóa nào?",
    options: [
      "AUTO_INCREMENT (MySQL) và IDENTITY (SQL Server)",
      "IDENTITY (MySQL) và AUTO_INCREMENT (SQL Server)",
      "SERIAL (MySQL) và AUTO_INCREMENT (SQL Server)",
      "AUTO_NUM (cả hai)",
    ],
    answer: 0,
  },
  {
    q: "Câu 14: Lệnh nào dùng để nối chuỗi (Concatenation) trong SQL Server?",
    options: [
      "CONCAT()",
      "Dấu cộng (+)",
      "Dấu hai gạch (||)",
      "Cả A và B đều đúng",
    ],
    answer: 3,
  },
  {
    q: "Câu 15: Hàm lấy ngày giờ hiện tại của hệ thống?",
    options: [
      "GETDATE() trong MySQL, NOW() trong SQL Server.",
      "NOW() trong MySQL, GETDATE() trong SQL Server.",
      "CURDATE() dùng chung cho cả hai.",
      "SYSDATE() dùng chung cho cả hai.",
    ],
    answer: 1,
  },
  {
    q: "Câu 16: Lệnh để gọi một Stored Procedure đã được tạo?",
    options: [
      "EXEC (SQL Server) và CALL (MySQL)",
      "CALL (SQL Server) và EXEC (MySQL)",
      "RUN (cả hai)",
      "EXECUTE (cả hai)",
    ],
    answer: 0,
  },
  {
    q: "Câu 17: Xử lý giá trị NULL: Nếu muốn trả về số 0 khi cột bị NULL, cú pháp nào đúng?",
    options: [
      "IFNULL(cot, 0) trong SQL Server",
      "ISNULL(cot, 0) trong MySQL",
      "ISNULL(cot, 0) trong SQL Server / IFNULL(cot, 0) trong MySQL",
      "NVL(cot, 0) trong cả hai",
    ],
    answer: 2,
  },
  {
    q: "Câu 18: Storage Engine mặc định (hỗ trợ Transaction) của MySQL là gì?",
    options: ["MyISAM", "InnoDB", "Memory", "SQLEngine"],
    answer: 1,
  },
  {
    q: "Câu 19: Để lấy độ dài của một chuỗi, hàm nào được sử dụng?",
    options: [
      "LENGTH() (MySQL) và LEN() (SQL Server)",
      "LEN() (MySQL) và LENGTH() (SQL Server)",
      "SIZE() trong cả hai",
      "STRLEN() trong cả hai",
    ],
    answer: 0,
  },
  {
    q: "Câu 20: Kiểu dữ liệu nào lưu giá trị Boolean (True/False) một cách tối ưu nhất?",
    options: [
      "BOOLEAN trong SQL Server, BIT trong MySQL.",
      "BIT trong SQL Server, TINYINT(1) hoặc BOOLEAN trong MySQL.",
      "VARCHAR(5) cho cả hai.",
      "INT cho cả hai.",
    ],
    answer: 1,
  },
  {
    q: "Câu 21: Câu lệnh TRUNCATE khác với DELETE ở điểm nào?",
    options: [
      "TRUNCATE xóa cấu trúc bảng, DELETE chỉ xóa dữ liệu.",
      "TRUNCATE không ghi log từng dòng bị xóa, nên nhanh hơn và thường không thể ROLLBACK.",
      "DELETE có thể reset lại chỉ số tự tăng (Identity), TRUNCATE thì không.",
      "Không có sự khác biệt.",
    ],
    answer: 1,
  },
  {
    q: "Câu 22: Clustered Index (Chỉ mục cụm) có đặc điểm gì?",
    options: [
      "Một bảng có thể có nhiều Clustered Index.",
      "Nó sắp xếp dữ liệu vật lý của bảng dựa trên cột được đánh index.",
      "Nó tạo ra một bảng tham chiếu riêng rẽ để tăng tốc độ tìm kiếm.",
      "Chỉ tạo được trên các cột kiểu số.",
    ],
    answer: 1,
  },
  {
    q: "Câu 23: Vấn đề 'SQL Injection' xảy ra chủ yếu do nguyên nhân nào?",
    options: [
      "Cấu hình server cơ sở dữ liệu yếu.",
      "Nối chuỗi (cộng chuỗi) trực tiếp tham số đầu vào từ người dùng vào câu truy vấn.",
      "Không sử dụng HTTPS.",
      "Dùng MySQL thay vì SQL Server.",
    ],
    answer: 1,
  },
  {
    q: "Câu 24: Trigger được kích hoạt khi nào?",
    options: [
      "Bất cứ khi nào có câu lệnh SELECT được chạy.",
      "Khi được gọi thủ công bằng lệnh EXECUTE.",
      "Tự động kích hoạt khi có sự kiện INSERT, UPDATE hoặc DELETE xảy ra trên bảng.",
      "Khi Database server khởi động.",
    ],
    answer: 2,
  },
  {
    q: "Câu 25: Khi thực thi truy vấn có mệnh đề LEFT JOIN, nếu bảng bên phải không có bản ghi tương ứng thì điều gì xảy ra?",
    options: [
      "Lỗi cú pháp (Syntax error).",
      "Truy vấn trả về kết quả bị thiếu các hàng của bảng bên trái.",
      "Các cột của bảng bên phải sẽ hiển thị giá trị NULL ở hàng kết quả tương ứng.",
      "Chỉ hiển thị các bản ghi khớp nhau giống hệt INNER JOIN.",
    ],
    answer: 2,
  },
];
